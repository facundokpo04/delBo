
<?php // var_dump($model);                                        ?>
<ol class="breadcrumb">
    <li class="active">Promos</li>
</ol>
<div id="herramientas" class="panel panel-default">
    <div class="panel-heading">
        Herramientas
    </div>
    <!-- /.panel-heading -->
    <div class="panel-body">
        <div class="btn-group"> 
            <button class="btn btn-primary" type="button" id="btnAgregarPromo" >Agregar</button>
        </div>


    </div>
</div>
<br/>
<div id="promos" class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Promos</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
                <table  id="tbPromos" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Precio</th>                           
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
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
<!--Detalle de promos -->
<div id="promo" class="row" style="display:none;" >   
    <div class="col-lg-12">     
        <div class="panel panel-bluedark">
            <div class="panel-heading">Datos de la Promo </div>
            <div class="panel-body" >
                <input id="idPromo" name="idPromo" style="display:none;">
                <input id="imgPromo" name="imgPromo" style="display:none;">
                <div class="col-sm-6 form-group">
                    <label for="">Nombre</label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-th-list fa-fw"></i> </span><input class="form-control" placeholder="" name="txtNombre" id="txtNombre" type="text" autocomplete="on" autofocus="" tabindex="2" >
                    </div>	
                </div> 
                <div class="col-sm-6 form-group">
                    <label for="">Descripcion</label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-th-list fa-fw"></i> </span><strong><input class="form-control" placeholder="" name="txtDescripcion" id="txtDescripcion" type="text" autocomplete="on" autofocus="" tabindex="1"  required=""></strong>
                    </div>
                </div> 
                <div class="col-sm-6 form-group">
                    <label for="">Descuento en % </label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa  fa-dollar fa-fw"></i> </span><input class="form-control" placeholder="" name="txtDescuento" id="txtDescuento" type="number" step="any" autocomplete="on" autofocus="" tabindex="4" >
                    </div>	
                </div>
                <div class="col-sm-6 form-group">
                    <label for="">Precio</label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa  fa-dollar fa-fw"></i> </span><input class="form-control" placeholder="" name="txtPrecio" id="txtPrecio" type="number" step="any" autocomplete="on" autofocus="" tabindex="4" >
                    </div>	
                </div>             
                <div class="col-sm-6 form-group">
                    <label for="">Fecha Inicio</label>
                    <div class="input-group date">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <input type="text" class="form-control pull-right" id='txtFechaInicio' id="txtFechaInicio">
                    </div>
                </div>
                <div class="col-sm-6 form-group">
                    <label for="">Fecha Fin</label>

                    <div class="input-group date">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <input type="text" class="form-control pull-right" id='txtFechaFin' id="txtFechaFin">
                    </div>
                </div>   
                <div class="col-sm-6 form-group" id="estadodiv" style="display:none">
                    <label for="">Estado</label>
                    <div class="input-group col-sm-12"> 
                        <select name="PEstado" id="PEstado" class="form-control">                       
                            <option value="1">Habilitado</option>
                            <option value="2" selected>Deshabilitado</option>
                        </select>
                    </div>
                </div>

                <div class="col-sm-12">
                    <ul class="nav nav-tabs" role="tablist" id="paneles">
                        <li class="active"><a href="#tabProductos" role="tab" data-toggle="tab"><h4 class="reviews text-capitalize">Productos</h4></a></li>                     
                        <li><a href="#tabImagen" role="tab" data-toggle="tab"><h4 class="reviews text-capitalize">Imagen Promo</h4></a></li>

                    </ul> 
                    <div class="tab-content" id="panelCont">
                        <div class="tab-pane active" id="tabProductos">  
                            <div class="media-body">

                                <div class="media-body">
                                    <div class="box-body table-responsive no-padding">
                                        <table  id="tblProductos" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Nombre</th>
                                                    <th>Descripcion</th>
                                                    <th>Precio Original</th>                                                                                                   
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>

                                        </table>

                                    </div>
                                    <!-- Botón para agregar filas -->
                                    <button type="button" class="btn btn-warning" id="agregarProd"  data-backdrop="static" data-keyboard="false"> Agregar Producto</button>
<!--                                    <input type="button" class="btn btn-info" id="guardarVar" value="Guardar" />-->


                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="tabImagen">  

                            <div class="media-body">
                                <div class="panel panel-bluedark">


                                    <div class="col-lg-12 form-group">
                                        <label for="">Imagen Promo</label>
                                        <span class="label label-primary">La imagen debe ser de 76 x 76</span>     
                                        <div class="input-group">
                                            <span class="input-group-addon cajaParametro"><i class="fa fa-picture-o fa-fw"></i> </span>
                                            <input class="form-control" type="file" name="pImagen" id="pImagen" tabindex="16">  
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
            <!-- /.paneles de Variedad/componente/imagen -->
        </div> 

    </div> 

    <div class="panel-footer"><button type="button" class="btn btn-default" onclick="location.reload()"> Cancelar</button>
        <button type="button" class="btn btn-info" id="mbtnUpdPromo">Actualizar</button></div>
</div> 

<!-- /.modal -->
<div class="example-modal modal fade" id="modalAgregarProductos" role="dialog"  style="overflow-y: scroll;" >
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" id="mCerrarModal" onclick="cerrarModalProductos()" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Agregar Productos</h4>
            </div>
            <div class="modal-body">
                <table class="table table-bordered table-striped">
                    <tbody>
                        <tr>                                
                            <td>
                                <select id="selCat" style="width:200px">                                         
                                </select>                                     
                            </td>                                   
                        </tr>
                    </tbody>
                </table>
                <div class="box-body table-responsive no-padding">                                                                    
                    <table  id="tblProductos2" class="table table-bordered table-striped">
                        <thead>
                            <tr>                             
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio Original</th>
                                <th>Categoria</th>
                                <th>Seleccione</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>

                    </table>
                    <div id="msj" class="alert alert-success alert-dismissible" style="display: none">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <h4><i class="icon fa fa-check"></i> Mensaje</h4>
                    <p> </p>
                </div>

                </div>

              
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" id="mbtnCerrarModal" onclick="cerrarModalProductos()">Cancelar</button>
                <button type="button" class="btn btn-info"  onclick="cerrarModalProductos()">Aceptar</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->  
</div>


<script type="text/javascript">
    //Timepicker


    var baseurl = "<?php echo base_url(); ?>";




</script>