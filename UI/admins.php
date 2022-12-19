<?php
if (!isset($_SESSION)) {
  session_start();
} ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modificar usuario</title>
  <link rel="stylesheet" href="../bootstrap-5.2.2-dist/css/bootstrap.min.css">
  <script src="../bootstrap-5.2.2-dist/js/bootstrap.bundle.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,900;1,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../style/colors.css">
  <link rel="stylesheet" href="../style/estilsadmin.css">
</head>

<body>
  <?php include_once('../UI/menuAdmin.php'); ?>

  <div class="container">
    <?php include_once('../php_librarys/alert_check.php'); ?>
    <div class="pt-4">
      <a href="./create_user.php">
        <button class="btn btn-success" type="">
          Añadir usuario
        </button>
      </a>
    </div>

    <table class="table table-striped mt-3">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <?php
        include('../php_librarys/bd.php');
        $usuario = $_SESSION["loggeduser"];
        if ($usuario['idTipo'] == 1) {
          $usuarios = selectAdmins($usuario['id']);
        } else if ($usuario['idTipo'] == 2) {
          $usuarios = selectUsers($usuario['id']);
        }
        foreach ($usuarios as $usuario) {
        ?>
          <tr>
            <td><?php echo $usuario['id']; ?></td>
            <td><?php echo $usuario['nombre']; ?></td>
            <td><?php echo $usuario['correo']; ?></td>
            <td><?php echo $usuario['contrasenia']; ?></td>
            <td>
              <div class="d-flex">
                <form action="./edit_user.php" class="me-3" method="POST">
                  <input type="text" name="id" value="<?php echo $usuario['id']; ?>" hidden>
                  <button type="submit" class="btn btn-success"><i class="bi bi-pencil-square"></i></button>
                </form>
                <a href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#eliminaModal" data-bs-id="<?= $usuario['id']; ?>"><i class="bi bi-trash"></i></a>
              </div>
            </td>
          </tr>
        <?php
          include("./modalDelete.php");
        }
        ?>
        <script src="../js/modal.js"></script>
      </tbody>
    </table>
  </div>
</body>

</html>