$( document ).ready(function() {
    cargarNumerosGrupos();
    cargarNivelesEducativos();
    cargarProvincias();
    cargarGeneros();
    cargarTiposSeccion();
    cargarEtapasProgresion();
    cargarNiveles();
    cargarProvinciasResponsable();
    cargarCargos();
    document.getElementById('lblCargos').style.display = "none";
    document.getElementById('cbCargos').style.display = "none";
    document.getElementById('btnAgregar').style.display = "none";
});

//var infoMiembroAdulto = '<div class="x_title"><h2>Informacion miembro adulto<small></small></h2><div class="clearfix"></div></div><div class="x_content"><br /><form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left"><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Cargos que desempeña </label><div class="col-md-6 col-sm-6 col-xs-12"<select class="form-control" id="cbCargos"></select></div></div> <div class="ln_solid"></div><div class="form-group"><div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3"></div></div></form></div><button type="submit" class="btn btn-success" onclick="agregarPersona();">Agregar</button>'
//var infoMiembroJuvenil = '<div class="x_title"><h2>Informacion miembro juvenil<small></small></h2><div class="clearfix"></div></div><div class="x_content"><br /><form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left"><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Seccion </label><div class="col-md-6 col-sm-6 col-xs-12"><select class="form-control" id="cbSeccion"></select></div></div> <div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Etapa de progresion </label><div class="col-md-6 col-sm-6 col-xs-12"><select class="form-control" id="cbProgresion"></select></div></div> <div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Fecha de promesa </label><div class="col-md-6 xdisplay_inputx form-group has-feedback"><input type="text" class="form-control has-feedback-left" id="single_cal3" aria-describedby="txtFechaPromesa"><span class="fa fa-calendar-o form-control-feedback left" aria-hidden="true"></span><span id="txtFechaPromesa" class="sr-only">(success)</span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12" for="Nombre">Idioma </label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtIdioma" class="form-control col-md-7 col-xs-12"><span class="fa fa-user form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Nivel de escritura </label><div class="col-md-6 col-sm-6 col-xs-12"><select class="form-control" id="cbEscritura"></select></div></div> <div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Nivel de lectura </label><div class="col-md-6 col-sm-6 col-xs-12"><select class="form-control" id="cbLectura"></select></div></div> <div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Nivel de comunicacion </label><div class="col-md-6 col-sm-6 col-xs-12"><select class="form-control" id="cbComunicacion"></select></div></div><div class="ln_solid"></div></form></div><div class="x_title"><h2>Informacion del adulto responsable<small></small></h2><div class="clearfix"></div></div><div class="x_content"><br /><form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left"><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12" for="Nombre">Nombre <span class="required">*</span></label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtNombreResponsable" required="required" class="form-control col-md-7 col-xs-12"><span class="fa fa-user form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12" for="Nombre">Primer Apellido <span class="required">*</span></label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtPrimerApellidoResponsable" required="required" class="form-control col-md-7 col-xs-12"><span class="fa fa-user form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12" for="Nombre">Segundo Apellido <span class="required">*</span></label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtSegundoApellidoResponsable" required="required" class="form-control col-md-7 col-xs-12"><span class="fa fa-user form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12" for="Nombre">Correo <span class="required">*</span></label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtCorreoResponsable" required="required" class="form-control col-md-7 col-xs-12"><span class="fa fa-envelope form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-3 col-sm-3 col-xs-12">Telefono <span class="required">*</span></label></label><div class="col-md-6 col-sm-6 col-xs-12"><input type="text" id="txtTelefonoResponsable" required="required" class="form-control" data-inputmask="mask : (999) 999-9999"><span class="fa fa-phone form-control-feedback right" aria-hidden="true"></span></div></div><div class="form-group"><label class="control-label col-md-0 col-sm-3 col-xs-12">Direccion </label><label class="control-label col-md-1 col-sm-3 col-xs-12">Provincia </label><div class="col-md-1 col-sm-6 col-xs-12"><select class="form-control" id="cbProvinciaResponsable" onclick="cargarCantonesResponsable();"></select></div><label class="control-label col-md-1 col-sm-1 col-xs-12">Canton </label><div class="col-md-1 col-sm-6 col-xs-12"><select class="form-control" id="cbCantonResponsable" onclick="cargarDistritosResponsable();"></select></div><label class="control-label col-md-1 col-sm-1 col-xs-12">Distrito </label><div class="col-md-1 col-sm-6 col-xs-12"><select class="form-control" id="cbDistritoResponsable"></select></div><label class="control-label col-md-4 col-sm-3 col-xs-12" for="Nombre">Detalle <span class="required">*</span></label><div class="col-md-5 col-sm-6 col-xs-12"><textarea id="txtDireccionResponsable" required="required" class="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.."data-parsley-validation-threshold="10"></textarea></div></div><div class="ln_solid"></div><div class="form-group"><div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3"><button class="btn btn-primary" type="reset">Borrar</button><button type="submit" class="btn btn-success" onclick="agregarPersona();">Agregar</button></div></div></form></div>'

