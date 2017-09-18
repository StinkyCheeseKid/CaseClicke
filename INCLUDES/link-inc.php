<?php

session_start();
if (isset($_POST['submit'])) {

    include 'dbh-inc.php';
    $uid = $_SESSION['u_uid'];

    $tradelink = mysqli_real_escape_string($conn, $_POST['tradelink']);
    $sql = "UPDATE users SET user_tradelink='$tradelink' WHERE user_uid='$uid'";
    $result = mysqli_query($conn, $sql);

    $sql = "SELECT user_tradelink FROM users WHERE user_uid = '$uid'";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);

    if (empty($tradelink)) {
        $sql = "UPDATE users SET user_tradelink='Tradelink...' WHERE user_uid='$uid'";
        $result = mysqli_query($conn, $sql);
        $sql = "SELECT * FROM users WHERE user_uid = '$uid'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $_SESSION['u_trade'] = $row['user_tradelink'];
        header("Location: ../index.php");
        exit();
    }
    else {
        $sql = "SELECT * FROM users WHERE user_uid = '$uid'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $_SESSION['u_trade'] = $row['user_tradelink'];
        header("Location: ../index.php?tradelink=validated");
        exit();
    }

}

?>
