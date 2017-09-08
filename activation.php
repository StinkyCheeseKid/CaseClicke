<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            <link rel="stylesheet" href="CSS/styleHome.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <title>CS:GO Farm</title>
    </head>
    <body>
        <div style="margin-left: 35%; margin-top: 20%;">
            <h2>You received a confirmation code sent by email.</h2>
                <form action="INCLUDES/validation-inc.php" method="POST">
                    <input type="text" name="username" placeholder="Your username" style="border: 1px solid black; border-radius: 5px; color: black;">
                    <input type="text" name="cle" placeholder="Your confirmation code" style="border: 1px solid black; border-radius: 5px; color: black;">
                    <button class="btn btn-default" type=submit name=submit>Activate my account</button>
                </form>
        </div>
    </body>
</html>
