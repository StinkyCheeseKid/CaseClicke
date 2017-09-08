<?php

session_start();
include_once 'dbh-inc.php';

$sessionId = $_SESSION['u_id'];
$fileName = "../uploads/profile" .$sessionId. "*";
$fileInfo = glob($fileName);
$fileExt = explode(".", $fileInfo[0]);
$fileActualExt = $fileExt[1];

$file = "../uploads/profile".$sessionId. "." .$fileActualExt;

    if(!unlink($file)) {
        header("Location: ../index.php?delete=failed");
    }
    else {
        header("Location: ../index.php?delete=success");
    }

$sql ="UPDATE profileimg SET status=1 WHERE userid='$sessionId'";
mysqli_query($conn, $sql);

header("Location: ../index.php?delete=success");
