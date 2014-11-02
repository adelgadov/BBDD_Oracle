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

	public function conectar() {
		$connection = oci_connect($this -> user, $this -> password, $this -> host, 'AL32UTF8');
		return $connection;
	}
	public function consulta ($connection, $busqueda) {

		$query = oci_parse($connection, $busqueda);
		oci_execute($query);
		return $query;
	}
	public function resultado ($query) {
		$foot = array();
		?>	<table border="1" id="rowspan" class="tablesorter"><thead>	<?php
        $primera = oci_fetch_array($query, OCI_ASSOC+OCI_RETURN_NULLS);

        if ($primera) {
            $columna = array_keys($primera);

		?>  <tr>   <?php
        foreach ($columna as $campo):

			?>	<th>	<?php echo $campo; array_push($foot, $campo);?> </th>
        <?php endforeach; ?>

            </tr>

            </thead>
			<tfoot><tr>
			<?php for ($i = 0, $b = count($foot); $i < $b; $i++){
				?> <th class="header"> <?php echo $foot[$i] ?></th> <?php
			}?>
			</tr></tfoot><tbody>
			<tr>
				<?php  foreach($primera as $valor): ?>

					<td> <?php echo $valor; ?> </td>

				<?php endforeach ?>
			</tr>
        <?php
        }?><?php




        while ($row = oci_fetch_array($query, OCI_ASSOC+OCI_RETURN_NULLS)) {

            ?> <tr> <?php
            foreach ($row as  $value) {
                ?> <td> <?php echo $value; ?> </td> <?php
            }
            ?> </tr> <?php
        }
       ?> </tbody></table> <?php


	}
	}
