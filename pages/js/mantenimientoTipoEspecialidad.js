$( document ).ready(function() {
    cargarEspecialidades();
});

var arrayEspecialidad = [];

function cargarEspecialidades(){
	var parametros = {
		opcion : "cargarEspecialidades"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarEspecialidades    // Función que se ejecuta cuando el servidor responde
                         );
 }

function siRespuestacargarEspecialidades(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbEspecialidad">';                   
	$("#cbEspecialidad").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayEspecialidad[i] = obj.idTipoEspecialidad;
    }
    salida += "</select>";
    $("#cbEspecialidad").html(salida);
}

function agregarEspecialidad(){
	if (document.getElementById('txtNombre').value == "") {
		alert('El nombre de la especialidad es requerido');
	}else{	
		var parametros = {
	        opcion : "agregarEspecialidad",
	        txtNombre: $('#txtNombre').val(),
	    };

	    // Realizar la petición
		var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
		                      parametros,    	                       
		                      siRespuestaEspecialidad    // Función que se ejecuta cuando el servidor responde
	                          );
	}
}

function limpiar(){
	document.getElementById('txtNombre').value = "";
	document.getElementById('txtNombreMod').value = "";
}

function editarEspecialidad(){
	if (document.getElementById('txtNombreMod').value == "") {
		alert('El nombre actualizado de la especialidad es requerido');
	}else{
	    var id = arrayEspecialidad[document.getElementById('cbEspecialidad').selectedIndex];
	    console.log(id);
	    var parametros = {
	        opcion : "editarEspecialidad",
	        id : id,
	        txtNombre: $('#txtNombreMod').val(),
	    };

	    // Realizar la petición
	    var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
	                          parametros,                              
	                          siRespuestaEspecialidad  // Función que se ejecuta cuando el servidor responde
	                          );  
	}
}

function siRespuestaEspecialidad(r){
    limpiar();
    alert(r);
    cargarEspecialidades();
}