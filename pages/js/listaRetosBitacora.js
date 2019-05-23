$( document ).ready(function() {
    //cargarTablaRetosEspecialidad();
    cargarNombre();
});

var numIdentificacion = localStorage.getItem("numIdentificacion");
var identificacion = localStorage.getItem("idTipoEspecialidadXPersona");

var arrayRetos = [];

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

function cargarTablaRetosEspecialidad(){
	var parametros = {
		opcion : "cargarTablaRetosEspecialidad",
		id: identificacion
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarTabla    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarTabla(r){
	var doc = JSON.parse(r);
	var salida = '<table class="table table-striped" id="tblRetos"><thead><tr><th>Nombre</th>';
	salida+='<th>Fecha</th><th>Condición</th></tr></thead><tbody>';
              
  $("#tblRetos").html("");
  for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida +='<tr value="'+i+'">'
        salida += '<td>'+obj.nombre+'</td>';
        salida += '<td>'+obj.fecha+'</td>';
        salida += '<td>'+obj.condicion+'</td>';
        arrayRetos[i] = obj.idTipoEspecialidadXPersona;
        salida +='</tr>'
        
    }
    salida += "</tbody></table>";
    $("#tblRetos").html(salida);
}