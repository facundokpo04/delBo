<ol class="breadcrumb">
    <li class="active">Pagos </li>
</ol>

<br/>
<div class="container-fluid">
<div class="row">

	<div class="box box-success">
		<div class="box-header with-border">
			<h3 class="box-title">Estadisticas Mercado Pago</h3>

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
						<span class="info-box-text">Monto Mercado Pago</span>
						<span class="info-box-number" id="pedidosMontoMp">$</span>
					</div>
					<!-- /.info-box-content -->
				</div>
				<!-- /.info-box -->
			</div>
			<div class="col-md-3 col-sm-6 col-xs-12">
				<div class="info-box">
					<span class="info-box-icon bg-aqua"><i class="fa fa-credit-card"></i></span>

					<div class="info-box-content">
						<span class="info-box-text">Total Pagos MP</span>
						<span class="info-box-number" id="pagosTotalMp"></span>
					</div>
					<!-- /.info-box-content -->
				</div>
			</div>
			<div class="col-md-4 col-sm-6 col-xs-12">

				<div class="info-box">
					<span class="info-box-icon bg-aqua"><i class="fa fa-shopping-cart"></i></span>

					<div class="info-box-content">
						<span class="info-box-text">Pedidos Pago Online</span>
						<span class="info-box-number" id="pedidosPagoOnline"></span>
					</div>
					<!-- /.info-box-content -->
				</div>
				<!-- /.info-box -->
			</div>
			<!-- /.col -->
		</div>
		<!-- /.box-body -->
	</div>

</div>

</div>
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
								<th>Id Pago</th>
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
