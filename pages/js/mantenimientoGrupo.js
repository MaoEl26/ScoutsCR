$( document ).ready(function() {
    cargarGrupos();
});

var arrayGrupo = [];

function cargarGrupos(){
	var parametros = {
		opcion : "cargarGrupos"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarGrupos    // Función que se ejecuta cuando el servidor responde
                         );
 }

function siRespuestacargarGrupos(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbGrupo">';                   
	$("#cbGrupo").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.numGrupo+'</option>';
        arrayGrupo[i] = obj.idgrupo;
    }
    salida += "</select>";
    $("#cbGrupo").html(salida);
}

function agregarGrupo(){
	if (document.getElementById('txtNombre').value == "") {
		alert('El nombre del grupo es requerido');
	}else{	
		var parametros = {
	        opcion : "agregarGrupo",
	        txtNombre: $('#txtNombre').val(),
	    };

	    // Realizar la petición
		var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
		                      parametros,    	                       
		                      siRespuestaGrupo    // Función que se ejecuta cuando el servidor responde
	                          );
	}
}

function limpiar(){
	document.getElementById('txtNombre').value = "";
	document.getElementById('txtNombreMod').value = "";
}

function editarGrupo(){
	if (document.getElementById('txtNombreMod').value == "") {
		alert('El nombre actualizado del grupo es requerido');
	}else{
	    var id = arrayEspecialidad[document.getElementById('cbGrupo').selectedIndex];
	    console.log(id);
	    var parametros = {
	        opcion : "editarGrupo",
	        id : id,
	        txtNombre: $('#txtNombreMod').val(),
	    };

	    // Realizar la petición
	    var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
	                          parametros,                              
	                          siRespuestaGrupo  // Función que se ejecuta cuando el servidor responde
	                          );  
	}
}

function siRespuestaGrupo(r){
    limpiar();
    alert(r);
    cargarGrupos();
}