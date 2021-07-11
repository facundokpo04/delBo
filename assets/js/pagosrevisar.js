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




$("#txtFechaPago").change(function() {

    // var fecha = $('#txtFechaPago').val();
	var fecha = "2020-11-22";

    if (fecha) {
        tablaP.clear();
        tablaP.ajax.url(apiUrl + "estadisticas/pagosInconsitente/" + fecha).load();

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

$('#tblPagosRevisar').DataTable({
    "lengthMenu": [
        [6, 10, 15, -1],
        [5, 10, 15, "Todo"]
    ],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        // "url": apiUrl + "/estadisticas/pagosInconsitente/" + $('#txtFechaPago').val(),
		"url": apiUrl + "estadisticas/pagosInconsitente/" + "2020-11-22",
        "type": "GET",
        "dataType": 'json',
        "data": { '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>' },
    },
    'columns': [
        { data: 'pe_id', 'sClass': 'dt-body-center' },
        { data: 'pe_idEstadoPago' },
        { data: 'pe_idEstado' },
        { data: 'pe_fechaPedido' },
        { data: 'pago_id' },
        { data: 'pago_metodoPago' },
		{ data: 'pago_status' },
        { data: 'pago_monto' },
        { data: 'pago_email' },
        {
            "orderable": true,
            render: function(data, type, row) {

                return '<span class="pull-right" >' +
                    '<div class="dropdown">' +
                    '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                    '    Acciones' +
                    '  <span class="caret"></span>' +
                    '  </button>' +
                    '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                    '    <li><a href="#" onClick="cambiarAPagado(\'' + row.pe_id + '\');"><i style="color:#555;" class="fa fa-credit-card"></i> Cambiar a Pagado</a></li>' +
                    '    </ul>' +
                    '</div>' +
                    '</span>';
                // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';
            }

        }

    ],
    "columnDefs": [{
            "targets": [6],
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
			"targets": [1],
			"data": "pe_idEstadoPago",
			"render": function(data, type, row) {
				if (data == 8) {
					return "<span class='label label-info'>Pago en Destino</span>";
				} else if (data == 5) {
					return "<span class='label label-success'>Pago Aceptado</span>";
				} else if (data == 7) {
					return "<span class='label label-danger'>Pago Rechazado</span>";
				}

			}
		},
		{
			"targets": [2],
			"data": "pe_idEstado",
			"render": function(data, type, row) {
				if (data == 1) {
					return "<span class='label label-warning'>Pendiente</span>";
				} else if (data == 2) {
					return "<span class='label label-info'>Preparando</span>";
				} else if (data == 3) {
					return "<span class='label label-success'>Enviando</span>";
				} else if (data == 4) {
					return "<span class='label label-danger'>Cancelado</span>";
				}

			}
		},

        {
            "targets": [0],
            "data": "pe_id",
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

var tablaP = $('#tblPagosRevisar').DataTable();
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

cambiarAPagado = function(idPedido) {
	// $.ajax({
	// 	type: "POST",
	// 	url: baseurl + "index.php/pedido/updPedido/",
	// 	dataType: 'json',
	// 	data: {
	// 		'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
	// 		pe_id: idPedido,
	// 		pe_idEstado: 2
	// 	},
	// 	success: function(res) {
	// 		if (res.estado) {
	// 			swal({
	// 					title: "El Pedido cambio a Preparando!",
	// 					text: "haga click!",
	// 					type: "success",
	// 				},
	// 				function() {
	// 					//location.reload();
	// 					fechaHoy();
	// 					enviarEmail(idPedido, "Preparado");
	// 					enviarPush(idPedido);
	// 				});
	//
	// 		} else {
	// 			sweetAlert("Oops...", "Error al cambiar el Estado del Pedido!", "error");
	// 			console.log(res.response)
	// 		}
	// 	},
	// 	error: function(request, status, error) {
	// 		sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
	// 		console.log(error.message);
	//
	// 	}
	// });


};

