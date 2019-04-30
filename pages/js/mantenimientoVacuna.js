$( document ).ready(function() {
    cargarVacunas();
});

var arrayVacunas = [];

function cargarVacunas(){
	var parametros = {
		opcion : "cargarVacunas"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarVacunas    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarVacunas(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbVacunas">';                   
	$("#cbVacunas").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayVacunas[i] = obj.idVacuna;
    }
    salida += "</select>";
    $("#cbVacunas").html(salida);
}

function agregarVacuna(){
	if (document.getElementById('txtNombre').value == "") {
		alert('El nombre de la vacuna es requerido');
	}else{	
		var parametros = {
	        opcion : "agregarVacuna",
	        txtNombre: $('#txtNombre').val(),
	    };

	    // Realizar la petición
		var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
		                      parametros,    	                       
		                      siRespuestaVacuna    // Función que se ejecuta cuando el servidor responde
	                          );
	}
}

function limpiar(){
	document.getElementById('txtNombre').value = "";
	document.getElementById('txtNombreMod').value = "";
}

function editarVacuna(){
	if (document.getElementById('txtNombreMod').value == "") {
		alert('El nombre actualizado de la vacuna es requerido');
	}else{
	    var id = arrayVacunas[document.getElementById('cbVacunas').selectedIndex];
	    console.log(id);
	    var parametros = {
	        opcion : "editarVacuna",
	        id : id,
	        txtNombre: $('#txtNombreMod').val(),
	    };

	    // Realizar la petición
	    var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
	                          parametros,                              
	                          siRespuestaVacuna    // Función que se ejecuta cuando el servidor responde
	                          );  
	}
}

function siRespuestaVacuna(r){
    limpiar();
    alert(r);
    cargarVacunas();
}