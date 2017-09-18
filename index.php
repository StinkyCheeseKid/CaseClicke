<?php
    session_start();
    include_once 'INCLUDES/dbh-inc.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
            <title>CS:GO Farm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            <link rel="stylesheet" href="CSS/styleHome.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="JS/main.js"></script>
    </head>
    <body>

        <div class="container-fluid noSelect noCursor iCenter">
            <div class="row">

                <div id="clickerSpotInfo" class="col-md-6 col-lg-3">

                    <h1><a href="clicker.php" style="text-decoration: none; color: white;">Clicker</a></h1>
                    <div class="clickerSpotContent col-md-12 col-lg-12">
                        <a href="clicker.php"><img class="clickerImg" src="CSS/IMGS/csgoClickerMiniature.png" alt="Screenshot of the clicker game"/></a>
                        <div class="clickerSpotText">
                            <h3><strong>Win skins just by clicking</strong></h3>
                            <p style="color: #aaa;"><strong><em>How does this work ?</em></strong></p>
                            <p>Gain Exp by unlocking achievements</p>
                            <p>Levelup with that Exp gained</p>
                            <p>Everytime you levelup you get some points,</p>
                            <p>these points will allow you to buy skins.</p>
                        </div>
                    </div>

                </div>
                <div id="caseSpotInfo" class="col-md-6 col-lg-3">

                    <h1>Case Opening</h1>
                    <div class="caseSpotContent col-md-12 col-lg-12">
                        <img class="caseImg" src="CSS/IMGS/comingSoon.jpg" alt="caseImg">
                            <h3><strong>Coming Soon ...</strong></h3>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                    </div>

                </div>
                <div id="coinflipSpotInfo" class="col-md-6 col-lg-3">

                    <h1>Coin Flip</h1>
                    <div class="coinflipSpotContent col-md-12 col-lg-12">
                        <img class="coinflipImg" src="CSS/IMGS/comingSoon.jpg" alt="conflipImg">
                            <h3><strong>Coming Soon ...</strong></h3>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                    </div>
                </div>
                <div id="userSpot" class="col-md-6 col-lg-3">

                    <div class="userSpotContent col-md-12 col-lg-12">
                    <div class="iCenter">
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
                                                                <input class="balanceBox" type="text" value="0" disabled>
                                                            </div>
                                                            <div class="valueBox">
                                                                <p><strong>Trade link</strong></p>
                                                                <form action="INCLUDES/link-inc.php" method="POST">
                                                                <input class="tradeLinkBox" type="text" name="tradelink" maxlength="100" placeholder="'.$_SESSION['u_trade'].'">
                                                                <button type="submit" name="submit" class="saveTradeLinkBtn btn btn-success">Save</button>
                                                                </form>
                                                            </div>
                                                            <form action="INCLUDES/logout-inc.php" method="POST">
                                                                    <button class="logoutBtn" type="submit" name="submit">Logout</button>
                                                            </form>';
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
                                                            </div>
                                                            <form action="INCLUDES/logout-inc.php" method="POST">
                                                                    <button class="logoutBtn" type="submit" name="submit">Logout</button>
                                                            </form>';
                                                    }
                                            }
                                        }
                                        else {
                                            header("Location: ../index.php?user=null");
                                        }
                                    }
                                }
                                else {
                                        echo '<img class="logoImg" src="CSS/IMGS/logo3.png" alt="logoCsgoFarm"/>
                                        <h1 class="titleSite" style="font-size: 54px;">CS:GO Farm</h1>
                                        <a href="login.php"><button class="loginBtn" type="button">Login</button></a>
                                        <a href="register.php"><button class="registerBtn" type="button">Register</button></a>';
                                }
                            ?>
                            <!-- <div class="adSpotContainer">
                                <div class="adBox">
                                    <p style="margin-top: 10px; color: #ccc; font-size: 14px">Sponsored links<p>
                                </div>
                                        <div class="adSpot">
                                            <p>Ads Box<p>
                                        </div>
                            </div>-->
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
                            <li><a href="#">...</a></li>
                            <li><a href="#">...</a></li>
                            <li><a href="#">...</a></li>
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
