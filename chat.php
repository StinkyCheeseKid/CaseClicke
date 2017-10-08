<?php
    session_start();
    include_once 'INCLUDES/dbh-inc.php';

    if (!isset($_SESSION['u_id'])) {
    echo '<script>
            window.location.href="login.php";
        </script>';
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
            <title>CS:GO Farm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            <link rel="stylesheet" href="CSS/styleChat.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="JS/main.js"></script>
    <script src="JS/animation.js"></script>
    <script>

        $(document).ready(function () {
            $(".chatBox").load("chatInsert-inc.php");
            $(".chatForm").submit(function () {

                return false;
            });

                setInterval(function(){
                 $('.chatBox').load('INCLUDES/chatInsert-inc.php');
                }, 1000);
        });

    </script>
    </head>
    <body>
        <div id="userSpot">
            <div class="userContent">
                <?php
                    if (isset($_SESSION['u_id'])) {
                        $id = $_SESSION['u_id'];
                        $sql = "SELECT * FROM users";
                        $result = mysqli_query($conn, $sql);
                        if (mysqli_num_rows($result) > 0) {
                            if ($row = mysqli_fetch_assoc($result)) {
                                $id = $_SESSION['u_id'];
                                $sqlImg = "SELECT * FROM profileimg WHERE userid='$id'";
                                $resultImg = mysqli_query($conn, $sqlImg);
                                if ($rowImg = mysqli_fetch_assoc($resultImg)) {
                                        if ($rowImg['status'] == 0) {
                                            echo '<h1 style="padding: 0 20px 7px 0;">' .$_SESSION["u_uid"]. '</h1>
                                                <div class="valueBox">
                                                <h2>Profile image</h2>
                                                <img class="avatarOfUser" src="../uploads/profile' .$id. '.jpg">
                                                <p style="font-size:10px;">Only jpg is supported</p>
                                                <form action="INCLUDES/upload-inc.php" method="POST" enctype="multipart/form-data">
                                                    <input class="fileSelector btn btn-basic" type="file" name="avatar">
                                                    <button class="fileSubmit btn btn-success" type="submit" name="submit" value="Upload">Save</button>
                                                </form>
                                                <form action="INCLUDES/delete-inc.php" method="POST">
                                                    <button class="fileDelete btn btn-danger" type="submit" name="submit">Delete</button>
                                                </form>
                                                </div>
                                                <div class="valueBox">
                                                    <p><strong>Points</strong></p>
                                                    <input class="balanceBox" type="text" value="' .$_SESSION["u_balance"]. '" disabled>
                                                </div>
                                                <div class="valueBox">
                                                    <p><strong>Trade link</strong></p>
                                                    <form action="INCLUDES/link-inc.php" method="POST">
                                                    <input class="tradeLinkBox" type="text" name="tradelink" maxlength="100" placeholder="'.$_SESSION['u_trade'].'">
                                                    <button type="submit" name="submit" class="saveTradeLinkBtn btn btn-success">Save</button>
                                                    </form>
                                                </div>';
                                        }
                                        else {
                                            echo '<h1 style="padding: 0 20px 7px 0;">' .$_SESSION["u_uid"]. '</h1>
                                                <div class="valueBox">
                                                <h2>Profile image</h2>
                                                <img class="avatarOfUser" src="../uploads/profileDefault2-resized.jpg">
                                                <p style="font-size:10px;">Only jpg is supported</p>
                                                <form action="INCLUDES/upload-inc.php" method="POST" enctype="multipart/form-data">
                                                    <input class="fileSelector btn btn-basic" type="file" name="avatar">
                                                    <button class="fileSubmit btn btn-success" type="submit" name="submit">Save</button>
                                                </form>
                                                </div>
                                                <div class="valueBox">
                                                    <p><strong>Points</strong></p>
                                                    <input class="balanceBox" type="text" value="0" disabled>
                                                </div>
                                                <div class="valueBox">
                                                    <p><strong>Trade link</strong></p>
                                                    <form action="INCLUDES/link-inc.php" method="POST">
                                                    <input class="tradeLinkBox" type="text" name="tradelink" maxlength="100" placeholder="'.$_SESSION['u_trade'].'">
                                                    <button type="submit" name="submit" class="saveTradeLinkBtn btn btn-success">Save</button>
                                                    </form>
                                                </div>';
                                        }
                                }
                            }
                            else {
                                header("Location: ../index.php?user=null");
                            }
                        }
                    }
                    else {
                        header("Location: ..index.php?user=notlogged");
                    }
                ?>
            </div>
        </div>
    <div class="chatContainer">
        <div class="chatBox">
                <?php include 'INCLUDES/chatInsert-inc.php' ?>
        </div>
            <div id="chatForm">
                <form action="INCLUDES/chat-inc.php" method="POST">
                    <input class="chatText" type="text" name="message" placeholder="Message..." maxlength="156" style="color: black;">
                    <button class="chatEnter" type="submit" name="submit">Enter</button>
                </form>
            </div>
        </div>
        <footer class="text-center">
            <nav class="navbar navbar-default navbar-fixed-bottom">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                             <span class="icon-bar"></span>
                             <span class="icon-bar"></span>
                             <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><a href="index.php">Home</a></li>
                            <li><a href="clicker.php">Clicker</a></li>
                            <li><a href="coinflip.php">Coinflip</a></li>
                            <li><a href="#">...</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </div>
                </div>

            </nav>

            <!-- <a href="#about">
                <span class="glyphicon glyphicon-chevron-up"></span>
            </a>
            <h5>© 2017 Udemy.com</h5> -->
        </footer>

    </body>
</html>
