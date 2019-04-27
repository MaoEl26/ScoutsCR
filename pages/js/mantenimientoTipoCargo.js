$( document ).ready(function() {
    cargarCargos();
});

var arrayCargos = [];

function cargarCargos(){
	var parametros = {
		opcion : "cargarCargos"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarCargos   // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarCargos(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbCargo">';                   
	$("#cbCargo").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayCargos[i] = obj.idTipoCargo;
    }
    salida += "</select>";
    $("#cbCargo").html(salida);
}

function agregarCargo(){
	if (document.getElementById('txtNombre').value == "") {
		alert('El nombre del cargo es requerido');
	}else{	
		var parametros = {
	        opcion : "agregarCargo",
	        txtNombre: $('#txtNombre').val(),
	    };

	    // Realizar la petición
		var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
		                      parametros,    	                       
		                      siRespuestaCargo    // Función que se ejecuta cuando el servidor responde
	                          );
	}
}

function limpiar(){
	document.getElementById('txtNombre').value = "";
	document.getElementById('txtNombreMod').value = "";
}

function editarEnfermedad(){
	if (document.getElementById('txtNombreMod').value == "") {
		alert('El nombre actualizado del cargo es requerido');
	}else{
	    var id = arrayCargos[document.getElementById('cbCargo').selectedIndex];
	    console.log(id);
	    var parametros = {
	        opcion : "editarCargo",
	        id : id,
	        txtNombre: $('#txtNombreMod').val(),
	    };

	    // Realizar la petición
	    var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
	                          parametros,                              
	                          siRespuestaEnfermedad    // Función que se ejecuta cuando el servidor responde
	                          );  
	}
}

function siRespuestaCargo(r){
    limpiar();
    alert(r);
    cargarCargos();
}