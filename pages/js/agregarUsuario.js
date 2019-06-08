$( document ).ready(function() {
	cargarPersonas();
	cargarTiposUsuario();
});

var arrayPersonas = [];
var arrayTipos = [];

function cargarPersonas(){
	var parametros = {
		opcion : "cargarPersonas"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarPersonas    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarPersonas(r){
	console.log(r);
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="sPersona">';                   
	$("#cbPersona").html("");
	for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        var texto = obj.numIdentificacion + " " + obj.nombre + " " + obj.primerApellido + " " + obj.segundoApellido;
        salida += '<option value="'+i+'">'+texto+'</option>';
        arrayPersonas[i] = obj.numIdentificacion;
    }
    salida += "</select>";
    $("#cbPersona").html(salida);
}

function cargarTiposUsuario(){
	var parametros = {
		opcion : "cargarTiposUsuario"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarTiposUsuario    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarTiposUsuario(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="sTipoUsuario">';                   
	$("#cbTipoUsuario").html("");
	for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayTipos[i] = obj.idTipoUsuario;
    }
    salida += "</select>";
    $("#cbTipoUsuario").html(salida);
}

function agregarUsuario(){
	var pass = document.getElementById('txtPassword').value;
	var pass2 = document.getElementById('txtPassword2').value;
	if (pass != pass2) {
		alert("no");
		alert("Las contraseñas no coinciden.");
	}else{
		alert("si");
	    var idPersona = arrayPersonas[document.getElementById('sPersona').selectedIndex];
	    alert(idPersona);
		var idTipo = arrayTipos[document.getElementById('sTipoUsuario').selectedIndex];
		alert(idTipo);
	    var parametros = {
	        opcion : "agregarUsuario",
	        idPersona: idPersona,
	        usuario: $('#txtUsuario').val(),
	        pass: pass,
	        idTipo: idTipo
	    };

	    // Realizar la petición
	    var post = $.post(
	                          "php/mysql.php",    // Script que se ejecuta en el servidor
	                          parametros,                              
	                          siRespuestaagregarPersona    // Función que se ejecuta cuando el servidor responde
	                          ); 
	};
}

function siRespuestaagregarPersona(r){
    console.error("Usuario agregada");
}