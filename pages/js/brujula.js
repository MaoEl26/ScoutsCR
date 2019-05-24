$( document ).ready(function() {
    cargarNombre();
});

var numIdentificacion = localStorage.getItem("numIdentificacion");

var arrayEspecialidad = [];
var arrayEspecialidadPersona = [];
var arrayBitacoras = [];
var arrayBitacorasPorcentajes = [];

function cargarBitacoras(){
  var tipoUso = 1;
}

function agregarEspecialidadPersona(){
	
	var id = arrayEspecialidad[document.getElementById('cbEspecialidad').selectedIndex];
      console.log(id);
      var parametros = {
          opcion : "agregarEspecialidadPersona",
          id : id,
          idPersona: numIdentificacion
      };

      // Realizar la petición
      var post = $.post(
                            "php/mysql.php",    // Script que se ejecuta en el servidor
                            parametros,                              
                            siRespuesta    // Función que se ejecuta cuando el servidor responde
                            );  
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


function cargarTablaEspecialidades(){
	var parametros = {
		opcion : "cargarTablaEspecialidades",
		id: numIdentificacion
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarTabla    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarTabla(r){
	var doc = JSON.parse(r);
	var salida = '<table class="table table-striped" id="tblEspecialidades"><thead><tr><th>Especialidad</th>';
	salida+='<th>Nuevo Reto</th><th>Listado Retos</th></tr></thead><tbody>';
              
  $("#tblEspecialidades").html("");
  for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida +='<tr value="'+i+'">'
        salida += '<td>'+obj.descripcion+'</td>';
        salida += '<td>'+'<div class="btn-group">'+
        '<button type="button" class="btn btn-round btn-primary btn-xs"'
        +'value="'+obj.idTipoEspecialidadXPersona+'" onclick="almacenarReto(this);">'+
        'Agregar'+'</button>'+'</div></td>';
        salida += '<td>'+'<div class="btn-group">'+
        '<button type="button" class="btn btn-round btn-primary btn-xs"'
        +'value="'+obj.idTipoEspecialidadXPersona+'" onclick="listaRetos(this);">'+
        'Ver'+'</button>'+'</div></td>';
        arrayEspecialidadPersona[i] = obj.idTipoEspecialidadXPersona;
        salida +='</tr>'
        
    }
    salida += "</tbody></table>";
    $("#tblEspecialidades").html(salida);
}

function almacenarReto(button){
  var value = button.value;
  localStorage.setItem("idTipoEspecialidadXPersona",value);
  setTimeout("location.href='nuevoRetoEspecialidad.html'",0);
}

function listaRetos(button){
  var value = button.value;
  localStorage.setItem("idTipoEspecialidadXPersona",value);
  setTimeout("location.href='listaRetos.html'",0);
}

function siRespuesta(r){
    alert(r);
    cargarTablaEspecialidades();
    cargarEspecialidades();
    cargarNombre();
}