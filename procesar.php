<?php
include "bdatos.php";

$user = $_POST ['user'];
$password = $_POST ['password'];
$host = $_POST ['host'];
$busqueda = $_POST ['consulta'];


$datos = new bdatos($host, $user, $password, $busqueda);

$login = $datos -> conectar();

$sentencia = $datos -> consulta($login, $busqueda);

$tabla = $datos -> resultado($sentencia);

?>

<link rel="stylesheet" href="css/style.css" type="text/css" id="" media="print, projection, screen" />
<script type="text/javascript" src="js/jquery-latest.js"></script>
<script type="text/javascript" src="js/jquery.tablesorter.js"></script>



<script type="text/javascript" id="">
	$(function() {
		$("table").tablesorter({debug: true});
	});
	$(function() {
		$( "table" ).resizable();
	});
</script>

