$( document ).ready(function() {
	cargarPersonas();
    cargarEnfermedades();
    cargarMedicamentos();
    cargarAlergias();
    cargarVacunas();
    cargarTiposSangre();
    cargarPrimeraFicha();
});

var arrayPersonas = [];
var arrayEnfermedad = [];
var arrayMedicamentos = [];
var arrayAlergia = [];
var arrayVacunas = [];
var arraySangre = [];

var idFicha = 0;
var idtipoSangre = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function cargarPersonas(){
	console.log("cargar personas");
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
	console.log("si respuesta cargar personas");
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

function cargarFichaMedica(){
	obtenerIdFicha();
	$("#tbEnfermedad").html("");
	cargarEnfermedadesFicha();
	$("#tbAlergia").html("");
	cargarAlergiasFicha();
	$("#tbVacuna").html("");
	cargarVacunasFicha();
	setSangre();
}

async function cargarPrimeraFicha(){
	await sleep(5000);
	obtenerIdFicha();
	$("#tbEnfermedad").html("");
	await sleep(2000);
	cargarEnfermedadesFicha();
	$("#tbAlergia").html("");
	cargarAlergiasFicha();
	$("#tbVacuna").html("");
	cargarVacunasFicha();
	setSangre();
}

function setSangre(){
	for (var i = 0; i <= arraySangre.length; i++) {
		if (arraySangre[i] == idtipoSangre) {
			document.getElementById('cbSangre').selectedIndex = i;
		};
	};
}

function obtenerIdFicha(){
	console.log(arrayPersonas);
	var idPersona = arrayPersonas[document.getElementById('cbPersona').selectedIndex];
	console.log("persona ");
	console.log(idPersona);
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
	console.log("ficha");
	try {
  		var doc = JSON.parse(r);
		idFicha = doc[0].idfichaMedica;
		idtipoSangre = doc[0].idTipoSangre;
		console.log("ficha cargada");
		console.log(idFicha);
	}
	catch(err) {
		console.log("crear ficha medica");
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
	console.log("ficha medica creada");
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

function actualizarFicha(){
	var tipoSangre = arraySangre[document.getElementById('cbSangre').selectedIndex];
	console.log(idFicha);
	console.log(tipoSangre);
	var parametros = {
		opcion : "actualizarFicha",
		idFicha: idFicha,
		tipoSangre: tipoSangre
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestaactualizarFicha    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestaactualizarFicha(r){
	console.log("ficha actualizada");
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
	console.log("enferfedad agregada");
	cargarEnfermedadesFicha();
}

function cargarEnfermedadesFicha(){
	console.log("cargando enferfedades");
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
	$("#tbEnfermedad").html("");
	try{
		var doc = JSON.parse(r);
		var salida = '<table class="table table-striped" id="tbEnfermedad"><thead><tr><th>Enfermedad</th><th>Medicamento</th><th>Dosis</th></tr></thead><tbody>';                   
		for (var i = 0; i < doc.length; i++) {
	        var obj = doc[i];
	        salida += '<tr><td>'+obj.descripcion+'</td><td>'+obj.Descripcion+'</td><td>'+obj.Dosis+'</td></tr>';
	        //arraySangre[i] = obj.idtipoSangre;
	    }
	    salida += "</tbody></table>";
	}catch (err){
		var salida = '<table class="table table-striped" id="tbEnfermedad"><thead><tr><th>Enfermedad</th><th>Medicamento</th><th>Dosis</th></tr></thead><tbody></tbody></table>'; 
	}
	$("#tbEnfermedad").html(salida);
}

function cargarAlergiasFicha(){
	console.log("cargando alergias");
	var parametros = {
        opcion : "cargarAlergiasFicha",
        idFicha: idFicha
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestacargarAlergiasFicha   // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestacargarAlergiasFicha(r){
	$("#tbAlergia").html("");
	try{
		var doc = JSON.parse(r);
		var salida = '<table class="table table-striped" id="tbAlergia"><thead><tr><th>Alergia</th><th>Detalle</th></tr></thead><tbody>';                   
		for (var i = 0; i < doc.length; i++) {
	        var obj = doc[i];
	        salida += '<tr><td>'+obj.Descripcion+'</td><td>'+obj.Detalle+'</td></tr>';
	        //arraySangre[i] = obj.idtipoSangre;
	    }
	    salida += "</tbody></table>";
	}catch (err){
		var salida = '<table class="table table-striped" id="tbAlergia"><thead><tr><th>Alergia</th><th>Detalle</th></tr>/thead><tbody></tbody></table>'; 
	}
	$("#tbAlergia").html(salida);
}

function agregarAlergia(){
	var alergia = arrayAlergia[document.getElementById('cbAlergia').selectedIndex];
	var parametros = {
        opcion : "agregarAlergiaFicha",
        idFicha: idFicha,
        alergia: alergia,
        detalle: $('#txtDetalle').val()
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestaagregarAlergiaFicha   // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestaagregarAlergiaFicha(r){
	console.log("alergia agregada");
	cargarAlergiasFicha();
}

function cargarVacunasFicha(){
	console.log("cargando vacunas");
	var parametros = {
        opcion : "cargarVacunasFicha",
        idFicha: idFicha
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestacargarVacunasFicha   // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestacargarVacunasFicha(r){
	$("#tbVacuna").html("");
	try{
		var doc = JSON.parse(r);
		var salida = '<table class="table table-striped" id="tbVacuna"><thead><tr><th>Vacuna</th><th>Fecha</th></tr></thead><tbody>';                   
		for (var i = 0; i < doc.length; i++) {
	        var obj = doc[i];
	        salida += '<tr><td>'+obj.descripcion+'</td><td>'+obj.fechaVacuna+'</td></tr>';
	        //arraySangre[i] = obj.idtipoSangre;
	    }
	    salida += "</tbody></table>";
	}catch (err){
		var salida = '<table class="table table-striped" id="tbVacuna"><thead><tr><th>Alergia</th><th>Detalle</th></tr>/thead><tbody></tbody></table>'; 
	}
	$("#tbVacuna").html(salida);
}

function agregarVacuna(){
	var vacuna = arrayVacunas[document.getElementById('cbAlergia').selectedIndex];
	var parametros = {
        opcion : "agregarVacunaFicha",
        idFicha: idFicha,
        vacuna: vacuna,
        fecha: $('#single_cal2').val()
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestaagregarVacuna   // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestaagregarVacuna(r){
	console.log("vacuna agregada");
	cargarVacunasFicha();
}