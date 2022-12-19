<?php
include "../php_librarys/bd.php";
if (!isset($_SESSION)) {
    session_start();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear usuario</title>
    <link rel="stylesheet" href="../bootstrap-5.2.2-dist/css/bootstrap.min.css">
    <script src="../bootstrap-5.2.2-dist/js/bootstrap.bundle.js"></script>
    <!-- <link rel="stylesheet" href="../style/estil.css"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,900;1,500&display=swap" rel="stylesheet">
</head>

<body>
    <div class="container">
        <div class="container-card mt-5">
            <div class="card formulari-card">
                <div class="card-header d-flex bg-dark">
                    <img class="card-img-left" src="/landingPage/media/logo.png" style="width:50px; height:auto" alt="">
                    <p class="card-text" style="color:white; font-weight:bold">Crear Usuario</p>
                </div>
                <div class="card-body">
                    <form action="../php_controller/controller.php" method="post" name="formulariAfegir">
                        <!--NOMBRE-->
                        <div class="row mb-2">
                            <label for="nombre" name="lblnombre" class="col-sm-2 col-form-label">Nombre</label>
                            <div class="col-sm-10">
                                <input type="text" id="nombre" name="nombre" class="form-control form-control-inline" placeholder="Nombre" autofocus required>
                            </div>
                        </div>
                        <!--NOMBRE-->
                        <div class="row mb-2">
                            <label for="email" name="lblemail" class="col-sm-2 col-form-label">Correo</label>
                            <div class="col-sm-10">
                                <input type="text" id="email" name="email" class="form-control form-control-inline" placeholder="usuario@gmail.com" required>
                            </div>
                        </div>
                        <!--Contraseña-->
                        <div class="row mb-2">
                            <label for="passwd" name="lblpasswd" class="col-sm-2 col-form-label">Contraseña</label>
                            <div class=" col-sm-10">
                                <input type="text" id="passwd" name="passwd" class="form-control form-control-inline" placeholder="Contraseña" required>
                            </div>
                        </div>
                        <!--Tipo usuario-->
                        <div class="row mb-2">
                            <label for="tipoUsuario" name="lbltipoUsuario" class="col-sm-2 col-form-label">Tipo</label>
                            <div class="col-sm-10">
                                <select id="tipoUsuario" class="form-select" name="tipoUsuario">
                                    <?php
                                    $usuario = $_SESSION["loggeduser"];
                                    if ($usuario['idTipo'] == 1) { ?>
                                        <option value=3>Usuario</option>
                                        <option value=2>Administrador</option>
                                    <?php } else { ?>
                                        <option value=3>Usuario</option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <!--BOTONES-->
                        <div>
                            <button type="submit" class="btn btn-success" name="admin_createuser">Crear</button>
                            <a href="./admins.php" class="btn btn-danger">Cancelar</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>