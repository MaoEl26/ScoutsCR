$( document ).ready(function() {
    //cargarMiembros();
    cargarTablaMiembros();
});

var arrayVacunas = [];

function agregarMiembro(){
	
	var id = arrayVacunas[document.getElementById('cbDirigentes').selectedIndex];
    console.log(id);
    var parametros = {
        opcion : "agregarMiembro",
        id : id,
        txtNombre: "Manada",
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
		txtNombre: "Manada"
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
	$("#tblMiembros").html("");
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
    $("#tblMiembros").html(salida);
}

function siRespuesta(r){
    alert(r);
    //cargarMiembros();
    cargarTablaMiembros();
}