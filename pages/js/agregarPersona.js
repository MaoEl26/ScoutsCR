$( document ).ready(function() {
    cargarNivelesEducativos();
    cargarProvincias();
    cargarGeneros();
});

var infoMiembroAdulto = '<div class="x_panel" id="informationForm"><div class="x_title"><h2>Informacion miembro adulto<small></small></h2><div class="clearfix"></div></div><div class="x_content"><br /><form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left"><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Cargos que desempeña </label><div class="col-md-9 col-sm-9 col-xs-12" id="cargosCh"></div></div> <div class="ln_solid"></div><div class="form-group"><div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3"><button class="btn btn-primary" type="reset">Borrar</button><button type="submit" class="btn btn-success" onclick="agregarPersona();">Agregar</button></div></div></form></div></div>'
var infoMiembroJuvenil = '<div class="x_title"><h2>Informacion miembro juvenil<small></small></h2><div class="clearfix"></div></div><div class="x_content"><br /><form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left"><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Seccion </label><div class="col-md-6 col-sm-6 col-xs-12"><select class="form-control" id="cbSeccion"></select></div></div> <div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Etapa de progresion </label><div class="col-md-6 col-sm-6 col-xs-12"><select class="form-control" id="cbProgresion"></select></div></div> <div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Fecha de promesa </label><div class="col-md-6 xdisplay_inputx form-group has-feedback"><input type="text" class="form-control has-feedback-left" id="single_cal3" aria-describedby="txtFechaPromesa"><span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span><span id="txtFechaPromesa" class="sr-only">(success)</span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12" for="Nombre">Idioma </label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtIdioma" class="form-control col-md-7 col-xs-12"><span class="fa fa-user form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Nivel de escritura </label><div class="col-md-6 col-sm-6 col-xs-12"><select class="form-control" id="cbEscritura"></div> <div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Nivel de lectura </label><div class="col-md-6 col-sm-6 col-xs-12"><select class="form-control" id="cbLectura"></select></div></div> <div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Nivel de comunicacion </label><div class="col-md-6 col-sm-6 col-xs-12"><select class="form-control" id="cbComunicacion"></select></div></div><div class="ln_solid"></div></form></div><div class="x_title"><h2>Informacion del adulto responsable<small></small></h2><div class="clearfix"></div></div><div class="x_content"><br /><form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left"><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12" for="Nombre">Nombre <span class="required">*</span></label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtNombreResponsable" required="required" class="form-control col-md-7 col-xs-12"><span class="fa fa-user form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12" for="Nombre">Primer Apellido <span class="required">*</span></label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtPrimerApellidoResponsable" required="required" class="form-control col-md-7 col-xs-12"><span class="fa fa-user form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12" for="Nombre">Segundo Apellido <span class="required">*</span></label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtSegundoApellidoResponsable" required="required" class="form-control col-md-7 col-xs-12"><span class="fa fa-user form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12" for="Nombre">Correo <span class="required">*</span></label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtCorreoResponsable" required="required" class="form-control col-md-7 col-xs-12"><span class="fa fa-envelope form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Telefono <span class="required">*</span></label></label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtTelefonoResponsable" required="required" class="form-control" data-inputmask="mask : (999) 999-9999"><span class="fa fa-phone form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-0 col-sm-3 col-xs-12">Direccion </label><label class="control-label col-md-1 col-sm-3 col-xs-12">Provincia </label><div class="col-md-1 col-sm-6 col-xs-12"><select class="form-control" id="cbProvinciaResponsable"></select></div><label class="control-label col-md-1 col-sm-1 col-xs-12">Canton </label><div class="col-md-1 col-sm-6 col-xs-12"><select class="form-control" id="cbCantonResponsable"></select></div><label class="control-label col-md-1 col-sm-1 col-xs-12">Distrito </label><div class="col-md-1 col-sm-6 col-xs-12"><select class="form-control" id="cbDistritoResponsable"></select></div><label class="control-label col-md-4 col-sm-3 col-xs-12" for="Nombre">Detalle <span class="required">*</span></label><div class="col-md-5 col-sm-6 col-xs-12"><textarea id="txtDireccionResponsable" required="required" class="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."data-parsley-validation-threshold="10"></textarea></div></div><div class="ln_solid"></div><div class="form-group"><div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3"><button class="btn btn-primary" type="reset">Borrar</button><button type="submit" class="btn btn-success" onclick="agregarPersona();">Agregar</button></div></div></form></div>'

var arrayNivelesEducativos = [];
var arrayProvincias = [];
var arrayCantones = [];
var arrayDistritos = [];
var arrayCargos = [];

var tipoMiembro = 1
var genero = 0

