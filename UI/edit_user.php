<?php
include "../php_librarys/bd.php";
if (!isset($_SESSION)) {
    session_start();
}
$edituser = selectUserById($_POST['id']);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modificar usuario</title>
    <link rel="stylesheet" href="../bootstrap-5.2.2-dist/css/bootstrap.min.css">
    <script src="./bootstrap-5.2.2-dist/js/bootstrap.bundle.js"></script>
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
                    <p class="card-text" style="color:white; font-weight:bold">Editar Usuario</p>
                </div>
                <div class="card-body">
                    <form action="../php_controller/controller.php" method="post">
                        <!--NOMBRE-->
                        <div class="row mb-2">
                            <label for="nombre" name="lblNombre" class="col-sm-2 col-form-label">Nombre</label>
                            <div class="col-sm-10">
                                <?php
                                echo '<input type="text" id="nombre" name="nombre" class="form-control form-control-inline" placeholder="' . $edituser['nombre'] . '"value="' . $edituser['nombre'] . '" autofocus required>'
                                ?>
                            </div>
                        </div>
                        <!--CORREO-->
                        <div class="row mb-2">
                            <label for="email" name="lblCorreo" class="col-sm-2 col-form-label">Correo</label>
                            <div class="col-sm-10">
                                <?php
                                echo '<input type="text" id="email" name="email" class="form-control form-control-inline" placeholder="' . $edituser['correo'] . '"value="' . $edituser['correo'] . '" required>'
                                ?>
                            </div>
                        </div>
                        <!--CONTRASEÑA-->
                        <div class="row mb-2">
                            <label for="passwd" name="lblPasswd" class="col-sm-2 col-form-label">Contraseña</label>
                            <div class=" col-sm-10">
                                <?php
                                echo '<input type="text" id="passwd" name="passwd" class="form-control form-control-inline"  placeholder="' . $edituser['contrasenia'] . '"  value="' . $edituser['contrasenia'] . '">'
                                ?>
                            </div>
                        </div>
                        <!--TIPO USUARIO-->
                        <div class="row mb-2">
                            <label for="tipoUsuario" name="lbltipoUsuario" class="col-sm-2 col-form-label">Tipo</label>
                            <div class="col-sm-10">
                                <select id="tipoUsuario" class="form-select" name="tipoUsuario">
                                    <?php
                                    $usuario = $_SESSION["loggeduser"];
                                    if ($usuario["idTipo"] == 1) { ?>
                                        <option value=3 <?php 
                                                    if ($edituser['idTipo'] == 3) {
                                                            echo 'selected';
                                                        }
                                                        ?>>Usuario</option>
                                        <option value=2 <?php 
                                                        if ($edituser['idTipo'] == 2) {
                                                            echo 'selected';
                                                        }
                                                        ?>>Administrador</option>
                                    <?php } else { ?>
                                        <option value=3 <?php 
                                                        if ($edituser['idTipo'] == 3) {
                                                            echo 'selected';
                                                        }
                                                        ?>>Usuario</option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>

                        <!--BOTONES-->
                        <div>
                            <button type="submit" class="btn btn-success" name="edituser" value="<?php echo $_POST['id'] ?>">Modificar</button>
                            <a href="./admins.php" class="btn btn-danger">Cancelar</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>