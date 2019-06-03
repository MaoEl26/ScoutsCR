$( document ).ready(function() {
    cargarNombre();
    controladora();
});

var numIdentificacion = localStorage.getItem("numIdentificacion");
var tipoUso = 1;
var salidaTab = "";
var descripcionText = "";

var arrayBitacoras = [];
var arrayBitacorasPorcentajes = [];
var arrayBitacorasDescripciones = [];
var arraySubBitacorasPorcentajes = [0,0,0,0,0,0,0];
var control = 0;
var cantidadSubBitacoras = 0;

var indiceUso;
var porcentajeUso;

async function controladora(){
  cargarBitacoras();
  await sleep(2000);
  cargarSubBitacoras();
  await sleep(5000);
  actualizarPorcentaje();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function actualizarPorcentaje(){
  for (var i = 0; i < arrayBitacoras.length; i++) {
    arrayBitacorasPorcentajes[i] = (arraySubBitacorasPorcentajes[i]/cantidadSubBitacoras);
  }

  console.log(arrayBitacorasPorcentajes);
  console.log(control);

  for (var i = 0; i < arrayBitacoras.length; i++) {
    indiceUso = arrayBitacoras[i];
    porcentajeUso = arrayBitacorasPorcentajes[i];
    console.log(porcentajeUso);
    actualizarPorcentajeBrujula();
    await sleep(500);
  }  
}

function actualizarPorcentajeBrujula(){
  var parametros = {
    opcion : "actualizarPorcentajeBitacora",
    id : indiceUso,
    porcentaje : porcentajeUso
  };

  var post = $.post(
                        "php/mysql.php",    // Script que se ejecuta en el servidor
                        parametros,                              
                        siActualizarPorcentajeBitacora    // Función que se ejecuta cuando el servidor responde
                        );

}

function siActualizarPorcentajeBitacora(r){
  console.log("actualizado");
}

function cargarBitacoras(){
  var parametros = {
          opcion : "cargarBitacoraPersona",
          tipoUso : tipoUso,
          idPersona: numIdentificacion
      };

  // Realizar la petición
  var post = $.post(
                        "php/mysql.php",    // Script que se ejecuta en el servidor
                        parametros,                              
                        siRespuestacargarBitacoras    // Función que se ejecuta cuando el servidor responde
                        );  
}

function siRespuestacargarBitacoras(r){
  var doc = JSON.parse(r);
  //var salida = '<ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">';  
  var salida = "";                 
  $("#myTab").html("");
  for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        if (i == 0) {
          salida += '<li role="presentation" class="active"><a href="#'+obj.descripcion+'" id="'+obj.descripcion+'-tab" role="tab" data-toggle="tab" aria-expanded="true">'+obj.descripcion+'</a></li>';
        }else{
          salida += '<li role="presentation" class=""><a href="#'+obj.descripcion+'" role="tab" id="'+obj.descripcion+'-tab" data-toggle="tab" aria-expanded="false">'+obj.descripcion+'</a>'
        };
        arrayBitacoras[i] = obj.idBitacoraXTipoBitacora;
        arrayBitacorasPorcentajes[i] = obj.porcentaje;
        arrayBitacorasDescripciones[i] = obj.descripcion;
  }
  //salida += "</ul>";
  $("#myTab").html(salida);
}

