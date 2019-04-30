$( document ).ready(function() {
    cargarMedicamentos();
});

var arrayMedicamentos = [];

function cargarMedicamentos(){
	var parametros = {
		opcion : "cargarMedicamentos"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarMedicamentos    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarMedicamentos(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbMedicamentos">';                   
	$("#cbMedicamentos").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.Descripcion+'</option>';
        arrayMedicamentos[i] = obj.idMedicamento;
    }
    salida += "</select>";
    $("#cbMedicamentos").html(salida);
}

function agregarMedicamento(){
	if (document.getElementById('txtNombre').value == "") {
		alert('El nombre del medicamento es requerido');
	}else{	
		var parametros = {
	        opcion : "agregarMedicamento",
	        txtNombre: $('#txtNombre').val(),
	    };

	    // Realizar la petición
		var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
		                      parametros,    	                       
		                      siRespuestaMedicamento    // Función que se ejecuta cuando el servidor responde
	                          );
	}
}

function limpiar(){
	document.getElementById('txtNombre').value = "";
	document.getElementById('txtNombreMod').value = "";
}

function editarMedicamento(){
	if (document.getElementById('txtNombreMod').value == "") {
		alert('El nombre actualizado del medicamento es requerido');
	}else{
	    var id = arrayMedicamentos[document.getElementById('cbMedicamentos').selectedIndex];
	    console.log(id);
	    var parametros = {
	        opcion : "editarMedicamento",
	        id : id,
	        txtNombre: $('#txtNombreMod').val(),
	    };

	    // Realizar la petición
	    var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
	                          parametros,                              
	                          siRespuestaMedicamento    // Función que se ejecuta cuando el servidor responde
	                          );  
	}
}

function siRespuestaMedicamento(r){
    limpiar();
    alert(r);
    cargarEnfermedades();
}