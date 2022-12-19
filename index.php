<?php
if (!isset($_SESSION)) {
    session_start();
}
require_once("php_librarys/bd.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anticlimáticos</title>
    <link rel="stylesheet" href="./bootstrap-5.2.2-dist/css/bootstrap.min.css">
    <script src="./bootstrap-5.2.2-dist/js/bootstrap.bundle.js"></script>
    <link rel="stylesheet" href="./style/estil.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./style/colors.css">
    <link rel="stylesheet" href="./style/login.css">
    <link rel="stylesheet" href="./style/animatedBackGround.css">
    <link rel='stylesheet' type='text/css' media='screen' href='./style/animatedIndex.css'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,900;1,500&display=swap" rel="stylesheet">
    <script src="./js/animatedBackGround.js"></script>
    <link rel="stylesheet" href="./style/stylejocs.css">
    <link rel="stylesheet" href="style/tarjetas.css">
    <link rel="stylesheet" href="style/menu.css">
    <script src="js/cookies.js"></script>
</head>

<body class="bg-custom">
    <?php
    if (count($_COOKIE) > 0) {
        $games = ['Astral_Runner', 'Garbage_Rush', 'Oil_Platform_Pipe_Game', 'Fire_Canoneer'];
        foreach ($_COOKIE as $game => $cval) {
            $found = false;
            $i = 0;
            while ($i < count($games) && $found == false) {
                if ($game == $games[$i]) {
                    $found = true;
                } else {
                    $i++;
                }
            }
            if ($found == true) {
                $values = explode("_", $cval);
                if (isset($_SESSION['loggeduser'])) {
                    saveScore($_SESSION['loggeduser']['id'], intval($values[1]), intval($values[0]));
                }
            }
        }
    }
    ?>
    <script>
        comprobarCookies();
    </script>
    <!-- NAVBAR -->
    <?php include_once('./UI/menu.php'); ?>

    <!-- LANDING -->
    <?php include_once('./UI/landing.php'); ?>

    <!-- VIDEO -->
    <?php //include_once('./UI/video.php'); ?>

    <!-- JUEGOS -->
    <?php include_once('./UI/jocs.php'); ?>

    <!-- SCORE BOARD -->
    <?php include_once('./UI/scoreBoard.php'); ?>


    <!-- LOGIN -->
    <?php if (isset($_SESSION['loggeduser']) == false) {
        include_once('./UI/login2.php');
    } ?>

    <!-- PROMOCIONAMOS -->
    <?php include_once('./UI/promocionamos.php'); ?>

    <!-- VALORES -->
    <?php include_once('./UI/valores.php'); ?>

    <!-- EQUIPO -->
    <?php include_once('./UI/equipo.php'); ?>

    <!-- FOOTER -->
    <?php include_once('./UI/footer.php'); ?>

    <a href="#" class="floating-button fs-1 btn border-0 bg-transparent text-info">
        <i class="bi bi-arrow-up-circle"></i>
    </a>
    <!-- CONTROL ERRORES -->
    <?php
    if (isset($_SESSION['incorrectRegister'])) { ?>
        <script>
            nav_btn_register();
        </script>
    <?php
        unset($_SESSION['incorrectRegister']);
    } else if (isset($_SESSION['incorrectLogin'])) { ?>
        <script>
            nav_btn_login();
        </script>
    <?php
        unset($_SESSION['incorrectLogin']);
    }
    ?>

</body>

</html>