async function cargarSubBitacoras(){
  salidaTab = "";
  //$("#myTabContent").html("");
  //var salidaTab = '<div id="myTabContent" class="tab-content">';  
  for (var i = 0; i < arrayBitacoras.length; i++) {
  //var i = 0;
    descripcionText = arrayBitacorasDescripciones[i];
    var progreso = arrayBitacorasPorcentajes[i]
    if (i == 0) {
      salidaTab += '<div role="tabpanel" class="tab-pane fade active in" id="'+descripcionText+'" aria-labelledby="home-tab">';
    }else{
      salidaTab += '<div role="tabpanel" class="tab-pane fade active in" id="'+descripcionText+'" aria-labelledby="profile-tab">';
    };
    salidaTab += '<div class="x_content">';
    salidaTab += '<form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left">';
    salidaTab += '<div class="form-group">';
    salidaTab += '<div class="panel-body">';
    salidaTab += '<div class="x_title">';
    salidaTab += '<label id="lblPorcentaje'+descripcionText+'"><h2>Completado: '+progreso+'%</h2></label>';
    if (progreso < 25) {
      salidaTab += '<div class="progress"><div class="progress-bar progress-bar-danger" data-transitiongoal="'+progreso+'" aria-valuenow="'+progreso+'" style="width: '+progreso+'%;"></div></div>'
    }else{  
      if (progreso < 50) {
        salidaTab += '<div class="progress"><div class="progress-bar progress-bar-warning" data-transitiongoal="'+progreso+'" aria-valuenow="'+progreso+'" style="width: '+progreso+'%;"></div></div>'
      }else{
        if (progreso < 75) {
          salidaTab += '<div class="progress"><div class="progress-bar progress-bar-info" data-transitiongoal="'+progreso+'" aria-valuenow="'+progreso+'" style="width: '+progreso+'%;"></div></div>'
        }else{
          salidaTab += '<div class="progress"><div class="progress-bar progress-bar-success" data-transitiongoal="'+progreso+'" aria-valuenow="'+progreso+'" style="width: '+progreso+'%;"></div></div>'
        };
      };
    };
    salidaTab += '<div class="clearfix"></div>';
    salidaTab += '</div>';
    cargarSubBitacora(i);
    await sleep(1000);
    salidaTab += '</div></div></form></div></div>';
  };
  //salidaTab += '</div>';
  $("#myTabContent").html("");
  $("#myTabContent").html(salidaTab);
}

function cargarSubBitacora(currentTab){
  var idBitacora = arrayBitacoras[currentTab];
  var parametros = {
          opcion : "cargarSubBitacoraPersona",
          tipoUso : tipoUso,
          idPersona: numIdentificacion,
          idBitacora:idBitacora
      };

  // Realizar la petición
  var post = $.post(
                        "php/mysql.php",    // Script que se ejecuta en el servidor
                        parametros,                              
                        siRespuestacargarSubBitacora    // Función que se ejecuta cuando el servidor responde
                        );  
}

function siRespuestacargarSubBitacora(r){ 
  var doc = JSON.parse(r);
  salidaTab += '<table class="table table-striped" id="tbl'+descripcionText+'">';
  salidaTab += '<thead><tr><th>Area</th><th>Porcentaje</th><th>Actualizar</th></tr></thead>'; 
  salidaTab += '<tbody>';
                 
  for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salidaTab += '<tr><td>'+obj.descripcion+'</td><td>'+obj.porcentaje+'%</td>';
        salidaTab += '<td><div class="btn-group"><button type="button" class="btn btn-round btn-primary btn-xs" value="'+obj.idTipoAreaXBitacoraTipoBitacora+'" onclick="actualizar(this)"'+'">Actualizar</button></div></td>';
        salidaTab += '</tr>';
        cantidadSubBitacoras = doc.length;
        arraySubBitacorasPorcentajes[control]+=Number(obj.porcentaje);               
  }
  control+=1;
  salidaTab += "</tbody></table>";            
}

function cargarNombre(){
  var parametros = {
      opcion : "cargarNombre",
      id: numIdentificacion
    }

    var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
                       parametros,                             
                       siRespuestacargarNombre    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarNombre(r){
  var doc = JSON.parse(r);
  var label = '<label id="lblNombre">Nombre: ';
  $("#lblNombre").html("");

  for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        label += obj.descripcion;
    }
  label += '</label>';
  $("#lblNombre").html(label);
}

function actualizar(button){ //--- ACCION DEL BOTÓN
  var value = button.value;
  localStorage.setItem("idTipoAreaXBitacoraTipoBitacora",value);
  setTimeout("location.href='actualizarPorcentajeBrujula.html'",0);
}
