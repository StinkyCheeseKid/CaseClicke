<?php

if (isset($_POST['save'])) {

    include 'dbh-inc.php';

    $tradelink = mysqli_real_escape_string($conn, $_POST['tradelink']);

}

?>
