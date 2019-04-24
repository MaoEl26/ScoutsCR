$( document ).ready(function() {
    cargarAlergias();
});

var arrayAlergia = [];

function cargarAlergias(){
	var parametros = {
		opcion : "cargarAlergias"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarAlergias    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarAlergias(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbAlergia">';                   
	$("#cbAlergia").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.Descripcion+'</option>';
        arrayAlergia[i] = obj.idAlergia;
    }
    salida += "</select>";
    $("#cbAlergia").html(salida);
}

function agregarAlergia(){
	if (document.getElementById('txtNombre').value == "") {
		alert('El nombre de la alergia es requerido');
	}else{	
		var parametros = {
	        opcion : "agregarAlergia",
	        txtNombre: $('#txtNombre').val(),
	    };

	    // Realizar la petición
		var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
		                      parametros,    	                       
		                      siRespuestaAlergia    // Función que se ejecuta cuando el servidor responde
	                          );
	}
}

function limpiar(){
	document.getElementById('txtNombre').value = "";
	document.getElementById('txtNombreMod').value = "";
}

function editarAlergia(){
	if (document.getElementById('txtNombreMod').value == "") {
		alert('El nombre actualizado de la alergia es requerido');
	}else{	
	    var id = arrayAlergia[document.getElementById('cbAlergia').selectedIndex];
	    console.log(id);
	    var parametros = {
	        opcion : "editarAlergia",
	        id : id,
	        txtNombre: $('#txtNombreMod').val(),
	    };

	    // Realizar la petición
	    var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
	                          parametros,                              
	                          siRespuestaAlergia    // Función que se ejecuta cuando el servidor responde
	                          ); 
	} 
}

function siRespuestaAlergia(r){
    limpiar();
    alert(r);
    cargarAlergias();
}