var arrayNumerosGrupos = [];
var arrayNivelesEducativos = [];
var arrayProvincias = [];
var arrayCantones = [];
var arrayDistritos = [];
var arrayCargos = [];

var arraySecciones = [];
var arrayEstapas = [];
var arrayNivel = [];
var arrayCantonesResponsable = [];
var arrayDistritosResponsable = [];

var tipoMiembro = 1;
var genero = 0;
var cargo = 0;

function cargarNumerosGrupos(){
    var parametros = {
        opcion : "cargarNumerosGrupos"
    }

    var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
                         parametros,                               
                         siRespuestacargarNumerosGrupos    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarNumerosGrupos(r){
    var doc = JSON.parse(r);
    var salida = '<select class="form-control" tabindex="-1" id="cbNumeroGrupo">';                   
    $("#cbNumeroGrupo").html("");
    for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.numGrupo+'</option>';
        arrayNumerosGrupos[i] = obj.idgrupo;
    }
    salida += "</select>";
    $("#cbNumeroGrupo").html(salida);
}

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
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayNivelesEducativos[i] = obj.idNivelEducacion;
    }
    salida += "</select>";
    $("#cbNivelEducativo").html(salida);
}

function cargarNiveles(){
    var parametros = {
        opcion : "cargarNiveles"
    }

    var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
                         parametros,                               
                         siRespuestacargarNiveles  // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarNiveles(r){
    var doc = JSON.parse(r);
    var salida = '<select class="form-control" tabindex="-1" id="cbEscritura">';  
    var salida2 = '<select class="form-control" tabindex="-1" id="cbLectura">';    
    var salida3 = '<select class="form-control" tabindex="-1" id="cbComunicacion">';               
    $("#cbEscritura").html("");
    $("#cbLectura").html("");
    $("#cbComunicacion").html("");
    for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        salida2 += '<option value="'+i+'">'+obj.descripcion+'</option>';
        salida3 += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayNivel[i] = obj.idnivel;
    }
    salida += "</select>";
    salida2 += "</select>";
    salida3 += "</select>";
    $("#cbEscritura").html(salida);
    $("#cbLectura").html(salida2);
    $("#cbComunicacion").html(salida);
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
    genero = doc[0].idGenero;                  
	$("#btnGenero").html("");
	for (var i = 0; i < doc.length; i++) {
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
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayCantones[i] = obj.idCanton;
    }
    salida += "</select>";
    $("#cbCanton").html(salida);
    cargarDistritos();
}

