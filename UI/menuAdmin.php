<nav class="navbar navbar-expand-lg sticky-top navbar-bg-custom">
    <div class="container navbar-collapse d-flex ">
        <a class="navbar-brand float-start" href="../index.php"><img src="/landingPage/media/logo.png" alt="Error"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a href="../index.php" class="nav-link" id="nav-juegos">Juegos</a>
                </li>
                <li class="nav-item">
                    <a href="../index.php#scoreboard" class="nav-link" id="nav-puntuaciones">Puntuaciones</a>
                </li>
                <li class="nav-item">
                    <a href="../index.php#promocion" class="nav-link" id="nav-promocion">¿Qué promocionamos?</a>
                </li>
                <li class="nav-item">
                    <a href="../index.php#equipo" class="nav-link" id="nav-equipo">Equipo</a>
                </li>

            </ul>
            <?php if (isset($_SESSION['loggedadmin'])) { ?>
                <div class="dropdown">
                    <button id="nav-user" class="btn BlueB dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <?php echo $_SESSION['loggedadmin']['nombre'] ?> <i class="bi bi-red bi-person-circle"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="../index.php" class="dropdown-item">Landing Page</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <form action="/landingPage/php_controller/controller.php" method="GET">
                                <button name="logout" class="dropdown-item">Cerrar sessión</button>
                            </form>
                        </li>
                    </ul>
                </div>
            <?php } else if (isset($_SESSION['loggeduser']) == false) { ?>
                <div class="dropdown">
                    <button id="nav-btn" class="btn BlueB dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Sesión <i class="bi bi-red bi-person-circle"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a id="nav-btn-login" class="dropdown-item">Iniciar sesión</a></li>
                        <li><a id="nav-btn-register" class="dropdown-item">Registrarse</a></li>
                    </ul>
                </div>
            <?php } else { ?>
                <div class="dropdown">
                    <button id="nav-user" class="btn BlueB dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <?php echo $_SESSION['loggeduser']['nombre'] ?> <i class="bi bi-red bi-person-circle"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a id="nav-user-score" class="dropdown-item">Ver puntuaciones</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <form action="/landingPage/php_controller/controller.php" method="GET">
                                <button name="logout" class="dropdown-item">Cerrar sessión</button>
                            </form>
                        </li>
                    </ul>
                </div>
            <?php } ?>
        </div>
    </div>
</nav>
<!-- <script src="/landingPage/js/navigation.js"></script> -->