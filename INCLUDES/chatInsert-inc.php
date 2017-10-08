<?php

session_start();

    include_once 'dbh-inc.php';

$count = 1;

    $sql = "SELECT * FROM chat ORDER BY chat_id DESC LIMIT 16";
    $result = mysqli_query($conn, $sql);

        while($row = mysqli_fetch_assoc($result)) {
                echo "<div style='font-size: 22px; margin-left: 10px; color: white;'><strong>". $row['chat_uid'] ."</strong>: ". $row['chat_text'] ."</div></br>";
        $count++;
    }
