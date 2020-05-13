<?php // var_dump($model);  ?>
<ol class="breadcrumb">
    <li class="active">Dashboard</li>
</ol>
<div id="herramientas" class="panel panel-default">
    <div class="panel-heading">
        Herramientas
    </div>
    <!-- /.panel-heading -->
    <div class="panel-body">



    </div>
</div>
<br />
<div class="container-fluid">
    <div id="Diario" class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">

            <div class="info-box">
                <span class="info-box-icon bg-aqua"><i class="fa fa-shopping-cart"></i></span>

                <div class="info-box-content">
                    <span class="info-box-text">Pedidos</span>
                    <span class="info-box-number" id="totalPedDia"></span>
                </div>
                <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
        </div>
        <!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <span class="info-box-icon bg-red"><i class="fa fa-usd" aria-hidden="true"></i></span>

                <div class="info-box-content">
                    <span class="info-box-text">Ventas Diarias</span>
                    <span class="info-box-number" id="pedidosTotalMontoDia"></span>
                </div>
                <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
        </div>
        <!-- /.col -->

        <!-- fix for small devices only -->
        <div class="clearfix visible-sm-block"></div>

        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <span class="info-box-icon bg-green"><i class="fa fa-users" aria-hidden="true"></i></span>

                <div class="info-box-content">
                    <span class="info-box-text">Usuarios</span>
                    <span class="info-box-number" id="usuariosTotal"></span>
                </div>
                <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
        </div>
        <!-- /.col -->
        <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="info-box">
                <span class="info-box-icon bg-yellow"><i class="fa fa-user-plus"></i></span>

                <div class="info-box-content">
                    <span class="info-box-text">Usuarios Mes</span>
                    <span class="info-box-number" id="usuariosTotalMes">4</span>
                </div>
                <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
        </div>
        <!-- /.col -->
    </div>
    <div class="row">

        <div class="box box-success">
            <div class="box-header with-border">
                <h3 class="box-title">Total Medios Pago</h3>

                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i
                            class="fa fa-times"></i></button>
                </div>
            </div>
            <div class="box-body">
                <div class="col-md-3 col-sm-6 col-xs-12">

                    <div class="info-box">
                        <span class="info-box-icon bg-aqua"><i class="fa fa-credit-card"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-text">Mercado Pago</span>
                            <span class="info-box-number" id="pedidosMontoMp">$</span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                </div>
                <!-- /.col -->
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box">
                        <span class="info-box-icon bg-red"><i class="fa fa-usd" aria-hidden="true"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-text">Efectivo</span>
                            <span class="info-box-number" id="pedidosMontoEfec">$</span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                </div>

                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="info-box">
                        <span class="info-box-icon bg-red"><i class="fa fa-credit-card" aria-hidden="true"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-text">Tarjeta</span>
                            <span class="info-box-number" id="pedidosMontoTarje">$</span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                </div>

            </div>
            <!-- /.box-body -->
        </div>

    </div>
    <div class="row">

        <div class="box box-success">
            <div class="box-header with-border">
                <h3 class="box-title">Pedidos por dia</h3>

                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i
                            class="fa fa-times"></i></button>
                </div>
            </div>
            <div class="box-body">
                <div class="chart">
                    <canvas id="barChart" style="height:230px"></canvas>
                </div>
            </div>
            <!-- /.box-body -->
        </div>


    </div>

    <div class="row">

        <div class="box box-success">
            <div class="box-header with-border">
                <h3 class="box-title">Monto Total Pedidos por dia</h3>

                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i
                            class="fa fa-times"></i></button>
                </div>
            </div>
            <div class="box-body">
                <div class="chart">
                    <canvas id="barChartMonto" style="height:230px"></canvas>
                </div>
            </div>
            <!-- /.box-body -->
        </div>


    </div>

    <div class="row">

        <div class="box box-success">
            <div class="box-header with-border">
                <h3 class="box-title">Pedidos por mes</h3>

                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i
                            class="fa fa-times"></i></button>
                </div>
            </div>
            <div class="box-body">
                <div class="chart">
                    <canvas id="barChartPedMes" style="height:230px"></canvas>
                </div>
            </div>
            <!-- /.box-body -->
        </div>


    </div>
    <div class="row">

        <div class="box box-success">
            <div class="box-header with-border">
                <h3 class="box-title">Monto Pedidos por mes</h3>

                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i
                            class="fa fa-times"></i></button>
                </div>
            </div>
            <div class="box-body">
                <div class="chart">
                    <canvas id="barChartPedMontoMes" style="height:230px"></canvas>
                </div>
            </div>
            <!-- /.box-body -->
        </div>


    </div>
    <div class="row">

        <div class="box box-success">
            <div class="box-header with-border">
                <h3 class="box-title">Top Clientes Mes</h3>

                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i
                            class="fa fa-times"></i></button>
                </div>
            </div>
            <div class="box-body">
                <div class="chart">
                    <canvas id="barChartTopClientes" style="height:230px"></canvas>
                </div>
            </div>
            <!-- /.box-body -->
        </div>


    </div>
</div>

<!-- fin cointainer -->


<script type="text/javascript">
var baseurl = "<?php echo base_url(); ?>";

//Timepicker
</script>