<?php
if (!isset($_SESSION)) {
    session_start();
}
include('../php_librarys/bd.php');
if (isset($_POST['registration'])) {
    if ($_POST['pssw'] != $_POST['psswrepe']) {
        $_SESSION['incorrectRegister'] = "La contraseñas deben coincidir.";
        header('Location: ../index.php');
        exit();
    } else {
        $id = NouRegistre($_POST['username'], $_POST['useremail'], $_POST['pssw']);
        if ($id != null) {
            $_SESSION['loggeduser'] = selectUserById($id);
        }
        header('Location: ../index.php');
        exit();
    }
} else if (isset($_GET['login'])) {
    $_SESSION['loggeduser'] = selectUser($_GET['useremail'], $_GET['pssw']);
    if (!isset($_SESSION['loggeduser'])) {
        $_SESSION['incorrectLogin'] = "Correo o contraseña incorrecta.";
        header('Location: ../index.php');
        exit();
    } else if ($_SESSION['loggeduser']['idTipo'] == 1 || $_SESSION['loggeduser']['idTipo'] == 2) {
        $_SESSION['loggedadmin'] = $_SESSION["loggeduser"];
        header('Location: ../UI/admins.php');
        exit();
    } else {
        header('Location: ../index.php');
        exit();
    }
} else if (isset($_GET['logout'])) {
    unset($_SESSION['loggeduser']);
    if (isset($_SESSION['loggedadmin'])) {
        unset($_SESSION['loggedadmin']);
    }
    header('Location: ../index.php');
    exit();
} else if (isset($_POST['admin_createuser'])) {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contrasenia = $_POST['passwd'];
    $tipo = $_POST['tipoUsuario'];
    NouRegistreAdministracio($nombre, $email, $contrasenia, $tipo);
    header('Location: ../UI/admins.php');
    exit();
} else if (isset($_POST['borrarusuario'])) {
    $id = $_POST['id'];
    EsborrarUsuari($id);
    header('Location: ../UI/admins.php');
    exit();
} else if (isset($_GET['submit'])) {
    $nombre = $_GET['nombre'];
    $email = $_GET['email'];
    $contrasenia = $_GET['passwd'];
    NouRegistre($nombre, $email, $contrasenia);
    header('Location: ../UI/admins.php');
    exit();
} else if (isset($_POST['edituser'])) {
    $id = $_POST['edituser'];
    $nombre = $_POST['nombre'];
    $correo = $_POST['email'];
    $contrasenia = $_POST['passwd'];
    $tipo = $_POST['tipoUsuario'];
    ModificarUsuarios($id, $nombre, $correo, $contrasenia, $tipo);
    header('Location: ../UI/admins.php');
    exit();
}
