
<?php // var_dump($model);                                 ?>
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
                            <th>Descuento</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Fin</th>
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
<div id="promo" class="row" >   
    <div class="col-lg-12">     
        <div class="panel panel-bluedark">
            <div class="panel-heading">Datos del Promo</div>
            <div class="panel-body" >


                <input id="idPromo" name="idPromo" style="display:none;">

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
                    <label for="">Descuento </label>
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa  fa-dollar fa-fw"></i> </span><input class="form-control" placeholder="" name="txtDescuento" id="txtDescuento" type="number" step="any" autocomplete="on" autofocus="" tabindex="4" >
                    </div>	
                </div>  
                <div class="col-sm-6 form-group">
                    <label for="">Precio </label>
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


                <!-- /.paneles de Variedad/componente/imagen -->
                <div class="col-lg-12 form-group">
                    <label for="">Imagen Producto</label>
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
                            <img id="imagen" src="" alt="logo">	
                        </div>
                    </div> 
                    <input type="button" class="btn btn-info" id="btnGuardarImg" value="Guardar" />
                </div>


            </div> 

        </div> 



    </div>  

    <div class="panel-footer"><button type="button" class="btn btn-default"><a href="promo">Cancelar</button>
        <button type="button" class="btn btn-info" id="mbtnUpdPromo">Actualizar</button></div>
</div> 

<!-- /.modal -->


<script type="text/javascript">
    //Timepicker


    var baseurl = "<?php echo base_url(); ?>";




</script>