<ol class="breadcrumb">
    <li class="active">Pagos </li>
</ol>

<br/>
<div class="container-fluid">

</div>
<div id="pedidos" class="row">
	<div class="col-xs-12">
		<div class="box">
			<div class="box-header">
				<h3 class="box-title">Pedidos con pagos a revisar</h3>
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
									<input type="text" class="form-control pull-right" id='txtFechaPago' id="txtFechaPago">
								</div>
							</td>


						</tr>

						</tbody>
					</table>
					<div class="table-responsive">
						<table class="table no-margin" id="tblPagosRevisar">
							<thead>
							<tr>
								<th>Pedido</th>
								<th>Pedido  Pago</th>
								<th>Pedido Estado</th>
								<th>Fecha </th>
								<th>Pago</th>
								<th>Metodo Pago</th>
								<th>Estado Pago</th>
								<th>Monto</th>
								<th>Pago Email</th>
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
<script type="text/javascript">
    var baseurl = "<?php echo base_url(); ?>";
</script>
