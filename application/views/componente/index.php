
<?php // var_dump($model);        ?>
<ol class="breadcrumb">
    <li class="active">Componente</li>
</ol>
<div class="panel panel-default">
    <div class="panel-heading">
        Herramientas
    </div>
    <!-- /.panel-heading -->
    <div class="panel-body">
        <div class="btn-group"> 
            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalEditComponente" >Agregar</button>
        </div>
        <div class="btn-group"> 
            <button class="btn btn-danger" type="button" onClick="">Eliminar</button>
        </div>

    </div>
</div>
<br/>
<div class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Componentes</h3>
            </div>
            <!-- /.box-header -->
            <table class="table table-bordered table-striped" id="tblComponentes">
                <!-- Cabecera de la tabla -->
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Estado</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>

                <!-- Cuerpo de la tabla con los campos -->
                <tbody>
                  

                </tbody>
            </table>
            <!-- /.box-body -->
        </div>
        <!-- /.box -->
    </div>
</div>

<!-- Modal Editar Categoria -->

<style>
    .example-modal .modal {
        position: relative;
        top: auto;
        bottom: auto;
        right: auto;
        left: auto;
        display: block;
        z-index: 1;
    }

    .example-modal .modal {
        background: transparent !important;
    }
</style>

<div class="example-modal modal fade" id="modalEditComponente" tabindex="-1" >
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" id="mCerrarModal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Agregar/ Eliminar Categor&iacute;a</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <!-- parametros ocultos -->
                        <input type="hidden" id="mIdComponente">

                        <div class="box-body">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Nombre Componente</label>
                                <div class="col-sm-9"> 
                                    <input type="text" name="mNombre" id="mNombre" class="form-control" id="mtxtNombre" placeholder="">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">Descripci&oacute;n</label>
                                <div class="col-sm-9"> 
                                    <input type="text" name="mDescripcion" id="mDescripcion" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Precio</label>
                                <div class="col-sm-9"> 
                                    <input type="text" name="mPrecio" id="mPrecio" class="form-control" placeholder="">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">Estado</label>
                                <div class="col-sm-9"> 
                                    <select name="mEstado" id="mEstado" class="form-control">                       
                                        <option value="1">Habilitado</option>
                                        <option value="2">Deshabilitado</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">

                                <label class="col-sm-3 control-label">Imagen</label>
                                <div class="col-sm-9">
                                    <input   type="file"  id="mImagen">
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" id="mbtnCerrarModal" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-info" id="mbtnUpdComponente">Actualizar</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</div>

<script type="text/javascript">
    var baseurl = "<?php echo base_url(); ?>";
</script>