onload = function() {
    fechaHoy();


}

var dp = $('#txtFechaPago').datepicker({
    autoclose: true,
    format: 'yyyy-mm-dd',
    closeText: 'Cerrar',
    prevText: '<Ant',
    nextText: 'Sig>',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá']
}).datepicker("setDate", new Date());

var apiUrl = apiurl;


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
			console.log(res);
			res.forEach((element) => {
				if (element.MedioPago == "8") {

				} else if (element.MedioPago == "5") {
					$("#pedidosPagoOnline").empty();
					$("#pedidosPagoOnline").append(parseInt(element.Total));
				}

			});


		},
		error: function (request, status, error) {
			console.log(error.message);
			//direccionar al login?
		},
	});
};

$("#txtFechaPago").change(function() {

    var fecha = $('#txtFechaPago').val();

    if (fecha) {
		getPagosTotal(fecha);
		getPedidosTotaMontoMedioPDia(fecha);
        tablaP.clear();
        tablaP.ajax.url(baseurl + "index.php/pago/get_PagosFecha/" + fecha).load();

    }
    //   tablaP.ajax.url(baseurl + "index.php/producto/get_pedidosFecha/"+fecha).load();
});


function fechaHoy() {

    dp.datepicker("setDate", new Date());

}


// $("#txtFechaPedido").change(function() {

//     var fecha = $('#txtFechaPedido').val();

//     if (fecha) {
//         tablaP.clear();
//         tablaP.ajax.url(baseurl + "index.php/pedido/get_pedidosFecha/" + fecha).load();

//     }
//     //   tablaP.ajax.url(baseurl + "index.php/producto/get_pedidosFecha/"+fecha).load();
// })

$('#tblPagos').DataTable({
    "lengthMenu": [
        [6, 10, 15, -1],
        [5, 10, 15, "Todo"]
    ],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/pago/get_PagosFecha/" + $('#txtFechaPago').val(),
        "type": "POST",
        "dataType": 'json',
        "data": { '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>' },
    },
    'columns': [
        { data: 'pago_idPedido', 'sClass': 'dt-body-center' },
        { data: 'pago_metodoPago' },
        { data: 'pago_status' },
        { data: 'pago_fecha_pedido' },
        { data: 'pago_monto' },
        { data: 'pago_payment_method_id' },
        { data: 'pago_payment_type_id' },
        { data: 'pago_card_dni' },
        { data: 'pago_card_nombre' },
		{ data: 'pago_idPayament' }

        // {
        //     "orderable": true,
        //     render: function(data, type, row) {

        //         return '<span class="pull-right" >' +
        //             '<div class="dropdown">' +
        //             '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
        //             '    Acciones' +
        //             '  <span class="caret"></span>' +
        //             '  </button>' +
        //             '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
        //             '    <li><a href="#" onClick="selPedido(\'' + row.pe_id + '\',\'' + row.pe_idEmpleado + '\');"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver Pedido</a></li>' +
        //             '    <li><a href="#" onClick="cambiarAPreparado(\'' + row.pe_id + '\');"><i style="color:#555;" class="fa fa-fw fa-cutlery"></i>Preparando Pedido</a></li>' +
        //             '    <li><a href="#" title="Cambiar Estado" data-toggle="modal" data-target="#modalEnviarPedido" onClick="selPedidoEnviar(\'' + row.pe_id + '\');"><i style="color:#555;" class="fa fa-fw fa-motorcycle"></i>Enviando Pedido</a></li>' +
        //             '    <li><a href="#" title="Cambiar Estado" data-toggle="modal" data-target="#modalCancelarPedido" onClick="selPedidoCancelar(\'' + row.pe_id + '\',\'' + row.pe_idEstado + '\');"><i style="color:#555;" class="fa fa-fw fa-close"></i>Cancelar Pedido</a></li>' +
        //             '    </ul>' +
        //             '</div>' +
        //             '</span>';
        //         // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';


        //     }

        // }

    ],
    "columnDefs": [{
            "targets": [2],
            "data": "pago_status",
            "render": function(data, type, row) {
                if (data == 'approved') {
                    return "<span class='label label-success'>Aprobado</span>";
                } else if (data == 'rejected') {
                    return "<span class='label label-success'>Rechazado</span>";
                }

            }
        },

        {
            "targets": [0],
            "data": "pago_fecha_pedido",
            "orderData": [1, 0],
            "render": function(data, type, row) {

                return '<a> #PED' + data + '</a>'

            }
        },
        {
            "targets": [3],
            "data": "pe_fechaPedido",
            "orderData": [1, 0],
            "render": function(data, type, row) {

                return getFecha(data);

            }
        },
    ],

    "order": [
        [0, "asc"]
    ],
});

var tablaP = $('#tblPagos').DataTable();
fechaHoy();
tablaP.search('').columns().search('').draw();



fechaActual = function() {
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    return (d + "/" + m + "/" + y);

}

getFecha = function(fecha) {
    n = new Date(fecha);
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    return (d + "/" + m + "/" + y);

}

getFechafiltro = function(fecha) {
    n = new Date(fecha);
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    return (y + "-" + m + "-" + d);

}
getHora = function(fecha) {
    n = new Date(fecha);
    h = n.getHours();
    m = n.getMinutes();


    return (h + ":" + (m > 9 ? m : "0" + m));

}


$("#selEst").change(function() {
    if ($('#selEst').val() != 0) {
        tablaP.columns(1).search($('#selEst').val().trim()); //hit search on server
        tablaP.draw();
    } else {

        tablaP.search('').columns().search('').draw();
    }
});
