<?php


class bdatos {

	public $host;
	public $user;
	public $password;




	public function __construct ($host, $user, $password, $busqueda) {
		$this -> user = $user;
		$this -> password = $password;
		$this -> host = $host;



	}

	public function &conectar() {
		$connection = oci_connect($this -> user, $this -> password, $this -> host);
		return $connection;
	}
	public function consulta ($connection, $busqueda) {

		$query = oci_parse($connection, $busqueda);
		oci_execute($query);
		return $query;
	}
	public function resultado ($query) {

        echo "<table border='1'>\n";
        $primera = oci_fetch_array($query, OCI_ASSOC+OCI_RETURN_NULLS);

        if ($primera) {
            $columna = array_keys($primera);
        ?>
            <tr class="titulo">
        <?php
        foreach ($columna as $campo): ?>
            <th> <?php echo $campo; ?> </th>
        <?php endforeach; ?>
            </tr>

            <tr>
                <?php foreach($primera as $valor): ?>
                    <td> <?php echo $valor; ?> </td>
                <?php endforeach ?>
            </tr>
        <?php
        }


        while ($row = oci_fetch_array($query, OCI_ASSOC+OCI_RETURN_NULLS)) {
            echo "<tr>\n";
            foreach ($row as $key => $value) {
                echo "    <td>" . ($value !== null ? htmlentities($value, ENT_QUOTES) : "") . "</td>\n";
            }
            echo "</tr>\n";
        }
        echo "</table>\n";


	}
	}
