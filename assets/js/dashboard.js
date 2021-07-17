onload = function () {
	fechaHoy();


}

var areaChartData = {
	labels: [],
	datasets: [{
		label: "Cantidad",
		backgroundColor: "rgba(60,141,188,0.8)",
		borderColor: "rgba(60,141,188,0.8)",
		data: []
	},],
};

var areaChartDataMonto = {
	labels: [],
	datasets: [{
		label: "Monto ",
		backgroundColor: "rgba(60,141,188,0.8)",
		borderColor: "rgba(60,141,188,0.8)",
		data: []
	},],
};

var areaChartDataPedMes = {
	labels: [],
	datasets: [{
		label: "Cantidad",
		backgroundColor: "rgba(60,141,188,0.8)",
		borderColor: "rgba(60,141,188,0.8)",
		data: []
	},],
};

var areaChartDataMontoPedMes = {
	labels: [],
	datasets: [{
		label: "Monto ",
		backgroundColor: "rgba(60,141,188,0.8)",
		borderColor: "rgba(60,141,188,0.8)",
		data: []
	},],
};

var areaChartDataTopClientes = {
	labels: [],
	datasets: [{
		label: "Cliente ",
		backgroundColor: "rgba(60,141,188,0.8)",
		borderColor: "rgba(60,141,188,0.8)",
		data: []
	},],
};

var dpxd = $('#datepickpedidosxdia').datepicker({
	autoclose: true,
	format: 'yyyy-mm',
	closeText: 'Cerrar',
	changeMonth: true,
	changeYear: true,
	startView: "months",
	minViewMode: "months",
	prevText: '<Ant',
	nextText: 'Sig>',
	currentText: 'Hoy',
	monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
	// dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
	// dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
	// dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá']

}).datepicker('setDate', new Date());
var dpxm = $('#datepickpedidosxmes').datepicker({
	autoclose: true,
	format: 'yyyy',
	closeText: 'Cerrar',
	changeMonth: false,
	changeYear: true,
	startView: "years",
	minViewMode: "years",
	prevText: '<Ant',
	nextText: 'Sig>',
	currentText: 'Hoy',
	// monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	// monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
	// dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
	// dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
	// dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá']

}).datepicker('setDate', new Date());


  var apiUrl = apiurl;

function fechaHoyMenu() {
	var f = new Date();
	var fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();

	return fecha;
}

function fechaHoy() {
	dpxd.datepicker("setDate", new Date());
	dpxm.datepicker("setDate", new Date());

}

fechaHoy();

var barCharttp = null;
var barChartMontoPedidos = null;
var barChartPedidosmes=null;
var barChartMontoPedidosmes=null;
var barChartTopClientes=null;

