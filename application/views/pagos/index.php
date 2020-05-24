<ol class="breadcrumb">
    <li class="active">Pagos </li>
</ol>

<br/>
<div id="pedidos" class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Pagos Mercado Pago</h3>
            </div>
            <!-- /.box-header -->
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Ultimos Pagos</h3>

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
                                        <input type="text" class="form-control pull-right" id='txtFechaPago' id="txtFechaPago">
                                    </div>                                   
                                </td>  


                            </tr>
                            <tr>                                
                                <td>
                                    <select id="selEst" style="width:200px">
                                        <option value="0" selected>Todos</option>
                                        <option value="approved">Aprobados</option>
                                        <option value="rejected">Rechazados</option>                                   
                                    </select>                                     
                                </td>  


                            </tr>

                        </tbody>
                    </table>
                    <div class="table-responsive">
                        <table class="table no-margin" id="tblPagos">
                            <thead>
                                <tr>
                                    <th>Pedido</th>
                                    <th>Metodo</th>
                                    <th>Estado</th>
                                    <th>Fecha </th>
                                    <th>Monto</th>
                                    <th>Metodo Pago</th>
                                    <th>Tipo Pago</th>                                   
                                    <th>DNI Tarjeta</th>
                                    <th>Nombre Tarjeta</th>
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

                    <a onclick="fechaHoy()" class="btn btn-sm btn-default btn-flat pull-right">Pagos de Hoy</a>
                </div>
                <!-- /.box-footer -->
            </div>
            <!-- /.box-body -->
        </div>
        <!-- /.box -->
    </div>
    <br/>

</div>

<script type="text/javascript">
    var baseurl = "<?php echo base_url(); ?>";
</script>