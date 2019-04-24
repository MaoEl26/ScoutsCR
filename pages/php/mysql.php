<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$DBName = "scouts";

//conecta
$mysqli = new mysqli($servername, $username, $password,$DBName);
$mysqli->set_charset("utf8");
if(!$mysqli) {
    header('HTTP/1.1 400 Bad Request');
    die();
}

$opcion = $_POST['opcion'];

switch ($opcion) {

	case 'agregarEnfermedad':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarEnfermedad (@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la enfermedad');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Enfermedad agregada";
	break;
	default:
		# code...
		break;
}
?>