function cargarDistritos(){
	var index = document.getElementById('cbCanton').selectedIndex;
    var id = arrayCantones[index];
	var parametros = {
		opcion : "cargarDistritos",
		id : id
	}

	var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
	                     parametros,    	                       
	                     siRespuestacargarDistritos    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarDistritos(r){
	var doc = JSON.parse(r);
	var salida = '<select class="form-control" tabindex="-1" id="cbDistrito" >';                   
	$("#cbDistrito").html("");
	for (var i = 0; i < doc.length; i++) {
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
	var salida = '<select class="form-control" tabindex="-1" id="cbCargos">';                   
	$("#cbCargos").html("");
	for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salida += '<option value="'+obj.idTipoCargo+'">'+obj.descripcion+'</option>';
        arrayCargos[i] = obj.idTipoCargo;
    }
    salida += "</select>";
    $("#cbCargos").html(salida);
}

function infoExtra(radio){
	if (radio.value == 1) {
		tipoMiembro = 1;
        document.getElementById('informationForm').style.display = "block"
        document.getElementById('lblCargos').style.display = "none";
        document.getElementById('cbCargos').style.display = "none";
        document.getElementById('btnAgregar').style.display = "none";
	};
	if (radio.value == 2) {
		tipoMiembro = 2;
        document.getElementById('informationForm').style.display = "none"
        document.getElementById('lblCargos').style.display = "block";
        document.getElementById('cbCargos').style.display = "block";
        document.getElementById('btnAgregar').style.display = "block";
	};
    console.error(tipoMiembro);
}

function cargarTiposSeccion(){
    var parametros = {
        opcion : "cargarTiposSeccion"
    }

    var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
                         parametros,                               
                         siRespuestacargarTiposSeccion    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarTiposSeccion(r){
    var doc = JSON.parse(r);
    var salida = '<select class="form-control" tabindex="-1" id="cbSeccion" >';                   
    $("#cbSeccion").html("");
    for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.Descripcion+'</option>';
        arraySecciones[i] = obj.idTipoSeccion;
    }
    salida += "</select>";
    $("#cbSeccion").html(salida);
}

function cargarEtapasProgresion(){
    var parametros = {
        opcion : "cargarEtapasProgresion"
    }

    var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
                         parametros,                               
                         siRespuestacargarEtapasProgresion    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarEtapasProgresion(r){
    var doc = JSON.parse(r);
    var salida = '<select class="form-control" tabindex="-1" id="cbProgresion" >';                   
    $("#cbProgresion").html("");
    for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayEstapas[i] = obj.idEtapaProgresion;
    }
    salida += "</select>";
    $("#cbProgresion").html(salida);
}

function cargarProvinciasResponsable(){
    var parametros = {
        opcion : "cargarProvincias"
    }

    var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
                         parametros,                               
                         siRespuestacargarProvinciasResponsable    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarProvinciasResponsable(r){
    var doc = JSON.parse(r);
    var salida = '<select class="form-control" tabindex="-1" id="cbProvinciaResponsable" onclick="cargarCantonesResponsable();">';                     
    $("#cbProvinciaResponsable").html("");
    for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
    }
    salida += "</select>";
    $("#cbProvinciaResponsable").html(salida);
    cargarCantonesResponsable();
}

function cargarCantonesResponsable(){
    var index = document.getElementById('cbProvinciaResponsable').selectedIndex;
    var id = arrayProvincias[index];
    var parametros = {
        opcion : "cargarCantones",
        id : id
    }

    var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
                         parametros,                               
                         siRespuestacargarCantonesResponsable    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarCantonesResponsable(r){
    var doc = JSON.parse(r);
    var salida = '<select class="form-control" tabindex="-1" id="cbCanton" onclick="cargarDistritosResponsable();">';                   
    $("#cbCantonResponsable").html("");
    for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayCantonesResponsable[i] = obj.idCanton;
    }
    salida += "</select>";
    $("#cbCantonResponsable").html(salida);
    cargarDistritosResponsable();
}

function cargarDistritosResponsable(){
    var index = document.getElementById('cbCantonResponsable').selectedIndex;
    var id = arrayCantonesResponsable[index];
    var parametros = {
        opcion : "cargarDistritos",
        id : id
    }

    var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
                         parametros,                               
                         siRespuestacargarDistritosResponsable    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarDistritosResponsable(r){
    var doc = JSON.parse(r);
    var salida = '<select class="form-control" tabindex="-1" id="cbDistritoResponsable" >';                   
    $("#cbDistritoResponsable").html("");
    for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        salida += '<option value="'+i+'">'+obj.descripcion+'</option>';
        arrayDistritosResponsable[i] = obj.idDistrito;
    }
    salida += "</select>";
    $("#cbDistritoResponsable").html(salida);
}


function agregarPersona(){
    var idNumGrupo = arrayNumerosGrupos[document.getElementById('cbNumeroGrupo').selectedIndex];
	var idNivelEducativo = arrayNivelesEducativos[document.getElementById('cbNivelEducativo').selectedIndex];
	var idDistrito = arrayDistritos[document.getElementById('cbDistrito').selectedIndex];
    var parametros = {
        opcion : "agregarPersona",
        numGrupo: idNumGrupo,
        numPoliza: $('#txtNumPoliza').val(),
        Nombre: $('#txtNombre').val(),
        primerApellido: $('#txtPrimerApellido').val(),
        segundoApellido: $('#txtSegundoApellido').val(),
        Identificacion: $('#txtIdentificacion').val(),
        fechaNacimiento: $('#single_cal2').val(),
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
        fechaInscripcion: $('#single_cal4').val()
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestaagregarPersona    // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestaagregarPersona(r){
    console.error("Persona agregada");
}

function agregar(){
    console.error("Agregando");
    agregarPersona();
    if (tipoMiembro == 1){
        console.error("Miembro juvenil");
        agregarMiembroJuvenil();
        agregarResponsable();
    };
    if (tipoMiembro == 2){
        console.error("Miembro adulto");
        agregarMiembroAdulto(); 
    };
}

function agregarMiembroJuvenil(){
    var idSeccion = arraySecciones[document.getElementById('cbSeccion').selectedIndex];
    var idEtapa = arrayEstapas[document.getElementById('cbProgresion').selectedIndex];
    var idNivelEscritura = arrayNivel[document.getElementById('cbEscritura').selectedIndex];
    var idNivelLectura = arrayNivel[document.getElementById('cbLectura').selectedIndex];
    var idNivelComunicacion = arrayNivel[document.getElementById('cbComunicacion').selectedIndex];
    var parametros = {
        opcion : "agregarMiembroJuvenil",
        Identificacion: $('#txtIdentificacion').val(),
        idSeccion: idSeccion,
        idEtapa: idEtapa,
        fechaPromesa: $('#single_cal3').val(),
        idioma: $('#txtIdioma').val(),
        idNivelEscritura: idNivelEscritura,
        idNivelLectura: idNivelLectura,
        idNivelComunicacion: idNivelComunicacion
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestaagregarMiembroJuvenil    // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestaagregarMiembroJuvenil(r){
    alert("Miembro juvenil agregado");
}

function agregarResponsable(){
    var idDistrito = arrayDistritosResponsable[document.getElementById('cbDistritoResponsable').selectedIndex];
    var parametros = {
        opcion : "agregarResponsable",
        nombre: $('#txtNombreResponsable').val(),
        primerApellido: $('#txtPrimerApellidoResponsable').val(),
        segundoApellido: $('#txtSegundoApellidoResponsable').val(),
        correo: $('#txtCorreoResponsable').val(),
        telefono: $('#txtTelefonoResponsable').val(),
        idDistrito: idDistrito,
        detalle: $('#txtDireccionResponsable').val(),
        idPersona: $('#txtIdentificacion').val()
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestaagregarResponsable    // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestaagregarResponsable(r){
    console.error("Responsable agregado");
}

function agregarMiembroAdulto () {
    var idTipoCargo = arrayCargos[document.getElementById('cbCargos').selectedIndex];
    var parametros = {
        opcion : "agregarMiembroAdulto",
        idPersona: $('#txtIdentificacion').val(),
        idTipoCargo: idTipoCargo
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestaagregarMiembroAdulto   // Función que se ejecuta cuando el servidor responde
                          ); 
}

function siRespuestaagregarMiembroAdulto(r){
    console.error("Adulto agregado");
}

function crearBitacora(){
    var parametros = {
        opcion: "agregarBitacora",
        Identificacion: $('#txtIdentificacion').val()
    };

    var post = 
}