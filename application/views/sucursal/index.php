
<?php // var_dump($model);                     ?>
<ol class="breadcrumb">
    <li class="active">Sucursal</li>
</ol>
<div id="herramientas" class="panel panel-default">
    <div class="panel-heading">
        Herramientas
    </div>
    <!-- /.panel-heading -->
    <div class="panel-body">
        <div class="btn-group"> 
            <button class="btn btn-primary" type="button" id="btnAgregarSuc" >Agregar</button>
        </div>
       

    </div>
</div>
<br/>
<div id="sucursales" class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Sucursales</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
                <table  id="tbSucursales" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Cuilt</th>
                            <th>Razon Social</th>
                            <th>Direccion</th>

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
<div id="sucursal" class="row" style="display:none">               
    <div class="col-lg-12">     
        <div class="panel panel-bluedark">
            <div class="panel-heading">Datos de la Sucursal</div>
            <div class="panel-body" >


                <input id="idSucursal" name="idSucursa" style="display:none;">

                <div class="col-sm-6 form-group">
                    <label for="">Nombre</label>
                    <div class="input-group">
                        <span class="input-group-addon cajaParametro"><i class="fa fa-university fa-fw"></i> </span><input class="form-control" placeholder="" name="txtNombre" id="txtNombre" type="text" autocomplete="on" autofocus="" tabindex="2" >
                    </div>	
                </div>    
                <div class="col-sm-6 form-group">
                    <label for="">Razon Social</label>
                    <div class="input-group">
                        <span class="input-group-addon cajaParametro"><i class="fa fa-building fa-fw"></i> </span><strong><input class="form-control" placeholder="" name="txtRazonSocial" id="txtRazonSocial" type="text" autocomplete="on" autofocus="" tabindex="1"  required=""></strong>
                    </div>
                </div>     

                <div class="col-sm-6 form-group">
                    <label for="">Cuilt</label>
                    <div class="input-group">
                        <span class="input-group-addon cajaParametro"><i class="fa fa-building fa-fw"></i></span><input class="form-control" placeholder="" name="txtCuit" id="txtCuit" type="text" autocomplete="on" autofocus="" tabindex="3" required="">
                    </div>	
                </div>     

                <div class="col-sm-6 form-group">
                    <label for="">Direccion</label>
                    <div class="input-group">
                        <span class="input-group-addon cajaParametro"><i class="fa fa-map-marker fa-fw"></i> </span><input class="form-control" placeholder="" name="txtDomicilio" id="txtDomicilio" type="text" autocomplete="on" autofocus="" tabindex="4" >
                    </div>	
                </div>    
                <div class="col-sm-12">
                    <ul class="nav nav-tabs" role="tablist" id="paneles">
                        <li class="active"><a href="#tabParametros" role="tab" data-toggle="tab"><h4 class="reviews text-capitalize">Parametros</h4></a></li>
                        <li><a href="#tabHorarios" role="tab" data-toggle="tab"><h4 class="reviews text-capitalize">Horarios Antencion</h4></a></li>

                    </ul> 
                    <div class="tab-content" id="panelCont">
                        <div class="tab-pane active" id="tabParametros">  
                            <div class="media-body">

                                <div class="col-sm-6 form-group">
                                    <label for="">Zona Entrega</label>
                                    <div class="input-group">
                                        <span class="input-group-addon cajaParametro "><i class="fa fa-building fa-fw"></i></span><input class="form-control width_input" placeholder="" name="txtZonaE" id="txtZonaE" type="text" autocomplete="on" autofocus="" tabindex="5" required="">
                                    </div>	
                                </div>  

                                <div class="col-sm-6 form-group">
                                    <label for="">Pedido Minimo</label>

                                    <div class="input-group">
                                        <input  id="rangepm" type="range"  max="500" min="0" step="10" onchange="txtPedidoM.value = rangepm.value" /> 
                                        <span class="input-group-addon cajaParametro "><i class="fa fa-money fa-fw"></i></span><input class="form-control width_input" placeholder="" name="txtPedidoM" id="txtPedidoM" type="text" autocomplete="on" autofocus="" tabindex="6" required="">
                                    </div>	

                                </div> 

                                <div class="col-sm-6 form-group">
                                    <label for="">Costo de Envio</label>
                                    <div class="input-group">
                                        <span class="input-group-addon cajaParametro"><i class="fa fa-money  fa-fw"></i></span><input class="form-control width_input" placeholder="" name="txtCostoE" id="txtCostoE" type="text" autocomplete="on" autofocus="" tabindex="7" required=""/>
                                    </div>	
                                </div> 
                                <div class="col-sm-6 form-group">
                                    <label for="">Tiempo Entrega</label>

                                    <div class="input-group">
                                        <input  id="rangete" type="range"  max="60" min="0" step="1" onchange="txtTiempoE.value = rangete.value" /> 
                                        <span class="input-group-addon cajaParametro "><i class="fa  fa-hourglass-half fa-fw"></i></span><input class="form-control width_input" placeholder="" name="txtTiempoE" id="txtTiempoE" type="text" autocomplete="on" autofocus="" tabindex="8" required=""/>
                                    </div>	

                                </div> 
                            </div>
                        </div>
                        <div class="tab-pane" id="tabHorarios">  

                            <div class="media-body">
                                <table class="table table-bordered" id="tablahorario">
                                    <!-- Cabecera de la tabla -->
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Dia</th>
                                            <th>Hora Apertura</th>
                                            <th>Hora Cierre</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>

                                    <!-- Cuerpo de la tabla con los campos -->
                                    <tbody>
                                        <tr></tr>

                                    </tbody>
                                </table>
                                <!-- Botón para agregar filas -->
                                <input type="button" class="btn btn-warning" id="agregar" value="Agregar fila" />
                                <input type="button" class="btn btn-info" id="guardarHor" value="Guardar" />


                            </div>
                        </div>
                    </div>



                </div> 

            </div>  

            <div class="panel-footer"><button type="button" class="btn btn-default"><a href="sucursal">Cancelar</button>
                <button type="button" class="btn btn-info" id="mbtnUpdSucursal">Actualizar</button></div>



        </div> 
    </div>


</div>   
</div>	


<style>
    .tab-content {
        padding: 50px 15px;
        border: 1px solid #ddd;
        border-top: 0;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .width_input{
        max-width: 50%;
    }

    input[type="range"] {
        position: relative;
        margin-left: 1em;
        width:85%;
    }
    input[type="range"]:after,
    input[type="range"]:before {
        position: absolute;
        top: 1em;
        color: #aaa;
    }
    input[type="range"]:before {
        left:0em;
        content: attr(min);
    }
    input[type="range"]:after {
        right: 0em;
        content: attr(max);
    }
</style>

<script type="text/javascript">
    //Timepicker


    var baseurl = "<?php echo base_url(); ?>";




</script>