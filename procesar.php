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
<style type="text/css">
    tr:nth-child(odd) { background-color:#D2EAE8; }

    tr:nth-of-type(odd) { background-color:#FFFFFF; }

    tr:nth-of-type(even) { background-color:#D2EAE8; }

    .titulo {
        color: #386639;
        background-color: #9AEE9B;
    }
</style>