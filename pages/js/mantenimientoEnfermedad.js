$( document ).ready(function() {
    cargarEnfermedades();
});

var arrayEnfermedad = [];

function cargarEnfermedades(){
	var parametros = {
		opcion : "cargarEnfermedades"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarEnfermedades    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarEnfermedades(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbEnfermedad">';                   
	$("#cbEnfermedad").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayEnfermedad[i] = obj.idEnfermedad;
    }
    salida += "</select>";
    $("#cbEnfermedad").html(salida);
}

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
	cargarEnfermedades();
	alert(r);
}

function limpiar(){
	document.getElementById('txtNombre').value = "";
	document.getElementById('txtNombreMod').value = "";
}

function editarEnfermedad(){
    var id = arrayEnfermedad[document.getElementById('cbEnfermedad').selectedIndex];
    console.log(id);
    var parametros = {
        opcion : "editarEnfermedad",
        id : id,
        txtNombre: $('#txtNombreMod').val(),
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestaeditarEnfermedad    // Función que se ejecuta cuando el servidor responde
                          );  
}

function siRespuestaeditarEnfermedad(r){
    limpiar();
    alert(r);
    cargarEnfermedades();
}