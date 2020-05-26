var areaChartData = {
    labels: [],
    datasets: [{
        label: "Cantidad",
        fillColor: "rgba(210, 214, 222, 1)",
        strokeColor: "rgba(210, 214, 222, 1)",
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [],
    }, ],
};

var areaChartDataMonto = {
    labels: [],
    datasets: [{
        label: "Monto ",
        fillColor: "rgba(60,141,188,0.9)",
        strokeColor: "rgba(60,141,188,0.8)",
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: [],
    }, ],
};

var areaChartDataPedMes = {
    labels: [],
    datasets: [{
        label: "Cantidad",
        fillColor: "rgba(210, 214, 222, 1)",
        strokeColor: "rgba(210, 214, 222, 1)",
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [],
    }, ],
};

var areaChartDataMontoPedMes = {
    labels: [],
    datasets: [{
        label: "Monto ",
        fillColor: "rgba(60,141,188,0.9)",
        strokeColor: "rgba(60,141,188,0.8)",
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: [],
    }, ],
};

var areaChartDataTopClientes = {
    labels: [],
    datasets: [{
        label: "Monto ",
        fillColor: "rgba(60,141,188,0.9)",
        strokeColor: "rgba(60,141,188,0.8)",
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: [],
    }, ],
};

var apiUrl = "http://34.71.11.61/delApi/public/";

function fechaHoyMenu() {
    var f = new Date();
    var fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();

    return fecha;
}

function inicializarCharTotalPed() {
    //-------------
    //- BAR CHART -
    //-------------
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas);
    var barChartData = areaChartData;
    // barChartData.datasets[1].fillColor = "#00a65a";
    // barChartData.datasets[1].strokeColor = "#00a65a";
    // barChartData.datasets[1].pointColor = "#00a65a";
    var barChartOptions = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - If there is a stroke on each bar
        barShowStroke: true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,
        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,
        //String - A legend template
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        //Boolean - whether to make the chart responsive
        responsive: true,
        maintainAspectRatio: true,
    };

    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);
}

function inicializarCharMontoPed() {
    //-------------
    //- BAR CHART -
    //-------------
    var barChartCanvas = $("#barChartMonto").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas);
    var barChartData = areaChartDataMonto;
    // barChartData.datasets[1].fillColor = "#00a65a";
    // barChartData.datasets[1].strokeColor = "#00a65a";
    // barChartData.datasets[1].pointColor = "#00a65a";
    var barChartOptions = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - If there is a stroke on each bar
        barShowStroke: true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,
        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,
        //String - A legend template
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        //Boolean - whether to make the chart responsive
        responsive: true,
        maintainAspectRatio: true,
    };

    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);
}

function inicializarCharPedMes() {
    //-------------
    //- BAR CHART -
    //-------------
    var barChartCanvas = $("#barChartPedMes").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas);
    var barChartData = areaChartDataPedMes;
    // barChartData.datasets[1].fillColor = "#00a65a";
    // barChartData.datasets[1].strokeColor = "#00a65a";
    // barChartData.datasets[1].pointColor = "#00a65a";
    var barChartOptions = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - If there is a stroke on each bar
        barShowStroke: true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,
        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,
        //String - A legend template
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        //Boolean - whether to make the chart responsive
        responsive: true,
        maintainAspectRatio: true,
    };

    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);
}

function inicializarCharPedMontoMes() {
    //-------------
    //- BAR CHART -
    //-------------
    var barChartCanvas = $("#barChartPedMontoMes").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas);
    var barChartData = areaChartDataMontoPedMes;
    // barChartData.datasets[1].fillColor = "#00a65a";
    // barChartData.datasets[1].strokeColor = "#00a65a";
    // barChartData.datasets[1].pointColor = "#00a65a";
    var barChartOptions = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - If there is a stroke on each bar
        barShowStroke: true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,
        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,
        //String - A legend template
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        //Boolean - whether to make the chart responsive
        responsive: true,
        maintainAspectRatio: true,
    };

    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);
}

function inicializarCharTopClientes() {
    //-------------
    //- BAR CHART -
    //-------------
    var barChartCanvas = $("#barChartTopClientes").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas);
    var barChartData = areaChartDataTopClientes;
    // barChartData.datasets[1].fillColor = "#00a65a";
    // barChartData.datasets[1].strokeColor = "#00a65a";
    // barChartData.datasets[1].pointColor = "#00a65a";
    var barChartOptions = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,
        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth: 1,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
        //Boolean - If there is a stroke on each bar
        barShowStroke: true,
        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,
        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,
        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,
        //String - A legend template
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        //Boolean - whether to make the chart responsive
        responsive: true,
        maintainAspectRatio: true,
    };

    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);
}

inicializarCharTotalPed();
inicializarCharMontoPed();
// var fechamenu = fechaHoyMenu();

var fechamenu = fechaHoyMenu();



getPedidosCant = function(fechamenu) {
    var cantpedidos = 0;
    $.ajax({
        type: "GET",
        url: apiUrl + "estadisticas/pedidosTotalFechaPen/" + fechamenu,
        dataType: "json",
        data: {
            "<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
        },
        success: function(res) {
            $("#totalPedDia").empty();
            $("#totalPedDia").append(parseInt(res));
        },
        error: function(request, status, error) {
            console.log(error.message);
            //direccionar al login?
        },
    });
};

