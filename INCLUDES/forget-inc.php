<?php

session_start();

if (isset($_POST['submit'])) {

    include 'dbh-inc.php';

    $email = mysqli_real_escape_string($conn, $_POST['email']);

    if (empty($email)) {
        header("Location: ../forget.php?forget=empty");
        exit();
    }
    else {
            $sql = "SELECT * FROM users WHERE user_email = '$email'";
            $result = mysqli_query($conn, $sql);
            $resultCheck = mysqli_num_rows($result);
            if ($resultCheck < 1) {
                header("Location: ../forget.php?forget=emailfalse");
                exit();
            }
            else {
                $sql = "SELECT * FROM users WHERE user_email = '$email'";
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                $cle = $row['user_key'];
                $link = "https://www.cookiefarm.net/recover.php?key=".$cle;

                /* A SUIVRE */

                $destinataire = $email;
                $sujet = "Forgot your password";
                $entete = "csgofarm.net";
                $message = 'Welcome back on CS:GO Farm,

You recently requested to reset your username or password.

Your username: '.$row["user_uid"].',

Link to reset username or password: ' .$link. '


--------------------------------------------------
This is an automatic mail, please do not respond.';

mail($destinataire, $sujet, $message, $entete);
header("Location: ../login.php?forget=sent");
            }

    }
}
