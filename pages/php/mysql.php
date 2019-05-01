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

	case  'cargarGeneros':
		$resultado = $mysqli->query("CALL cargarGeneros()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case  'cargarNivelesEducativos':
		$resultado = $mysqli->query("CALL cargarNivelesEducativos()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case  'cargarProvincias':
		$resultado = $mysqli->query("CALL cargarProvincias()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

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
		if(!$mysqli->query("CALL editarEnfermedad(@id,@nombre)"))
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

	case 'agregarCargo':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarCargo (@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el cargo ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Cargo Agregado";
	break;

	case  'cargarCargos':
		$resultado = $mysqli->query("CALL cargarCargos()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarCargo':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarCargo(@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el cargo ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Cargo actualizado";
	break;

	case 'agregarEspecialidad':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarEspecialidad (@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la especialidad ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Especialidad Agregada";
	break;

	case  'cargarEspecialidades':
		$resultado = $mysqli->query("CALL cargarEspecialidades()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarEspecialidad':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarEspecialidad(@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la especialidad ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Especialidad actualizada";
	break;

	case 'agregarVacuna':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarVacuna(@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la vacuna ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Vacuna agregada";
	break;

	case  'cargarVacunas':
		$resultado = $mysqli->query("CALL cargarVacunas()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarVacuna':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarVacuna(@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la vacuna ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Vacuna actualizada";
	break;

	case 'agregarMedicamento':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarMedicamento(@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el medicamento ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Medicamento agregado";
	break;

	case  'cargarMedicamentos':
		$resultado = $mysqli->query("CALL cargarMedicamentos()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarMedicamento':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarMedicamento(@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el medicamento ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Medicamento agregado";
	break;

	case 'agregarNivelBrujula':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarTipoBitacora(@nombre,1)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el nivel ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Nivel agregado";
	break;

	case  'cargarNivelesBrujula':
		$resultado = $mysqli->query("CALL cargarTipoBitacora(1)");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarNivelBrujula':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarTipoBitacora(@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el nivel ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Nivel actualizado";
	break;

	case 'agregarSubnivelBrujula':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarTipoArea(@nombre,1)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el subnivel ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Submivel agregado";
	break;

	case  'cargarSubnivelesBrujula':
		$resultado = $mysqli->query("CALL cargarTipoArea(1)");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarSubnivelBrujula':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarTipoArea(@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el subnivel ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Subnivel actualizado";
	break;

	case 'agregarNivelBitacora':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarTipoBitacora(@nombre,0)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el nivel ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Nivel agregado";
	break;

	case  'cargarNivelesBitacora':
		$resultado = $mysqli->query("CALL cargarTipoBitacora(0)");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarNivelBitacora':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarTipoBitacora(@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el nivel ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Nivel actualizado";
	break;

	case 'agregarSubnivelBitacora':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarTipoArea(@nombre,0)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el subnivel ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Submivel agregado";
	break;

	case  'cargarSubnivelesBitacora':
		$resultado = $mysqli->query("CALL cargarTipoArea(0)");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarSubnivelBitacora':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarTipoArea(@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el subnivel ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Subnivel actualizado";
	break;

	default:
		# code...
		break;
}
?>