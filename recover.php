<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
            <title>CS:GO Farm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            <link rel="stylesheet" href="CSS/styleRecover.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="JS/scriptRecover.js"></script>
    </head>
<body>
    <div id="recoverBox">
        <div class="iCenter">
            <h4 class="titre">Change username or password !</h4>
            <form action="INCLUDES/recover-inc.php" method="POST">
            <input class="username" type="text" name="username"  placeholder="Username"><br>
            <input class="pass" type="password" name="pass"  placeholder="Password"><br>
            <input class="passConfirm" type="password" name="passConfirm"  placeholder="Password Confirm"><br>
                <button class="submitBtn btn btn-info" type="submit" name="submit">Valid</button>
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

        </footer>
</body>
</html>
