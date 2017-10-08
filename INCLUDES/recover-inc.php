<?php

session_start();

if (isset($_POST['submit'])) {

    include 'dbh-inc.php';

    $cle = $_GET['key'];
    $newUsername = mysqli_real_escape_string($conn, $_POST['username']);
    $newPass = mysqli_real_escape_string($conn, $_POST['pass']);
    $newPassConfirm = mysqli_real_escape_string($conn, $_POST['passConfirm']);

    $sql = "SELECT * FROM users WHERE user_key='$cle' ";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);

    if ($row['user_key'] !== $cle) {
        header("Location: ../forget.php?link=false");
        exit();
    }
    else {
        if (empty($newUsername) || empty($newPass) || empty($newPassConfirm)) {
            header("Location: ../index.php?recover=failed");
        }
        else {
            if ($newPass == $row['user_pass'] || $newPassConfirm == $row['user_pass']) {
                header("Location: ../index.php?recover=failed&password=same");
            }
            else {
                if ($newPass !== $newPassConfirm) {
                    header("Location: ../index.php?recover=password&passwordconfirm=x");
                }
                else {
                    $sql = "DELETE user_pass FROM users WHERE user_key='$cle'";
                    $result = mysqli_query($conn, $sql);

                    // $hashedPass = password_hash($newPass, PASSWORD_DEFAULT);
                    // $sql = "INSERT INTO users (user_pass) VALUES ('$hashedPass') WHERE user_key='$cle'";
                    // $result = mysqli_query($conn, $sql);

                    $sql = "UPDATE users SET user_uid='$newUsername' WHERE user_key='$cle'";
                    $result = mysqli_query($conn, $sql);
                    header("Location: ../login.php?recover=success!");
                    exit();
                }
            }
        }
    }
}
