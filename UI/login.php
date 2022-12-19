<style>
    #loginlink,
    #recuperation {
        text-decoration: underline;
    }
</style>

<div class="container">
    <h3>INICIAR SESIÓN</h3>
    <div class="card mt-2 col-6 col-sm-7 mx-auto">
        <div id="header" class="card-header">
            Registro de usuario
        </div>
        <div class="card-body">
            <form action="" method="POST">
                <div id="registerform">
                    <div class="row mb-3">
                        <p class="h5">Registrate</p>
                        <p class="text-secondary">Registrarse tiene muchas ventajas bla, bla, bla, ...</p>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="useremail">Correo Electronico</label>
                        <input class="form-control" type="text" id="useremail" name="useremail" placeholder="ejemplo@gmail.com">
                    </div>
                </div>
                <div id="loginform" style="display: none;">
                    <div class="row mb-3">
                        <p class="h5">Datos de usuario</p>
                    </div>
                    <div class="mb-3">
                        <div class="form-floating mt-1">
                            <input class="form-control" type="email" id="useremail" name="useremail" placeholder="ejemplo@gmail.com">
                            <label for="useremail">Correo electronico</label>
                        </div>
                        <div class="form-floating mt-1">
                            <input class="form-control" type="password" id="userpassword" name="userpassword" placeholder="">
                            <label for="useremail">Contraseña</label>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <button id="btnRegister" type="submit" class="btn btn-outline-secondary">
                        Registrarse</button>
                    <button id="btnLogin" type="submit" class="btn btn-outline-secondary" style="display: none;">
                        Iniciar Sesión
                    </button>
                </div>
                <div>
                    <p id="loginlink" class="link-secondary" style="cursor: pointer;">
                        ¿Ya tienes cuenta? Inicia sesión aqui</a>
                    <p id="recuperation" class="link-secondary" style="cursor: pointer; display: none;">¿Has olvidado la contraseña? Pulse aqui para recivir una nueva</p>
                </div>
            </form>
        </div>
    </div>
</div>

<script src="/landingPage/js/login.js"></script>