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
    		header('HTTP/1.1 400 Es posible que la enfermedad ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Enfermedad agregada";
	break;

	case  'cargarEnfermedades':
		$resultado = $mysqli->query("CALL cargarEnfermedades()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarEnfermedad':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarEnfermedad (@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la enfermedad ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Enfermedad actualizada";
	break;

	case 'agregarAlergia':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarAlergia (@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la alergia ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Alergia agregada";
	break;

	case  'cargarAlergias':
		$resultado = $mysqli->query("CALL cargarAlergias()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarAlergia':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarAlergia (@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la alergia ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Alergia actualizada";
	break;

	default:
		# code...
		break;
}
?>