$( document ).ready(function() {
    cargarDirigente();
    cargarTabla();
});

var arrayVacunas = [];

function cargarDirigente(){
	var parametros = {
		opcion : "cargarDirigente"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarDirigentes    // Función que se ejecuta cuando el servidor responde
                         );
}



function siRespuestacargarDirigentes(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbDirigentes">';                   
	$("#cbDirigentes").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayVacunas[i] = obj.idMiembroAdulto;
    }
    salida += "</select>";
    $("#cbDirigentes").html(salida);
}

function agregarDirigente(){
	
	var id = arrayVacunas[document.getElementById('cbDirigentes').selectedIndex];
    console.log(id);
    var parametros = {
        opcion : "agregarDirigente",
        id : id,
        txtNombre: "Tropa",
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuesta    // Función que se ejecuta cuando el servidor responde
                          );  
}

function cargarTabla(){
	var parametros = {
		opcion : "cargarTabla",
		txtNombre: "Tropa"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarTabla    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarTabla(r){
	var doc = JSON.parse(r);
	var salida = '<table class="table table-striped" id="tblDirigentes"><thead><tr><th>Identificación</th>';
	salida+='<th>Nombre</th><th>Cargo</th></tr></thead><tbody>';                   
	$("#tblDirigentes").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida+='<tr value="'+i+'">'
        salida += '<td>'+obj.numIdentificacion+'</td>';
        salida += '<td>'+obj.descripcion+'</td>';
        salida += '<td>'+obj.cargo+'</td>';
        arrayVacunas[i] = obj.idMiembroAdulto;
        salida+='</tr>'
    }
    salida += "</tbody></table>";
    $("#tblDirigentes").html(salida);
}

function siRespuesta(r){
    alert(r);
    cargarDirigente();
    cargarTabla();
}