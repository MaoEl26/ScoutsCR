$( document ).ready(function() {
	cargarPersonas();
    cargarEnfermedades();
    cargarMedicamentos();
    cargarAlergias();
    cargarVacunas();
    cargarTiposSangre();
    cargarFichaMedica();
});

var arrayPersonas = [];
var arrayEnfermedad = [];
var arrayMedicamentos = [];
var arrayAlergia = [];
var arrayVacunas = [];
var arraySangre = [];

var idFicha = 0;
var idtipoSangre = 0;

function cargarFichaMedica(){
	obtenerIdFicha();
	cargarEnfermedadesFicha();
}

function obtenerIdFicha(){
	var idPersona = arrayPersonas[document.getElementById('cbPersona').selectedIndex];
	var parametros = {
		opcion : "obtenerIdFicha",
		idPersona: idPersona
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestaobtenerIdFicha    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestaobtenerIdFicha(r){
	console.error("ficha");
	try {
  		var doc = JSON.parse(r);
		idFicha = doc[0].idfichaMedica;
		idtipoSangre = doc[0].idTipoSangre;
		console.error("ficha cargada");
		console.error(idFicha);
	}
	catch(err) {
		console.error("crear ficha medica");
		crearFichaMedica();
	}
}

function crearFichaMedica(){
	var idPersona = arrayPersonas[document.getElementById('cbPersona').selectedIndex];
	var tipoSangre = arraySangre[document.getElementById('cbSangre').selectedIndex];
	var parametros = {
		opcion : "crearFichaMedica",
		idPersona: idPersona,
		tipoSangre: tipoSangre
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacrearFichaMedica    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacrearFichaMedica(){
	console.error("ficha medica creada");
}

function cargarTiposSangre(){
	var parametros = {
		opcion : "cargarTiposSangre"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarTiposSangre    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarTiposSangre(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbSangre">';                   
	$("#cbSangre").html("");
	for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.Descripcion+'</option>';
        arraySangre[i] = obj.idtipoSangre;
    }
    salida += "</select>";
    $("#cbSangre").html(salida);
}

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
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbPersona">';                   
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
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayEnfermedad[i] = obj.idEnfermedad;
    }
    salida += "</select>";
    $("#cbEnfermedad").html(salida);
}

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
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.Descripcion+'</option>';
        arrayMedicamentos[i] = obj.idMedicamento;
    }
    salida += "</select>";
    $("#cbMedicamentos").html(salida);
}

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

function agregarEnfermedad(){
	var enfermedad = arrayEnfermedad[document.getElementById('cbEnfermedad').selectedIndex];
	var medicamento = arrayMedicamentos[document.getElementById('cbMedicamentos').selectedIndex];
	var parametros = {
        opcion : "agregarEnfermedadFicha",
        enfermedad: enfermedad,
        idFicha: idFicha,
        medicamento: medicamento,
        dosis: $('#txtDosis').val()
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestaagregarEnfermedad   // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestaagregarEnfermedad(r){
	console.error("enferfedad agregada");
	cargarEnfermedadesFicha();
}

function cargarEnfermedadesFicha(){
	console.error("cargando enferfedades");
	console.error(idFicha);
	var parametros = {
        opcion : "cargarEnferfedadesFicha",
        idFicha: idFicha
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestacargarEnferfedadesFicha   // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestacargarEnferfedadesFicha(r){
	try{
		var doc = JSON.parse(r);
		var salida = '<table class="table table-striped" id="tbEnfermedad"><thead><tr><th>Enfermedad</th><th>Medicamento</th><th>Dosis</th></tr></thead><tbody>';                   
		$("#tbEnfermedad").html("");
		for (var i = 0; i < doc.length; i++) {
	        var obj = doc[i];
	        salida += '<tr><td>'+obj.descripcion+'</td><td>'+obj.Descripcion+'</td><td>'+obj.Dosis+'</td></tr>';
	        //arraySangre[i] = obj.idtipoSangre;
	    }
	    salida += "</tbody></table>";
	    $("#tbEnfermedad").html(salida);
	}catch (err){
		$("#tbEnfermedad").html("");
	}
}