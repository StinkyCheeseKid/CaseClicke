<?php

if (isset($_POST['submit'])) {

    include 'dbh-inc.php';

    $tradelink = mysqli_real_escape_string($conn, $_POST['tradelink']);

    if (empty($tradelink)) {
        echo '<input class="tradeLinkBox" type="text" name="tradelink" maxlength="100" placeholder="PUT A TRADE LINK">';
    }
    else {
        echo '<input class="tradeLinkBox" type="text" name="tradelink" maxlength="100" placeholder="'.$tradelink.'">';
        $sql = "INSERT INTO users (user_tradelink) VALUES ('$tradelink')";
        $result = mysqli_query($conn, $sql);
    }

}

?>
