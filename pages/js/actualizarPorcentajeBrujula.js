$( document ).ready(function() {
    cargarNombre();
});

var identificacion = localStorage.getItem("idTipoAreaXBitacoraTipoBitacora");
var numIdentificacion = localStorage.getItem("numIdentificacion");

function limpiar(){
  document.getElementById('txtPorcentaje').value = "";
}

function actualizarPorcentajeSubBitacora(button){
  
  var id = button.value;
    console.log(id);
    var parametros = {
        opcion : "actualizarPorcentajeSubBitacora",
        id : id,
        txtNombre: $('#txtNombre').val(),,
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuesta    // Función que se ejecuta cuando el servidor responde
                          );  
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