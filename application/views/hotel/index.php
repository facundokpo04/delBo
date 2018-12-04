<?php // var_dump($model);          ?>
<ol class="breadcrumb">
    <li class="active">Hoteles</li>
</ol>
<div class="panel panel-default">
    <div class="panel-heading">
        Herramientas
    </div>
    <!-- /.panel-heading -->
    <div class="panel-body">
        <div class="btn-group"> 
            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalEditHotel" >Agregar</button>
        </div>

    </div>
</div>
<br/>
<div class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Hoteles</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
                <table  id="tblhotel" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>

                </table>

            </div>
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

<div class="example-modal modal fade" id="modalEditHotel" tabindex="-1" >
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" id="mCerrarModal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Agregar/ Modificar Hotel</h4>
                </div>
                <div class="modal-body">
                    <div role="tabpanel">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#datostab" aria-controls="uploadTab" role="tab" data-toggle="tab">Datos</a>

                            </li>

                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="datostab">
                                <form class="form-horizontal">
                                    <!-- parametros ocultos -->
                                    <input type="hidden" id="mIdHotel">                                  
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Nombre Hotel</label>
                                            <div class="col-sm-9"> 
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="fa fa-th-list fa-fw"></i> </span>
                                                    <input type="text" name="mNombre" id="mNombre" class="form-control"  placeholder="" required>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="form-group">
                                            <label class="col-sm-3 control-label">Direccion Hotel</label>
                                            <div class="col-sm-9"> 
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="fa fa-map-marker fa-fw"></i> </span>
                                                    <input type="text" name="mDireccion" id="mDireccion" class="form-control"  placeholder="" required>
                                                </div>
                                            </div>
                                        </div> 
                                          <div class="form-group">
                                            <label class="col-sm-3 control-label">Telefono Hotel</label>
                                            <div class="col-sm-9"> 
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="fa fa-phone-square fa-fw"></i> </span>
                                                    <input type="number" name="mTelefono" id="mTelefono" class="form-control"  placeholder="" required>
                                                </div>
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
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" id="mbtnCerrarModal" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-info" id="mbtnUpdHotel">Actualizar</button>
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
