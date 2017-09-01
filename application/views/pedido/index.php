
<?php // var_dump($model);              ?>
<ol class="breadcrumb">
    <li class="active">Pedidos Hoy</li>
</ol>

<br/>
<div id="pedidos" class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">PEDIDOS</h3>
            </div>
            <!-- /.box-header -->
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Ultimos Pedidos</h3>

                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <table class="table table-bordered table-striped">
                        <tbody>
                            <tr>                                
                                <td>
                                    <div class="input-group date"  style="width:200px">
                                        <div class="input-group-addon">
                                            <i class="fa fa-calendar"></i>
                                        </div>
                                        <input type="text" class="form-control pull-right" id='txtFechaPedido' id="txtFechaPedido">
                                    </div>                                   
                                </td>  


                            </tr>
                            <tr>                                
                                <td>
                                    <select id="selEst" style="width:200px">
                                        <option value="0" selected>Todos</option>
                                        <option value="Pendiente">Pendiente</option>
                                        <option value="Preparando">Preparando</option>
                                        <option value="Enviando">Enviando</option>
                                        <option value="Cancelado">Cancelado</option>
                                    </select>                                     
                                </td>  


                            </tr>

                        </tbody>
                    </table>
                    <div class="table-responsive">
                        <table class="table no-margin" id="tblPedidos">
                            <thead>
                                <tr>
                                    <th>Pedido ID</th>
                                    <th>Estado</th>
                                    <th>Cliente</th>                 
                                    <th>Celular</th>
                                    <th>Direccion</th>
                                    <th>Telefono</th>
                                    <th>Empleado</th>
                                    <th>Hora</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>                   
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix">

                    <a onclick="fechaHoy()" class="btn btn-sm btn-default btn-flat pull-right">Pedidos de Hoy</a>
                </div>
                <!-- /.box-footer -->
            </div>
            <!-- /.box-body -->
        </div>
        <!-- /.box -->
    </div>
    <br/>

</div>
<div id="pedido" class="row" style="display:none;"> 
    <section class="invoice">
        <!-- title row -->
        <div class="row">
            <div class="col-xs-12">
                <h2 class="page-header">
                    <i class="fa fa-globe"></i> Pizza Color Delivery.
                    <small class="pull-right"><p id="date"></p></small>
                </h2>
            </div>
            <!-- /.col -->
        </div>
        <!-- info row -->
        <div class="row invoice-info">
            <div class="col-sm-4 invoice-col">
                Cliente:
                <address id="cliente">

                </address>
            </div>

            <div id="empleadoP" class="col-sm-4 invoice-col">
                Empleado:


            </div>
            <!-- /.col -->

            <!-- /.col -->
            <div id="pedidoE" class="col-sm-4 invoice-col">


            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->

        <!-- Table row -->
        <div id="pedidoD">
            <div  id="pedidoD2" class="row">
                <div class="col-xs-12 table-responsive">
                    <table id="tbProductos" class="table table-striped">
                        <thead>
                             <tr>
                                <th>Cant</th>
                                <th>Item</th>
                                <th>Categoria</th>
                                <th>Producto</th>
                                <th>Aclaracion</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-xs-12">
                    <!--
                    -->                    <address id="cliente2">

                    </address>


                </div>

                <div class="col-xs-12">
                    <!--
                    -->                   
                    <address id="aderezos">

                    </address>


                </div>

                <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row">
                <!-- accepted payments column -->
                <div class="col-xs-6">
                    <p class="lead">Aclaracion Pedido</p>
                    <p id="aclaracionP"> </p>              
                </div>
                <!-- /.col -->
                <div  class="col-xs-6">
                    <p id="fechaP" class="lead"></p>

                    <div class="table-responsive">
                        <table class="table" id="tblTotal">

                        </table>
                    </div>
                </div>
                <!-- /.col -->
            </div>
        </div>
        <!-- /.row -->
        <div class="row no-print">
            <div class="col-xs-12">    
                <button type="button" class="btn btn-default" onclick="location.reload()">Volver</button>
                <a  href="javascript:imprSelec('pedidoD2')" target="_blank" class="btn btn-default"><i class="fa fa-print"></i>Imprimir</a>         
            </div>
        </div>
    </section>
</div>

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

<div class="example-modal modal fade" id="modalEnviarPedido" tabindex="-1" >
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" id="mCerrarModal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Enviar Pedido</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <!-- parametros ocultos -->
                        <input type="hidden" id="midPedido">


                        <div class="box-body">                                
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Repartidor</label>
                                <div class="col-sm-9"> 
                                    <select name="mRepartidor" id="mRepartidor" class="form-control">                       

                                    </select>
                                </div>
                            </div>                         
                        </div>
                    </form>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" id="mbtnCerrarModal" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-info" id="mbtnEnviarPedido">Actualizar</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</div>

<div class="example-modal modal fade" id="modalCancelarPedido" tabindex="-1" >
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" id="mCerrarModal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Cancelar Pedido</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <!-- parametros ocultos -->
                        <input type="hidden" id="midcPedido">
                        <input type="hidden" id="midEPedido">

                        <div class="box-body">                                
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Motivo</label>
                                <div class="col-sm-9"> 
                                    <textarea id="mMotivo" class="form-control" rows="3" placeholder="Escriba brevemente el motivo ..."></textarea>
                                </div>
                            </div>                         
                        </div>
                    </form>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" id="mbtnCerrarModal" data-dismiss="modal">Volver</button>
                    <button type="button" class="btn btn-danger" id="mbtnCancelarPedido">Cancelar Pedido</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</div>

<div class="example-modal modal fade" id="modalResumenPedido" tabindex="-1" >
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" id="mCerrarModal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Resumen Pedido</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <!-- parametros ocultos -->
                        <input type="hidden" id="midcPedido">
                        <input type="hidden" id="midEPedido">

                        <div class="box-body">                                
                            <div class="form-group">                              
                                <div class="col-sm-9" id="resumenP"> 

                                </div>
                            </div>                         
                        </div>
                    </form>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" id="mbtnCerrarModal" data-dismiss="modal">Volver</button>
                    <a  href="javascript:imprSelec('resumenP')" target="_blank" class="btn btn-default"><i class="fa fa-print"></i>Imprimir</a> 
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</div>

<script type="text/javascript">
    function imprSelec(muestra)
    {
        var ficha = document.getElementById(muestra);
        var ventimp = window.open(' ', 'popimpr');
        ventimp.document.write(ficha.innerHTML);
        ventimp.document.close();
        ventimp.print();
        ventimp.close();
    }
</script>
<script type="text/javascript">
    var baseurl = "<?php echo base_url(); ?>";
</script>