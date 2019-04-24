function agregarEnfermedad(){
	if (document.getElementById('txtNombre').value == "") {
		alert('El nombre de la enfermedad es requerido');
	}else{	
		var parametros = {
	        opcion : "agregarEnfermedad",
	        txtNombre: $('#txtNombre').val(),
	    };

	    // Realizar la petición
		var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
		                      parametros,    	                       
		                      siRespuestaagregarEnfermedad    // Función que se ejecuta cuando el servidor responde
	                          );
	}
}

function siRespuestaagregarEnfermedad(r){
	limpiar();
	alert(r);
}

function limpiar(){
	document.getElementById('txtNombre').value = "";
}