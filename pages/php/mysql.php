<?php
/*
$servername = null;
$username = 'root';
$password = 'bLyidsbaGhNMwIJz';
$DBName = 'dbscoutscr'; 
$dbport = null;
$instance = '/cloudsql/scoutscr:us-central1:dbscoutscr';
*/


$servername = "127.0.0.1";
$username = "root";
$password = "";
$DBName = "scouts";


//conecta
//$mysqli = new mysqli($servername, $username, $password,$DBName,$instance);
$mysqli = new mysqli($servername, $username, $password,$DBName);
$mysqli->set_charset("utf8");
if(!$mysqli) {
    header('HTTP/1.1 400 Bad Request');
    die();
}

$opcion = $_POST['opcion'];

switch ($opcion) {

	case  'cargarPersonas':
		$resultado = $mysqli->query("CALL cargarPersonas()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case  'cargarNumerosGrupos':
		$resultado = $mysqli->query("CALL cargarNumerosGrupos()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

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

	case  'cargarNiveles':
		$resultado = $mysqli->query("CALL cargarNiveles()");
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

	case  'cargarCantones':
		$id = $_POST['id'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$resultado = $mysqli->query("CALL cargarCantones (@id)");
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case  'cargarDistritos':
		$id = $_POST['id'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$resultado = $mysqli->query("CALL cargarDistritos (@id)");
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case  'cargarTiposSeccion':
		$resultado = $mysqli->query("CALL cargarTiposSeccion()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case  'cargarEtapasProgresion':
		$resultado = $mysqli->query("CALL cargarEtapasProgresion()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'agregarPersona':
		$numGrupo = $_POST['numGrupo'];
		$numPoliza = $_POST['numPoliza'];
		$Nombre = $_POST['Nombre'];
		$primerApellido = $_POST['primerApellido'];
		$segundoApellido = $_POST['segundoApellido'];
		$Identificacion = $_POST['Identificacion'];
		$fechaNacimiento = $_POST['fechaNacimiento'];
		$idGenero = $_POST['idGenero'];
		$Telefono = $_POST['Telefono'];
		$Correo = $_POST['Correo'];
		$idDistrito = $_POST['idDistrito'];
		$Direccion = $_POST['Direccion'];
		$idNivelEducativo = $_POST['idNivelEducativo'];
		$lugarOficio = $_POST['lugarOficio'];
		$Titulos = $_POST['Titulos'];
		$Religion = $_POST['Religion'];
		$Nacionalidad = $_POST['Nacionalidad'];
		$fechaInscripcion = $_POST['fechaInscripcion'];
		$mysqli->query("SET @numGrupo  = " . "'" . $mysqli->real_escape_string($numGrupo) . "'");
		$mysqli->query("SET @numPoliza  = " . "'" . $mysqli->real_escape_string($numPoliza) . "'");
		$mysqli->query("SET @Nombre  = " . "'" . $mysqli->real_escape_string($Nombre) . "'");
		$mysqli->query("SET @primerApellido  = " . "'" . $mysqli->real_escape_string($primerApellido) . "'");
		$mysqli->query("SET @segundoApellido  = " . "'" . $mysqli->real_escape_string($segundoApellido) . "'");
		$mysqli->query("SET @Identificacion  = " . "'" . $mysqli->real_escape_string($Identificacion) . "'");
		$mysqli->query("SET @fechaNacimiento  = " . "'" . $mysqli->real_escape_string($fechaNacimiento) . "'");
		$mysqli->query("SET @idGenero  = " . "'" . $mysqli->real_escape_string($idGenero) . "'");
		$mysqli->query("SET @Telefono  = " . "'" . $mysqli->real_escape_string($Telefono) . "'");
		$mysqli->query("SET @Correo  = " . "'" . $mysqli->real_escape_string($Correo) . "'");
		$mysqli->query("SET @idDistrito  = " . "'" . $mysqli->real_escape_string($idDistrito) . "'");
		$mysqli->query("SET @Direccion  = " . "'" . $mysqli->real_escape_string($Direccion) . "'");
		$mysqli->query("SET @idNivelEducativo  = " . "'" . $mysqli->real_escape_string($idNivelEducativo) . "'");
		$mysqli->query("SET @lugarOficio  = " . "'" . $mysqli->real_escape_string($lugarOficio) . "'");
		$mysqli->query("SET @Titulos  = " . "'" . $mysqli->real_escape_string($Titulos) . "'");
		$mysqli->query("SET @Religion  = " . "'" . $mysqli->real_escape_string($Religion) . "'");
		$mysqli->query("SET @Nacionalidad  = " . "'" . $mysqli->real_escape_string($Nacionalidad) . "'");
		$mysqli->query("SET @fechaInscripcion  = " . "'" . $mysqli->real_escape_string($fechaInscripcion) . "'");
		if(!$mysqli->query("CALL agregarPersona (@numGrupo,@numPoliza,@Nombre,@primerApellido,@segundoApellido,@Identificacion,@fechaNacimiento,@idGenero,@Telefono,@Correo,@idDistrito,@Direccion,@idNivelEducativo,@lugarOficio,@Titulos,@Religion,@Nacionalidad,@fechaInscripcion)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la persona ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Persona agregada";
	break;

	case 'agregarMiembroJuvenil':
		$Identificacion = $_POST['Identificacion'];
		$idSeccion = $_POST['idSeccion'];
		$idEtapa = $_POST['idEtapa'];
		$fechaPromesa = $_POST['fechaPromesa'];
		$idioma = $_POST['idioma'];
		$idNivelEscritura = $_POST['idNivelEscritura'];
		$idNivelLectura = $_POST['idNivelLectura'];
		$idNivelComunicacion = $_POST['idNivelComunicacion'];
		$mysqli->query("SET @Identificacion  = " . "'" . $mysqli->real_escape_string($Identificacion) . "'");
		$mysqli->query("SET @idSeccion  = " . "'" . $mysqli->real_escape_string($idSeccion) . "'");
		$mysqli->query("SET @idEtapa  = " . "'" . $mysqli->real_escape_string($idEtapa) . "'");
		$mysqli->query("SET @fechaPromesa  = " . "'" . $mysqli->real_escape_string($fechaPromesa) . "'");
		$mysqli->query("SET @idioma  = " . "'" . $mysqli->real_escape_string($idioma) . "'");
		$mysqli->query("SET @idNivelEscritura  = " . "'" . $mysqli->real_escape_string($idNivelEscritura) . "'");
		$mysqli->query("SET @idNivelLectura  = " . "'" . $mysqli->real_escape_string($idNivelLectura) . "'");
		$mysqli->query("SET @idNivelComunicacion  = " . "'" . $mysqli->real_escape_string($idNivelComunicacion) . "'");
		if(!$mysqli->query("CALL agregarMiembroJuvenil (@Identificacion,@idSeccion,@idEtapa,@fechaPromesa,@idioma,
			@idNivelEscritura,@idNivelLectura,@idNivelComunicacion)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la persona ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Persona agregada";
	break;

	case 'agregarResponsable':
		$nombre = $_POST['nombre'];
		$primerApellido = $_POST['primerApellido'];
		$segundoApellido = $_POST['segundoApellido'];
		$correo = $_POST['correo'];
		$telefono = $_POST['telefono'];
		$idDistrito = $_POST['idDistrito'];
		$detalle = $_POST['detalle'];
		$idPersona = $_POST['idPersona'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		$mysqli->query("SET @primerApellido  = " . "'" . $mysqli->real_escape_string($primerApellido) . "'");
		$mysqli->query("SET @segundoApellido  = " . "'" . $mysqli->real_escape_string($segundoApellido) . "'");
		$mysqli->query("SET @correo  = " . "'" . $mysqli->real_escape_string($correo) . "'");
		$mysqli->query("SET @telefono  = " . "'" . $mysqli->real_escape_string($telefono) . "'");
		$mysqli->query("SET @idDistrito  = " . "'" . $mysqli->real_escape_string($idDistrito) . "'");
		$mysqli->query("SET @detalle  = " . "'" . $mysqli->real_escape_string($detalle) . "'");
		$mysqli->query("SET @idPersona  = " . "'" . $mysqli->real_escape_string($idPersona) . "'");
		if(!$mysqli->query("CALL agregarResponsable (@nombre,@primerApellido,@segundoApellido,@correo,@telefono,
			@idDistrito,@detalle,@idPersona)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la persona ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Responsable agregado";
	break;

	case 'agregarMiembroAdulto':
		$idPersona = $_POST['idPersona'];
		$idTipoCargo = $_POST['idTipoCargo'];
		$mysqli->query("SET @idPersona  = " . "'" . $mysqli->real_escape_string($idPersona) . "'");
		$mysqli->query("SET @idTipoCargo  = " . "'" . $mysqli->real_escape_string($idTipoCargo) . "'");		
		if(!$mysqli->query("CALL agregarMiembroAdulto (@idPersona,@idTipoCargo)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la persona ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Adulto agregado";
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

	case  'cargarDirigente':
		$resultado = $mysqli->query("CALL cargarDirigentes()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'agregarDirigente':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarAdultoXSeccion(@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la vacuna ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Vacuna actualizada";
	break;

	case 'cargarTabla':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		$resultado = $mysqli->query("CALL cargarDirigentesXSeccion(@nombre)");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case  'cargarMiembros':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		$resultado = $mysqli->query("CALL cargarDirigentes(@nombre)");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'agregarMiembro':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarAdultoXSeccion(@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que la vacuna ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Vacuna actualizada";
	break;

	case 'cargarTablaMiembros':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		$resultado = $mysqli->query("CALL cargarMiembros(@nombre)");
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

	case 'agregarGrupo':
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL agregarGrupo (@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el grupo ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Grupo agregado";
	break;

	case  'cargarGrupos':
		$resultado = $mysqli->query("CALL cargarGrupos()");
		$json = array();
		while($row = $resultado->fetch_array()){
			$json[] = $row;
		}
		echo json_encode($json) ;
	break;

	case 'editarGrupo':
		$id = $_POST['id'];
		$nombre = $_POST['txtNombre'];
		$mysqli->query("SET @id  = " . "'" . $mysqli->real_escape_string($id) . "'");
		$mysqli->query("SET @nombre  = " . "'" . $mysqli->real_escape_string($nombre) . "'");
		if(!$mysqli->query("CALL editarGrupo (@id,@nombre)"))
		{
    		if($mysqli) $mysqli->close(); // Close DB connection
    		header('HTTP/1.1 400 Es posible que el grupo ya exista');
    		die();
		}
		if($mysqli) $mysqli->close();
		echo "Grupo agregado";
	break;

	default:
		# code...
		break;
}
?>
