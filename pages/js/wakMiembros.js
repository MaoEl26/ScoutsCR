$( document ).ready(function() {
    //cargarMiembros();
    cargarTablaMiembros();
});

var arrayMiembros = [];
var arrayPromocion = [];


function promocionarMiembro(button){
	
	var id = button.value;
    console.log(id);
    var parametros = {
        opcion : "promocionarMiembro",
        id : id,
        txtNombre: "Comunidad",
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuesta    // Función que se ejecuta cuando el servidor responde
                          );  
}

function cargarTablaMiembros(){
	var parametros = {
		opcion : "cargarTablaMiembros",
		txtNombre: "Waktzuri"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarTabla    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarTabla(r){
	var doc = JSON.parse(r);
	var salida = '<table class="table table-striped" id="tblMiembros"><thead><tr><th>Identificación</th>';
	salida+='<th>Nombre</th><th>Opciones</th></tr></thead><tbody>';

  var promocion = '<table class="table table-striped" id="tblMiembrosPromocion"><thead><tr><th>Identificación</th>';
  promocion+='<th>Nombre</th><th>Promoción</th></tr></thead><tbody>';                  

	$("#tblMiembros").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida+='<tr value="'+i+'">'
        salida += '<td>'+obj.numIdentificacion+'</td>';
        salida += '<td>'+obj.descripcion+'</td>';
        salida += '<td>'+'<div class="btn-group">'+
        '<button data-toggle="dropdown" type="button" class="btn btn-success dropdown-toggle btn-xs"';
        salida += 'value="'+obj.numIdentificacion+'" onclick="almacenarValor(this);">'+'Opciones'+'<span class="caret"></span></button>';
        salida += '<ul role="menu" class="dropdown-menu">'+
                      '<li><a onclick="setRefEspecialidad()">Especialidad</a></li>'+
                      '<li><a onclick="setRefBitacora()">Bitacora</a></li>'+
                      '<li><a onclick="setRefBrujula()">Brujula</a></li></ul></div></td>';
        arrayMiembros[i] = obj.numIdentificacion;
        salida+='</tr>'

    }
    salida += "</tbody></table>";
    $("#tblMiembros").html(salida);
                  
  $("#tblMiembrosPromocion").html("");
  for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        promocion +='<tr value="'+i+'">'
        promocion += '<td>'+obj.numIdentificacion+'</td>';
        promocion += '<td>'+obj.descripcion+'</td>';
        promocion += '<td>'+'<div class="btn-group">'+
        '<button type="button" class="btn btn-round btn-primary"';
        promocion += 'value="'+obj.numIdentificacion+'" onclick="promocionarMiembro(this);">'+'Promocionar'+'</button>'+
        '</div></td>';
        arrayPromocion[i] = obj.numIdentificacion;
        promocion +='</tr>'
        
    }
    promocion += "</tbody></table>";
    $("#tblMiembrosPromocion").html(promocion);
}

function almacenarValor(button){
  var value = button.value;
  localStorage.setItem("numIdentificacion",value);
}

function setRefEspecialidad(){
  setTimeout("location.href='especialidad.html'",0);
}

function setRefBrujula(){
  setTimeout("location.href='brujula.html'",0);
}

function setRefBitacora(){
  setTimeout("location.href='bitacora.html'",0);
}

function siRespuesta(r){
    alert(r);
    cargarTablaMiembros();
}