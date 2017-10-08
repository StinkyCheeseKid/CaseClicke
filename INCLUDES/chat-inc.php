<?php

session_start();

if(isset($_POST['submit'])) {

    include_once 'dbh-inc.php';

    $pseudo = $_SESSION['u_uid'];
    $message = htmlspecialchars($_POST['message']);

    if (!empty($message)) {
        $sql = "INSERT INTO chat (chat_uid, chat_text) VALUES ('$pseudo', '$message')";
        $result = mysqli_query($conn, $sql);
        header("Location: ../chat.php");
    }
    else {
        header("Location: ../chat.php");
    }
}
