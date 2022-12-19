<div class="modal fade" id="eliminaModal" tabindex="-1" role="dialog" aria-labelledby="lblEliminarModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Confirmación
                </h4>
            </div>

            <div class="modal-body">
                <strong style="text-align: center !important">
                    <?php echo "¿Realmente deseas eliminar a este usuario?" ?>
                </strong>
            </div>
            <!-- <div class="modal-body">
                <strong style="text-align: center !important">
                <?php //echo $usuario['nombre']; 
                ?>
                </strong>
            </div> -->

            <div class="modal-footer">
                <form action="../php_controller/controller.php" method="POST">
                    <input type="text" hidden name="id" id="id">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
                    <button type="submit" name="borrarusuario" class="btn btn-danger">Eliminar</button>
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>