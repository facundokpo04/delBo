
<?php // var_dump($model);         ?>
<ol class="breadcrumb">
    <li class="active">Categoria</li>
</ol>
<div class="panel panel-default">
    <div class="panel-heading">
        Herramientas
    </div>
    <!-- /.panel-heading -->
    <div class="panel-body">
        <div class="btn-group"> 
            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalEditCategoria" >Agregar</button>
        </div>
     
    </div>
</div>
<br/>
<div class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Categorias</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
                <table  id="tblCategorias" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Estado</th>
                            <th>Visible Menu</th>
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

<div class="example-modal modal fade" id="modalEditCategoria" tabindex="-1" >
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" id="mCerrarModal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Agregar/ Eliminar Categor&iacute;a</h4>
                </div>
                <div class="modal-body">
                    <div role="tabpanel">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#datostab" aria-controls="uploadTab" role="tab" data-toggle="tab">Datos</a>

                        </li>
                        <li role="presentation"><a href="#imagentab" aria-controls="browseTab" role="tab" data-toggle="tab">Imagen</a>

                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="datostab">
                            <form class="form-horizontal">
                        <!-- parametros ocultos -->
                        <input type="hidden" id="mIdCategoria">
                         <input type="hidden" id="imgCategoria">

                        <div class="box-body">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Nombre Categoria</label>
                                <div class="col-sm-9"> 
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-th-list fa-fw"></i> </span>
                                        <input type="text" name="mNombre" id="mNombre" class="form-control" id="mtxtNombre" placeholder="">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-3 control-label">Descripci&oacute;n</label>
                                <div class="col-sm-9"> 
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-th-list fa-fw"></i> </span>
                                        <input type="text" name="mDescripcion" id="mDescripcion" class="form-control" id="mtxtNombre" placeholder="">
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
                               <div class="form-group">
                                <label class="col-sm-3 control-label">Visible Menu</label>
                                <div class="col-sm-9"> 
                                    <select name="mEstadoVisible" id="mEstadoVisible" class="form-control">                       
                                        <option value="1">Habilitado</option>
                                        <option value="2" selected>Deshabilitado</option>
                                    </select>
                                </div>
                            </div>
                          
                        </div>
                    </form>
                        </div>
                        <div role="tabpanel" class="tab-pane" id="imagentab">
                           <div class="media-body">
                                <div class="panel panel-bluedark">


                                    <div class="col-lg-12 form-group">
                                        <label for="">Imagen Producto</label>
                                        <span class="label label-primary">La imagen debe ser de 76 x 76</span>     
                                        <div class="input-group">
                                            <span class="input-group-addon cajaParametro"><i class="fa fa-picture-o fa-fw"></i> </span>
                                            <input class="form-control" type="file" name="cImagen" id="cImagen" tabindex="16">  
                                        </div>  

                                        <div class="form-group">    
                                            <br>	
                                            <div class="thumbnail">
                                                <!--Foto de 76 x 76 -->
                <!--									<img src="assets/img/Logo-impresion.png" alt="logo">-->
                                                <img id="imagen" src="" alt="imagen">	
                                            </div>
                                        </div> 
                                    </div>

                                    <div style="height:35px;">
                                    </div>
                                </div>    
                                <!-- Botón para agregar filas -->
                                <input type="button" class="btn btn-info" id="btnGuardarImg" value="Guardar" />


                            </div> 
                        </div>
                    </div>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" id="mbtnCerrarModal" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-info" id="mbtnUpdCategoria">Actualizar</button>
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