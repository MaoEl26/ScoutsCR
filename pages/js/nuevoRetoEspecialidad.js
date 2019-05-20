$( document ).ready(function() {
    cargarNombre();
});

var identificacion = localStorage.getItem("idTipoEspecialidadXPersona");
var numIdentificacion = localStorage.getItem("numIdentificacion");

var valCondicion;
var arrayEspecialidad = [];
var arrayEspecialidadPersona = [];

function infoExtra(radio){
  valCondicion = radio.value;
  console.log(valCondicion);
}

function limpiar(){
  document.getElementById('txtNombre').value = "";
  document.getElementById('txtFecha').value = "";
}

function agregarRetoEspecialidad(){

      var parametros = {
          opcion : "agregarRetoEspecialidad",
          nombre : $('#txtNombre').val(),
          fecha: $('#single_cal2').val(),
          condicion: valCondicion,
          idEspecialidad : identificacion
      };

      // Realizar la petición
      var post = $.post(
                            "php/mysql.php",    // Script que se ejecuta en el servidor
                            parametros,                              
                            siRespuesta    // Función que se ejecuta cuando el servidor responde
                            );  
      console.log($('#txtFecha').val());
}

function cargarNombre(){
  var parametros = {
      opcion : "cargarNombre",
      id: numIdentificacion
    }

    var post = $.post(
                         "php/mysql.php",    // Script que se ejecuta en el servidor
                       parametros,                             
                       siRespuestacargarNombre    // Función que se ejecuta cuando el servidor responde
                         );
}

function siRespuestacargarNombre(r){
  var doc = JSON.parse(r);
  var label = '<label id="lblNombre">Nombre: ';
  $("#lblNombre").html("");

  for (var i = 0; i < doc.length; i++) {
        var obj = doc[i];
        label += obj.descripcion;
    }
  label += '</label>';
  $("#lblNombre").html(label);
}


function siRespuesta(r){
    limpiar();
    alert(r);
    cargarNombre();
}