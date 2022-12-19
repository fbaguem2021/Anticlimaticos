<div class="login" id="registro">
    <main>
        <div class="contenedor__todo">
        <?php include_once('./php_librarys/alert_check.php'); ?>
            <div class="caja__trasera">
                <div class="caja__trasera-login">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para guardar tus puntuaciones!</p>
                    <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                </div>
                <div class="caja__trasera-register">
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Regístrate para iniciar sesión y guardar tus puntuaciones!</p>
                    <button id="btn__registrarse">Regístrarse</button>
                </div>
            </div>

            <!--Formulario de Login y registro-->
            <div class="contenedor__login-register">
                <!--Login-->
                <form  action="/landingPage/php_controller/controller.php" method="GET"class="formulario__login">
                    <h2>Iniciar Sesión</h2>
                    <input type="text" placeholder="Correo Electronico" name="useremail" required>
                    <input type="password" placeholder="Contraseña" name="pssw" required>
                    <button type="submit" name="login">Entrar</button>
                </form>

                <!--Register-->
                <form  action="/landingPage/php_controller/controller.php" method="POST" class="formulario__register">
                    <h2>Regístrarse</h2>
                    <input type="text" placeholder="Nombre" name="username" required>
                    <input type="text" placeholder="Correo Electronico" name="useremail" required>
                    <input type="password" placeholder="Contraseña" name="pssw" required>
                    <input type="password" placeholder="Repetir contraseña" name="psswrepe" required>
                    <button type="submit" name="registration">Regístrarse</button>
                </form>
            </div>
        </div>

    </main>
</div>
<script src="/landingPage/js/login2.js"></script>