function inicializarCharTotalPed() {
	//-------------
	//- BAR CHART -
	//-------------
	var barChartCanvastp = $("#barChart").get(0).getContext("2d");

	var barChartData = areaChartData;
	// barChartData.datasets[1].fillColor = "#00a65a";
	// barChartData.datasets[1].strokeColor = "#00a65a";
	// barChartData.datasets[1].pointColor = "#00a65a";
	var barChartOptions = {
		responsive: true,
		maintainAspectRatio: false,

		scales: {
			xAxes: [{
				xAxes: [{ barPercentage: 0.5 }],
				ticks: {
					autoSkip: false,
					maxRotation: 90,
					minRotation: 90
				}
				// gridLines: {
				// 	offsetGridLines: true // à rajouter
				// }
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	};
	barCharttp = new Chart(barChartCanvastp, {
		type: 'bar',
		data: areaChartData,
		options: barChartOptions
	});

	 barChartOptions.datasetFill = false;
}
function inicializarCharMontoPed() {
	//-------------
	//- BAR CHART -
	//-------------
	var barChartCanvaspta = $("#barChartMonto").get(0).getContext("2d");


	var barChartOptions = {
		responsive: true,
		maintainAspectRatio: false,

		scales: {
			xAxes: [{
				xAxes: [{ barPercentage: 0.5 }],
				ticks: {
					autoSkip: false,
					maxRotation: 90,
					minRotation: 90
				}
				// gridLines: {
				// 	offsetGridLines: true // à rajouter
				// }
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	};
	barChartMontoPedidos = new Chart(barChartCanvaspta, {
		type: 'bar',
		data: areaChartDataMonto,
		options: barChartOptions
	});


	barChartOptions.datasetFill = false;
};
function inicializarCharPedMes() {
	var barChartCanvastm = $("#barChartPedMes").get(0).getContext("2d");


	var barChartOptions = {
		responsive: true,
		maintainAspectRatio: false,

		scales: {
			xAxes: [{
				xAxes: [{ barPercentage: 0.5 }],
				ticks: {
					autoSkip: false,
					maxRotation: 90,
					minRotation: 90
				}
				// gridLines: {
				// 	offsetGridLines: true // à rajouter
				// }
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	};
	barChartPedidosmes = new Chart(barChartCanvastm, {
		type: 'bar',
		data: areaChartDataPedMes,
		options: barChartOptions
	});


	barChartOptions.datasetFill = false;
}
function inicializarCharPedMontoMes() {
	var barChartCanvastm = $("#barChartPedMontoMes").get(0).getContext("2d");


	var barChartOptions = {
		responsive: true,
		maintainAspectRatio: false,

		scales: {
			xAxes: [{
				xAxes: [{ barPercentage: 0.5 }],
				ticks: {
					autoSkip: false,
					maxRotation: 90,
					minRotation: 90
				}
				// gridLines: {
				// 	offsetGridLines: true // à rajouter
				// }
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	};
	barChartMontoPedidosmes = new Chart(barChartCanvastm, {
		type: 'bar',
		data: areaChartDataMontoPedMes,
		options: barChartOptions
	});


	barChartOptions.datasetFill = false;
}
function inicializarCharTopClientes() {
	//-------------
	//- BAR CHART -
	//-------------
	var barChartCanvastc = $("#barChartTopClientes").get(0).getContext("2d");


	var barChartOptions = {
		responsive: true,
		maintainAspectRatio: false,

		scales: {
			xAxes: [{
				xAxes: [{ barPercentage: 0.5 }],
				ticks: {
					autoSkip: false,
					maxRotation: 90,
					minRotation: 90
				}
				// gridLines: {
				// 	offsetGridLines: true // à rajouter
				// }
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	};
	barChartTopClientes= new Chart(barChartCanvastc, {
		type: 'bar',
		data: areaChartDataTopClientes,
		options: barChartOptions
	});


	barChartOptions.datasetFill = false;
}

function addData(chart, label, data) {
	chart.data.labels=label;
	chart.data.datasets.forEach((dataset) => {
		dataset.data= data;
	});
	chart.update();
}

inicializarCharTotalPed();
inicializarCharMontoPed();
inicializarCharPedMes();
inicializarCharPedMontoMes();
inicializarCharTopClientes();

var fechamenu = fechaHoyMenu();


getPedidosCant = function (fechamenu) {
	var cantpedidos = 0;
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/pedidosTotalFechaPen/" + fechamenu,
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			$("#totalPedDia").empty();
			$("#totalPedDia").append(parseInt(res));
		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};
getPagosTotal = function (fechamenu) {
	var cantpedidos = 0;
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/pagosTotalMontoFecha/" + fechamenu,
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			$("#pedidosMontoMp").empty();
			$("#pedidosMontoMp").append("$"+parseInt(res.monto));
			$("#pagosTotalMp").empty();
			$("#pagosTotalMp").append(parseInt(res.total));
		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};
getPagosEfecTotal = function (fechamenu) {
	var cantpedidos = 0;
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/pedidosEfecTotalMontoFecha/" + fechamenu,
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			$("#pedidosMontoEfec").empty();
			$("#pedidosMontoEfec").append("$"+parseInt(res.monto));
			$("#pedidosTotalEfec").empty();
			$("#pedidosTotalEfec").append(parseInt(res.total));
		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};
getPedidosCantMes = function (anio) {
	var cantpedidos = 0;
	var labels = [];
	var montos = [];
	var total = [];
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/pedidosTotalMontoMes/" + anio,
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			res.data.forEach((element) => {
				labels.push(element.Mes);
				montos.push(parseInt(element.Monto));
				total.push(parseInt(element.Total));
			});

			addData(barChartPedidosmes, labels, total)
			addData(barChartMontoPedidosmes, labels, montos)

		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};
getUsuariosTot = function () {
	var cantpedidos = 0;
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/usuariosTotal",
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			$("#usuariosTotal").empty();
			$("#usuariosTotal").append(parseInt(res));
		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};

getPedidosTotalMontoDia = function (mes, anio) {
	var cantpedidos = 0;
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/pedidosTotalMontoDia/" + mes + "/" + anio,
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			console.log(res);
		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};
getPedidosTotalDias = function (mes, anio) {
	var labels = [];
	var montos = [];
	var total = [];
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/pedidosTotalDias/" + mes + "/" + anio,
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			res.data.forEach((element) => {
				labels.unshift(element.Dia);
				montos.unshift(parseInt(element.Monto));
				total.unshift(parseFloat(element.Total));
			});

			areaChartData.labels = labels;
			areaChartDataMonto.labels = labels;

			areaChartData.datasets[0].data = total;
			areaChartDataMonto.datasets[0].data = montos;
			addData(barCharttp, labels, total)
			addData(barChartMontoPedidos, labels, montos)

		},
		error: function (request, status, error) {
			console.log(error.message);
		},
	});
};
getPedidosTotaMontoMedioPlMes = function (mes, anio) {
	var cantpedidos = 0;
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/pedidosTotalMontoMedioPMes/" + mes + "/" + anio,
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			console.log(res);
		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};
getPedidosTotalMontoFecha = function (fecha) {
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/pedidosTotalMontoFecha/" + fecha,
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			$("#pedidosTotalMontoDia").empty();
			$("#pedidosTotalMontoDia").append(parseInt(res));
		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};
getPedidosTotaMontoMedioPDia = function (fecha) {
	var cantpedidos = 0;
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/pedidosTotalMontoMedioPFecha/" + fecha,
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			res.forEach((element) => {
				if (element.MedioPago == "8") {
					$("#pedidosPagoDestino").empty();
					$("#pedidosPagoDestino").append(parseInt(element.Total));
				} else if (element.MedioPago == "5") {
					$("#pedidosPagoOnline").empty();
					$("#pedidosPagoOnline").append(parseInt(element.Total));
				}
				 else if (element.MedioPago == "7") {
					$("#pedidosPagoOtro").empty();
					$("#pedidosPagoOtro").append(parseInt(element.Total));
				}
			});


		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};
getTopClienteMes = function (mes, anio) {
	var labels = [];

	var total = [];
	$.ajax({
		type: "GET",
		url: apiUrl + "estadisticas/clientesTopMes/" + mes + "/" + anio,
		dataType: "json",
		data: {
			"<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
		},
		success: function (res) {
			res.forEach((element) => {
				labels.push(element.Nombre);
				total.push(parseFloat(element.total));
			});
			addData(barChartTopClientes, labels, total)

		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};


$("#datepickpedidosxdia").change(function () {

	var fecha = $('#datepickpedidosxdia').val();

	if (fecha) {
		var res = fecha.split("-");
		getPedidosTotalDias(res[1], res[0]);
		getTopClienteMes(res[1], res[0]);

	}
})

$("#datepickpedidosxmes").change(function () {

	var fecha = $('#datepickpedidosxmes').val();

	if (fecha) {
		var res = fecha.split("-");
		getPedidosCantMes(res[0])

	}
})


var f = new Date();
var anio = f.getFullYear();
var mes = f.getMonth() + 1;

getPedidosCant(fechamenu);
getPagosTotal(fechamenu);
getPagosEfecTotal(fechamenu);
getPedidosTotaMontoMedioPDia(fechamenu)
getUsuariosTot();
getPedidosTotalMontoFecha(fechamenu);
