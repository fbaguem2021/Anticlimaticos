<link rel="stylesheet" href="style/tabla.css">
<h2>PUNTUACIONES</h2>
<div class="mt-4" id="scoreboard">
    <ul class="container bgTaula nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-astralRunner-tab" data-bs-toggle="pill" data-bs-target="#pills-astralRunner" type="button" role="tab" aria-controls="pills-astralRunner" aria-selected="true">Astral Runner</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link " id="pills-garbageRush-tab" data-bs-toggle="pill" data-bs-target="#pills-garbageRush" type="button" role="tab" aria-controls="pills-garbageRush" aria-selected="false">Garbage Rush</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link " id="pills-oilPlatform-tab" data-bs-toggle="pill" data-bs-target="#pills-oilPlatform" type="button" role="tab" aria-controls="pills-oilPlatform" aria-selected="false">Oil Platform</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link " id="pills-fireCanoneer-tab" data-bs-toggle="pill" data-bs-target="#pills-fireCanoneer" type="button" role="tab" aria-controls="pills-fireCanoneer" aria-selected="false">Fire Canoneer</button>
        </li>
    </ul>
    <div class="tab-content container bgTaula mb-4 overflow-auto" id="pills-tabContent">
        <div class="tab-pane fade show active  mb-4  scroll-table" id="pills-astralRunner" role="tabpanel" aria-labelledby="pills-astralRunner-tab">
            <table id="tablescores" class="styled-table table-striped table  mt-3">
                <thead class="sticky-top bg-white">
                    <tr>
                        <th>Posición</th>
                        <th>Nombre</th>
                        <th>Puntos</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <?php
                $puntuaciones = SelectPuntuaciones(1);
                foreach ($puntuaciones as $puntuacion) { ?>
                    <tr>
                        <td><?php echo  $puntuacion['posicion']; ?></td>
                        <td><?php echo  $puntuacion['usuario']; ?></td>
                        <td><?php echo $puntuacion['puntuacion']; ?></td>
                        <td><?php echo $puntuacion['fecha']; ?></td>
                    </tr>
                <?php } ?>
            </table>
        </div>
        <div class="tab-pane fade scroll-table" id="pills-garbageRush" role="tabpanel" aria-labelledby="pills-garbageRush-tab">
            <table class="styled-table table table-striped">
                <thead class="sticky-top bg-white">
                    <tr>
                        <th>Posición</th>
                        <th>Nombre</th>
                        <th>Puntos</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <?php
                $puntuaciones = SelectPuntuaciones(2);
                foreach ($puntuaciones as $puntuacion) { ?>
                    <tr>
                        <td><?php echo  $puntuacion['posicion']; ?></td>
                        <td><?php echo  $puntuacion['usuario']; ?></td>
                        <td><?php echo $puntuacion['puntuacion']; ?></td>
                        <td><?php echo $puntuacion['fecha']; ?></td>
                    </tr>
                <?php } ?>
            </table>
        </div>
        <div class="tab-pane fade scroll-table" id="pills-oilPlatform" role="tabpanel" aria-labelledby="pills-oilPlatform-tab">
            <table class="styled-table table table-striped mt-3">
                <thead class="sticky-top bg-white">
                    <tr>
                        <th>Posición</th>
                        <th>Nombre</th>
                        <th>Puntos</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <?php
                $puntuaciones = SelectPuntuaciones(3);
                foreach ($puntuaciones as $puntuacion) { ?>
                    <tr>
                        <td><?php echo  $puntuacion['posicion']; ?></td>
                        <td><?php echo  $puntuacion['usuario']; ?></td>
                        <td><?php echo $puntuacion['puntuacion']; ?></td>
                        <td><?php echo $puntuacion['fecha']; ?></td>
                    </tr>
                <?php } ?>
            </table>
        </div>
        <div class="tab-pane fade scroll-table" id="pills-fireCanoneer" role="tabpanel" aria-labelledby="pills-fireCanoneer-tab">
            <table class="styled-table table table-striped mt-3">
                <thead class="sticky-top bg-white">
                    <tr>
                        <th>Posición</th>
                        <th>Nombre</th>
                        <th>Puntos</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <?php
                $puntuaciones = SelectPuntuaciones(4);
                foreach ($puntuaciones as $puntuacion) { ?>
                    <tr>
                        <td><?php echo  $puntuacion['posicion']; ?></td>
                        <td><?php echo  $puntuacion['usuario']; ?></td>
                        <td><?php echo $puntuacion['puntuacion']; ?></td>
                        <td><?php echo $puntuacion['fecha']; ?></td>
                    </tr>
                <?php } ?>
            </table>
        </div>
    </div>
</div>