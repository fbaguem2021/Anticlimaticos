<?php
function Connect()
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $myDB = "anticlimaticos";

    try {
        $db = new PDO("mysql:host=$servername;dbname=$myDB", $username, $password);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        $_SESSION['incorrect'] = "Connection failed: " . $e->getMessage();
    }
    return $db;
}

function Disconnect()
{
    return null;
}

function selectUser($mail, $password)
{
    try {
        $db = Connect();
        $query = "SELECT * from USUARIOS WHERE correo='$mail' AND contrasenia='$password';";
        $sentence = $db->prepare($query);
        $sentence->execute();
        $result = $sentence->fetchAll()[0];
    } catch (PDOException $e) {
        $_SESSION['incorrect'] =  errorMessage($e);
    }
    $db = Disconnect();
    return $result;
}

function selectUsers($id)
{
    $db = Connect();
    $query = "SELECT * from USUARIOS WHERE  id!=$id AND idTipo=3;";
    $sentence = $db->prepare($query);
    $sentence->execute();
    $result = $sentence->fetchAll();
    $db = Disconnect();
    return $result;
}
function selectAdmins($id)
{
    $db = Connect();
    $query = "SELECT * from USUARIOS WHERE id!=$id AND (idTipo=3 OR idTipo=2);";
    $sentence = $db->prepare($query);
    $sentence->execute();
    $result = $sentence->fetchAll();
    $db = Disconnect();
    return $result;
}

function selectUserById($id)
{
    $db = Connect();
    $query = "SELECT * from USUARIOS WHERE id=$id";
    $sentence = $db->prepare($query);
    $sentence->execute();
    $result = $sentence->fetchAll()[0];
    $db = Disconnect();
    return $result;
}

function selectAdmin()
{
    $db = Connect();
    $query = "SELECT * from USUARIOS WHERE idTipo=2 OR idTipo=1";
    $sentence = $db->prepare($query);
    $sentence->execute();
    $result = $sentence->fetchAll()[0];
    $db = Disconnect();
    return $result;
}

function SelectPuntuaciones($id_game)
{
    $db = Connect();
    $query = " SELECT Sesiones.idSesion, USUARIOS.nombre as usuario, puntuacion, fecha, JUEGOS.nombre as juego, RANK() OVER(ORDER BY puntuacion DESC)posicion from Sesiones JOIN USUARIOS on USUARIOS.id = Sesiones.idUsuario JOIN JUEGOS on JUEGOS.id = Sesiones.idJuego WHERE idJuego = $id_game ;";
    $sentence = $db->prepare($query);
    $sentence->execute();
    $result = $sentence->fetchAll();
    $db = Disconnect();
    return $result;
}

function NouRegistre($nombre, $correo, $contrasenia)
{
    try {
        $db = Connect();
        $query = "INSERT INTO USUARIOS (nombre, correo, contrasenia, idTipo) VALUES ('$nombre', '$correo', '$contrasenia', 3)";
        $sentence = $db->prepare($query);
        $sentence->execute();
        return $db->lastInsertId();
    } catch (PDOException $e) {
        $_SESSION['incorrectRegister'] =  errorMessage($e);
        return null;
    }
    $db = Disconnect();
}
function NouRegistreAdministracio($nombre, $correo, $contrasenia, $tipo)
{
    try {
        $db = Connect();
        $query = "INSERT INTO USUARIOS (nombre, correo, contrasenia, idTipo) VALUES ('$nombre', '$correo', '$contrasenia', $tipo)";
        $sentence = $db->prepare($query);
        $sentence->execute();
        $_SESSION['correct'] = "Registro insertado correctamente";
        return $db->lastInsertId();
    } catch (PDOException $e) {
        $_SESSION['incorrect'] =  errorMessage($e);
        return null;
    }
    $db = Disconnect();
}

function EsborrarUsuari($id_user)
{
    try {
        $db = Connect();
        $query = "DELETE FROM usuarios WHERE id = $id_user";
        $db->exec($query);
        $_SESSION['correct'] = 'Registro borrado correctamente';
    } catch (PDOException $e) {
        $_SESSION['incorrect'] =  errorMessage($e);
    }
    $db = Disconnect();
}

function checkScore($id_user, $id_game)
{
    try {
        $conn = Connect();
        $query = "SELECT count(*)=1 FROM anticlimaticos.sesiones WHERE idUsuario=$id_user AND idJuego=$id_game;";
        $sentence = $conn->prepare($query);
        $sentence->execute();
        $result = $sentence->fetchAll()[0];
        $result = boolval($result[0]);
    } catch (PDOException $e) {
        $result = -1;
        $_SESSION['incorrect'] =  errorMessage($e);
    }
    $db = Disconnect();
    return $result;
}
function saveScore($id_user, $id_game, $score)
{
    try {
        if (checkScore($id_user, $id_game)) {
            ModificarPuntuacion($id_user, $id_game, $score);
        } else {
            insertPuntuacion($id_user, $id_game, $score);
        }
    } catch (PDOException $e) {
        $_SESSION['incorrect'] =  errorMessage($e);
    }
}
function ModificarPuntuacion($id_user, $id_game, $puntuacion)
{
    try {
        $db = Connect();
        $query = "UPDATE Sesiones set puntuacion ='$puntuacion', fecha=now() where idUsuario = $id_user AND idJuego = $id_game AND puntuacion<$puntuacion;";
        $stmt = $db->prepare($query);
        $stmt->execute();
        // $_SESSION['correctScore'] = 'Puntuación actualizada correctamente.';
    } catch (PDOException $e) {
        $_SESSION['incorrectScore'] =  errorMessage($e);
    }
    $db = Disconnect();
}
function insertPuntuacion($id_user, $id_game, $score)
{
    try {
        $db = Connect();
        $db->exec("INSERT INTO sesiones (idUsuario, idJuego, puntuacion, fecha) VALUES ($id_user, $id_game, $score, now())");
        // $_SESSION['correct'] = 'Puntuación insertada correctamente';
    } catch (PDOException $e) {
        $_SESSION['incorrect'] =  errorMessage($e);
    }
    $db = Disconnect();
}

function ModificarUsuarios($id, $nombre, $correo, $password, $tipo)
{
    try {
        $db = Connect();
        $query = "UPDATE usuarios set nombre ='$nombre', correo='$correo', contrasenia='$password', idTipo='$tipo' where id = $id ";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $_SESSION['correct'] = 'Usuario actualizado correctamente.';
    } catch (PDOException $e) {
        $_SESSION['incorrect'] =  errorMessage($e);
    }
    $db = Disconnect();
}

function errorMessage($e)
{
    if (!empty($e->errorInfo[0])) {
        switch ($e->errorInfo[1]) {
            case 1062:
                $mensaje = 'Usuario ya registrado.';
                break;
            case 1451:
                $mensaje = 'Registro con elementos relacionados.';
                break;
            default:
                $mensaje = $e->errorInfo[1] . ' - ' . $e->errorInfo[2];
                break;
        }
    } else {
        switch ($e->getCode()) {
            case 1044:
                $mensaje = 'Usuario y/o password incorrecto.';
                break;
            case 1049:
                $mensaje = 'Base de datos desconocida.';
                break;
            case 2002:
                $mensaje = 'No se encuentra el servidor.';
                break;
            default:
                $mensaje = $e->getCode() . ' - ' . $e->getMessage();
                break;
        }
    }
    return $mensaje;
}
