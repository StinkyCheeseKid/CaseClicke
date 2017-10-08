<?php

session_start();

if (isset($_POST['submit'])) {

    include'dbh-inc.php';

    $uid = $_SESSION['u_uid'];
    $side = mysqli_real_escape_string($conn,$_POST['side']);
    $cost = mysqli_real_escape_string($conn,$_POST['cost']);

    if (empty($cost) || $cost == 0) {
        header("Location: ../coinflip.php?value=$cost&equipe=$side");
    }
    else {
        $min = 1;
        $max = 2;
        $winner = rand($min,$max);

        $sql = "INSERT INTO coinflip (c_user1, c_cost1, c_side1, c_user2, c_cost2, c_win) VALUES ('$uid', '$cost', '$side', '?', '$cost', '$winner');";
        $result = mysqli_query($conn, $sql);

        $_SESSION['u_balance'] -= $cost;
        header("Location: ../coinflip.php?game=created");
    }
}
