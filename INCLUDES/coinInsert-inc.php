<?php

session_start();

    include'dbh-inc.php';

    $sql = "SELECT * FROM coinflip ORDER BY c_cost1 DESC";
    $result = mysqli_query($conn, $sql);

    while($row = mysqli_fetch_assoc($result)) {
         echo "<div id='gameBox' style='border: 1px solid rgba(0,0,0,0.5); border-radius: 15px; box-shadow: 2px 2px 2px black; background: rgba(0,0,0,0.65)'>
             <div class='user1Box' style='float: left;margin-left: 2%;padding: 0px 7.5px 7.5px 5px;>
                <h3 style='color: white;'>" .$row['c_user1']. "</h3>
                <h4>Points: " .$row['c_cost1']. "</h4>";
            if ($row['c_side1'] == "Counter-Terrorist") {
                echo "<img style='border-radius: 50%;' src='CSS/IMGS/ctImgResized.jpg' alt='ctImg'/>
                </div>";
            }
            else {
                echo "<img style='border-radius: 50%;' src='CSS/IMGS/tImgResized.png' alt='tImg'/>
                </div>";
            }
            echo "</br>
            <h2>#" .$row['c_id']. "</h2>
            <form action='INCLUDES/coinGame-inc.php' method='POST'>
                    <button class='btn btn-primary' type='submit' name='join'>Join for <span style='color: red;'>" .$row['c_cost1']. "</span> points</button>
                    </form>
                    </br>
                    </br>";
            echo "<div class='user2Box' style='float: right;margin-right: 2%;padding: 0px 7.5px 7.5px 5px;>
                   <h3 style='color: white;'>" .$row['c_user2']. "</h3>
                   <h4>Points: " .$row['c_cost2']. "</h4>";
               if ($row['c_side1'] == "Counter-Terrorist") {
                   echo "<img style='border-radius: 50%;' src='CSS/IMGS/tImgResized.png' alt='tImg'/>
                   </div>
               </div>";
               }
               else {
                   echo "<img style='border-radius: 50%;' src='CSS/IMGS/ctImgResized.jpg' alt='ctImg'/>
                   </div>
               </div>";
               }
    }
