<?php

if (isset($_POST['submit'])) {

    include_once 'dbh-inc.php';

    $uid = mysqli_real_escape_string($conn, $_POST['uid']);
    $pass = mysqli_real_escape_string($conn, $_POST['pass']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);

    //Error handlers
    //Check for empty fields
    if (empty($uid) || empty($pass) || empty($email)) {
        header("Location: ../register.php?register=empty");
    }
    else {
        //Check if email is valid
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            header("Location: ../register.php?register=emailinvalid");
            exit();
        }
        else {
            $sql = "SELECT * FROM users WHERE user_uid = '$uid'";
            $result = mysqli_query($conn, $sql);
            $resultCheck = mysqli_num_rows($result);

            if ($resultCheck > 0) {
                header("Location: ../register.php?register=usernametaken");
                exit();
            }
            elseif ($resultCheck == 0) {
                $sql = "SELECT * FROM users WHERE user_email = '$email'";
                $result = mysqli_query($conn, $sql);
                $resultCheck = mysqli_num_rows($result);

                if ($resultCheck > 0) {
                    header("Location: ../register.php?register=emailtaken");
                    exit();
                }
                else {
                    $hashedPass = password_hash($pass, PASSWORD_DEFAULT);
                    //Insert the user into the database
                    $sql = "INSERT INTO users (user_uid, user_email, user_pass) VALUES ('$uid', '$email', '$hashedPass');";
                    $result = mysqli_query($conn, $sql);

                    $sql = "SELECT * FROM users WHERE user_uid = '$uid'";
                    $result = mysqli_query($conn, $sql);

                    if (mysqli_num_rows($result) > 0) {
                        while ($row = mysqli_fetch_assoc($result)) {
                            $userid = $row['user_id'];
                            $sql = "INSERT INTO profileimg (userid, status) VALUES ('$userid', 1)";
                            mysqli_query($conn, $sql);
                        }
                    }
                    header("Location: ../login.php?register=success");
                    exit();
                }
            }
        }
    }

}
else {
    header("Location: ../register.php");
    exit();
}
