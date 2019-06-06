$( document ).ready(function() {

});

function obtenerPass(){
    var userName = document.getElementById('txtUserName').value;
    console.log(userName);
    var parametros = {
        opcion : "obtenerPass",
        userName: userName
    };

    // Realizar la petición
    var post = $.post(
                          "php/mysql.php",    // Script que se ejecuta en el servidor
                          parametros,                              
                          siRespuestaobtenerPass    // Función que se ejecuta cuando el servidor responde
                          ); 
}


function siRespuestaobtenerPass(r){
    try{
        var doc = JSON.parse(r);    
        var obj = doc[0];
        var pass = obj.contraseña         
        var contra = document.getElementById('txtPass').value;
        if (pass == contra) {
            setTimeout("location.href='index.html'",0);
        }else{
            alert("Contraseña incorrecta");
            console.log("Incorrecto");
        };
    }catch(e){
        alert("Usuario no registrado");
    }
    
}