function cargarNivelesEducativos(){
	var parametros = {
		opcion : "cargarNivelesEducativos"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarNivelesEducativos    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarNivelesEducativos(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbNivelEducativo">';                   
	$("#cbNivelEducativo").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayNivelesEducativos[i] = obj.idNivelEducacion;
    }
    salida += "</select>";
    $("#cbNivelEducativo").html(salida);
}

function cargarGeneros(){
	var parametros = {
		opcion : "cargarGeneros"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarGeneros    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarGeneros(r){
	var doc = JSON.parse(r);
	var salida = '<div class="btn-group" id="btnGenero" data-toggle="buttons">';                   
	$("#btnGenero").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<label class="btn btn-default active"><input type="radio" name="options" id="btnMasculino" onchange="cambiarGenero(this);" value="'+obj.idGenero+'">'+obj.descripcion+'</label>';
    }
    salida += "</div>";
    $("#btnGenero").html(salida);
}

function cambiarGenero(radio) {
	genero = radio.value;
}

function cargarProvincias(){
	var parametros = {
		opcion : "cargarProvincias"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarProvincias    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarProvincias(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbProvincia" onclick="cargarCantones();">';                   
	$("#cbProvincia").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayProvincias[i] = obj.idProvincia;
    }
    salida += "</select>";
    $("#cbProvincia").html(salida);
    cargarCantones();
}

function cargarCantones(){
	var index = document.getElementById('cbProvincia').selectedIndex;
    var id = arrayProvincias[index];
	var parametros = {
		opcion : "cargarCantones",
		id : id
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarCantones    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarCantones(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbCanton" onclick="cargarDistritos();">';                   
	$("#cbCanton").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayCantones[i] = obj.idCanton;
    }
    salida += "</select>";
    $("#cbCanton").html(salida);
    cargarDistritos();
}

function cargarDistritos(){
	var index = document.getElementById('cbProvincia').selectedIndex;
    var id = arrayProvincias[index];
	var parametros = {
		opcion : "cargarDistritos",
		id : id
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarDistritoss    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarDistritoss(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbDistrito" >';                   
	$("#cbDistrito").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayDistritos[i] = obj.idDistrito;
    }
    salida += "</select>";
    $("#cbDistrito").html(salida);
}

function cargarCargos(){
	var parametros = {
		opcion : "cargarCargos"
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarCargos    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarCargos(r){
	var doc = JSON.parse(r);
	var salida = '<div class="col-md-9 col-sm-9 col-xs-12" id="cargosCh">';                   
	$("#cargosCh").html("");
	for (var i = 0; i < doc.length; i++) {
        var j = i;
        var obj = doc[i];
        salida += '<div class="checkbox"><label><input type="checkbox" class="flat" id="cargoCh'+i+'">'+obj.descripcion+'</label></div>';
        arrayCargos[i] = obj.idTipoCargo;
    }
    salida += "</div>";
    $("#cargosCh").html(salida);
}

function infoExtra(radio){
	$("#informationForm").html("");
	if (radio.value == 1) {
		tipoMiembro = 1
		$("#informationForm").html(infoMiembroJuvenil);
	};
	if (radio.value == 2) {
		tipoMiembro = 2
		$("#informationForm").html(infoMiembroAdulto);
		cargarCargos();
	};
}

function agregarPersona(){
	var idNivelEducativo = arrayNivelesEducativos[document.getElementById('cbNivelEducativo').selectedIndex];
	var idDistrito = arrayDistritos[document.getElementById('cbDistrito').selectedIndex];
    var parametros = {
        opcion : "agregarPersona",
        numGrupo: $('#txtNumGrupo').val(),
        numPoliza: $('#txtNumPoliza').val(),
        Nombre: $('#txtNombre').val(),
        primerApellido: $('#txtPrimerApellido').val(),
        segundoApellido: $('#txtSegundoApellido').val(),
        Identificacion: $('#txtIdentificacion').val(),
        fechaNacimiento: $('#txtFechaNacimiento').val(),
        idGenero : genero,
        Telefono: $('#txtTelefono').val(),
        Correo: $('#txtCorreo').val(),
        idDistrito : idDistrito,
        Direccion: $('#txtDireccion').val(),
        idNivelEducativo : idNivelEducativo,
        lugarOficio: $('#txtLugarOficio').val(),
        Titulos: $('#txtTitulos').val(),
        Religion: $('#txtReligion').val(),
        Nacionalidad: $('#txtNacionalidad').val(),
        fechaInscripcion: $('#fechaInscripcion').val()
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestaagregarPersona    // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestaagregarPersona(){
	alert("persona agregada");
}