getPedidosCantMes = function(anio) {
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
        success: function(res) {
            console.log("Arreglo de mes");

            res.data.forEach((element) => {
                labels.push(element.Mes);
                montos.push(parseInt(element.Monto));
                total.push(parseInt(element.Total));
            });

            areaChartDataPedMes.labels = labels;
            areaChartDataMontoPedMes.labels = labels;

            areaChartDataPedMes.datasets[0].data = total;
            areaChartDataMontoPedMes.datasets[0].data = montos;
            inicializarCharPedMes();
            inicializarCharPedMontoMes();
        },
        error: function(request, status, error) {
            console.log(error.message);
            //direccionar al login?
        },
    });
};

getUsuariosTot = function() {
    var cantpedidos = 0;
    $.ajax({
        type: "GET",
        url: apiUrl + "estadisticas/usuariosTotal",
        dataType: "json",
        data: {
            "<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
        },
        success: function(res) {
            console.log(res);
            $("#usuariosTotal").empty();
            $("#usuariosTotal").append(parseInt(res));
        },
        error: function(request, status, error) {
            console.log(error.message);
            //direccionar al login?
        },
    });
};

getPedidosTotalMontoDia = function(mes, anio) {
    var cantpedidos = 0;
    $.ajax({
        type: "GET",
        url: apiUrl + "estadisticas/pedidosTotalMontoDia/" + mes + "/" + anio,
        dataType: "json",
        data: {
            "<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
        },
        success: function(res) {
            console.log(res);
        },
        error: function(request, status, error) {
            console.log(error.message);
            //direccionar al login?
        },
    });
};
getPedidosTotalDias = function(mes, anio) {
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
        success: function(res) {
            console.log("Arreglo de dias");
            res.data.forEach((element) => {
                labels.unshift(element.Dia);
                montos.unshift(parseInt(element.Monto));
                total.unshift(parseFloat(element.Total));
            });

            areaChartData.labels = labels;
            areaChartDataMonto.labels = labels;

            areaChartData.datasets[0].data = total;
            areaChartDataMonto.datasets[0].data = montos;
            inicializarCharTotalPed();
            inicializarCharMontoPed();
        },
        error: function(request, status, error) {
            console.log(error.message);
            //direccionar al login?
        },
    });
};

getPedidosTotaMontoMedioPlMes = function(mes, anio) {
    var cantpedidos = 0;
    $.ajax({
        type: "GET",
        url: apiUrl + "estadisticas/pedidosTotalMontoMedioPMes/" + mes + "/" + anio,
        dataType: "json",
        data: {
            "<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
        },
        success: function(res) {
            console.log(res);
        },
        error: function(request, status, error) {
            console.log(error.message);
            //direccionar al login?
        },
    });
};
getPedidosTotalMontoFecha = function(fecha) {
    $.ajax({
        type: "GET",
        url: apiUrl + "estadisticas/pedidosTotalMontoFecha/" + fecha,
        dataType: "json",
        data: {
            "<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
        },
        success: function(res) {
            $("#pedidosTotalMontoDia").empty();
            $("#pedidosTotalMontoDia").append(parseInt(res));
            console.log(res);
        },
        error: function(request, status, error) {
            console.log(error.message);
            //direccionar al login?
        },
    });
};
getPedidosTotaMontoMedioPDia = function(fecha) {
    var cantpedidos = 0;
    $.ajax({
        type: "GET",
        url: apiUrl + "estadisticas/pedidosTotalMontoMedioPFecha/" + fecha,
        dataType: "json",
        data: {
            "<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
        },
        success: function(res) {
            console.log(res);
            res.forEach((element) => {
                if (element.MedioPago == "PagoOnline") {
                    $("#pedidosMontoMp").empty();
                    $("#pedidosMontoMp").append(parseInt(element.Total));
                } else if (element.MedioPago == "Efectivo") {
                    $("#pedidosMontoEfec").empty();
                    $("#pedidosMontoEfec").append(parseInt(element.Total));
                } else if (element.MedioPago == "Debito") {
                    $("#pedidosMontoTarje").empty();
                    $("#pedidosMontoTarje").append(parseInt(element.Total));
                }
            });


        },
        error: function(request, status, error) {
            console.log(error.message);
            //direccionar al login?
        },
    });
};
getTopClienteMes = function(mes, anio) {
    var labels = [];

    var total = [];
    $.ajax({
        type: "GET",
        url: apiUrl + "estadisticas/clientesTopMes/" + mes + "/" + anio,
        dataType: "json",
        data: {
            "<?php echo $this->security->get_csrf_token_name(); ?>": "<?php echo $this->security->get_csrf_hash(); ?>",
        },
        success: function(res) {
            res.forEach((element) => {
                labels.push(element.Nombre);
                total.push(parseFloat(element.total));
            });

            areaChartDataTopClientes.labels = labels;

            areaChartDataTopClientes.datasets[0].data = total;

            inicializarCharTopClientes();
        },
        error: function(request, status, error) {
            console.log(error.message);
            //direccionar al login?
        },
    });
};

var f = new Date();
var anio = f.getFullYear();
var mes = f.getMonth() + 1;

getPedidosCant(fechamenu);
getUsuariosTot();
getPedidosTotalMontoDia(mes, anio);
getPedidosTotalMontoFecha(fechamenu);
getPedidosTotaMontoMedioPlMes(mes, anio);
getPedidosTotaMontoMedioPDia(fechamenu);
getTopClienteMes(mes, anio);
getPedidosCantMes(anio);
getPedidosTotalDias(mes, anio);