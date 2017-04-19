
<?php // var_dump($model);                                    ?>
<ol class="breadcrumb">
    <li class="active">Empleado</li>
</ol>
<div class="panel panel-default">
    <div class="panel-heading">
        Herramientas
    </div>
    <!-- /.panel-heading -->
    <div class="panel-body">
        <div class="btn-group"> 
            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modalEditEmpleado" >Agregar</button>
        </div>        
    </div>
</div>
<br/>
<div class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Empleados</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
                <table  id="tblEmpleados" class="table table-bordered table-striped">
                    <thead>
                        <tr>  
                            <th>#</th>
                            <th>Legajo</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Sucursal</th>
                            <th>Cargo</th>
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

<!-- Modal Editar Empleado -->

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
    .modal-dialog {
        width: 90%;
        height: 90%;
        margin: 0 auto;
        padding: 0;
    }

    .modal-content {
        height: auto;
        min-height: 10%;
        border-radius: 0;
    }
    .modal {
        text-align: center;
    }
</style>

<div class="example-modal modal fade" id="modalEditEmpleado" tabindex="-1" >
    <div class="modal">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" id="mCerrarModal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Agregar/ Modificar Empleado</h4>
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
                                <form id="FormEmpleado" class="form-horizontal" method="post">
                                    <!-- parametros ocultos -->
                                    <input type="hidden" id="mIdEmpleado">
                                    <input type="hidden" id="mIdPersona">

                                    <div class="box-body">
                                        <div class="col-sm-12">
                                            <div class="form-group col-sm-6">
                                                <label class="col-sm-3 control-label">Nombre Persona</label>
                                                <div class="col-sm-9"> 
                                                    <div class="input-group">
                                                        <span class="input-group-addon"><i class="fa fa-th-list fa-fw"></i> </span>  <input  type="text" name="mNombre" id="mNombre" class="form-control" id="mtxtNombre" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label class="col-sm-3 control-label">Legajo</label>
                                                <div class="col-sm-9"> 
                                                    <div class="input-group">
                                                        <span class="input-group-addon"><i class="fa fa-th-list fa-fw"></i> </span>  <input type="number" name="mLegajo" id="mLegajo" class="form-control" id="mtxtNombre" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group col-sm-6">
                                                <label class="col-sm-3 control-label">Documento</label>
                                                <div class="col-sm-9"> 
                                                    <div class="input-group">
                                                        <span class="input-group-addon cajaParametro"><i class="fa  fa-plus-circle fa-fw"></i> </span> <input type="number" min="6" max="8" name="mDocumento" id="mDocumento" class="form-control" id="mtxtNombre" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label class="col-sm-3 control-label">Email</label>
                                                <div class="col-sm-9"> 
                                                    <div class="input-group">
                                                        <span class="input-group-addon"><i class="fa fa-th-list fa-fw"></i> </span>
                                                        <input type="email" name="mEmail" id="mEmail" class="form-control" id="mtxtNombre" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group col-sm-6">
                                                <label class="col-sm-3 control-label">Password</label>
                                                <div class="col-sm-9">
                                                    <div class="input-group">
                                                        <span class="input-group-addon"><i class="fa fa-th-list fa-fw"></i> </span>
                                                        <input type="text" name="mPassword" id="mPassword" class="form-control" id="mtxtNombre" placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label class="col-sm-3 control-label">Nacionalidad</label>
                                                <div class="col-sm-9"> 
                                                    <div class="input-group">
                                                        <span class="input-group-addon cajaParametro"><i class="fa fa-globe fa-fw"></i></span>
                                                        <select name="mNacionalidad" id="mNacionalidad" class="form-control" tabindex="7">
                                                            <option value="AR" selected>Argentina</option>
                                                            <option value="BL">Bolivia</option>
                                                            <option value="BR">Brasil</option>
                                                            <option value="CL">Chile</option>
                                                            <option value="CO">Colombia</option>
                                                            <option value="CR">Costa Rica</option>
                                                            <option value="CU">Cuba</option>
                                                            <option value="EC">Ecuador</option>
                                                            <option value="ES">El Salvador</option>
                                                            <option value="HO">Honduras</option>
                                                            <option value="MX">México</option>
                                                            <option value="NI">Nicaragua</option>
                                                            <option value="PY">Paraguay</option>					
                                                            <option value="PA">Panamá</option>					
                                                            <option value="PE">Perú</option>							
                                                            <option value="PR">Puerto Rico</option>					
                                                            <option value="RD">República Dominicana</option>			
                                                            <option value="UY">Uruguay</option>						
                                                            <option value="VE">Venezuela</option>					
                                                        </select>
                                                    </div>	
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group col-sm-6">
                                                <label class="col-sm-3 control-label">Perfil Usuario</label>
                                                <div class="col-sm-9"> 
                                                    <div class="input-group">
                                                        <span class="input-group-addon cajaParametro"><i class="fa fa-globe fa-fw"></i></span>
                                                        <select name="mPerfilUsuario" id="mPerfilUsuario" class="form-control" tabindex="7">
                                                            <option value="Admin">Administrador</option>
                                                            <option value="Empleado" selected>Empleado</option>                                                           					
                                                        </select>
                                                    </div>	
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label class="col-sm-3 control-label">Cargo</label>
                                                <div class="col-sm-9"> 
                                                    <div class="input-group">
                                                        <span class="input-group-addon cajaParametro"><i class="fa fa-globe fa-fw"></i></span>
                                                        <select name="mCargo" id="mCargo" class="form-control" tabindex="7">
                                                            <option value="Encargado">Encargado</option>
                                                            <option value="Repartidor" selected>Repartidor</option>                                                           					
                                                        </select>
                                                    </div>	
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group col-sm-6">
                                                <label class="col-sm-3 control-label">Sucursal</label>
                                                <div class="col-sm-9"> 
                                                    <select class="form-control" id="mSucursal" name="mSucursal">

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="imagentab">
                                <div class="media-body">
                                    <div class="panel panel-bluedark">


                                        <div class="col-lg-12 form-group">
                                            <label for="">Imagen Empleado</label>
                                            <span class="label label-primary">La imagen debe ser de 76 x 76</span>     
                                            <div class="input-group">
                                                <span class="input-group-addon cajaParametro"><i class="fa fa-picture-o fa-fw"></i> </span>
                                                <input class="form-control" type="file" name="mImagen" id="cImagen" tabindex="16">  
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
                    <button type="button" class="btn btn-info" id="mbtnUpdEmpleado2">Actualizar</button>
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