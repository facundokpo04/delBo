
var dp = $('#txtFechaPedido').datepicker({
    autoclose: true,
    format: 'yyyy-mm-dd'
}).datepicker("setDate", new Date());


function VerForm() {
    $("#pedido").show();// Mostramos el formulario
    $("#pedidos").hide();
}


function OcultarForm() {
    $("#pedido").hide();// Mostramos el formulario
    $("#pedidos").show();
}
function fechaHoy(){
    debugger;
     dp.datepicker("setDate", new Date());
     var fecha = $('#txtFechaPedido').val();

    if (fecha) {
        debugger;
        tablaP.ajax.url(baseurl + "index.php/pedido/get_pedidosFecha/" + fecha).load();

    }
}

OcultarForm();


$('#tblPedidos').DataTable({
    "lengthMenu": [[6, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/pedido/get_pedidos/",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
    },
    'columns': [
        {data: 'pe_id', 'sClass': 'dt-body-center'},
        {data: 'pe_idEstado'},
        {data: 'per_nombre'},
        {data: 'pe_cli_tel'},
        {data: 'dir_direccion'},
        {data: 'dir_telefonoFijo'},
        {data: 'pe_idEmpleado'},
        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" onClick="cambiarAPreparado(\'' + row.pe_id + '\');"><i style="color:#555;" class="fa fa-fw fa-cutlery"></i>Preparando Pedido</a></li>' +
                        '    <li><a href="#" title="Cambiar Estado" data-toggle="modal" data-target="#modalEnviarPedido" onClick="selPedidoEnviar(\'' + row.pe_id + '\');"><i style="color:#555;" class="fa fa-fw fa-motorcycle"></i>Enviando Pedido</a></li>' +
                        '    <li><a href="#" title="Cambiar Estado" data-toggle="modal" data-target="#modalCancelarPedido" onClick="selPedidoCancelar(\'' + row.pe_id + '\',\'' + row.pe_idEstado + '\');"><i style="color:#555;" class="fa fa-fw fa-close"></i>Cancelar Pedido</a></li>' +
                        '    <li><a href="#" onClick="selPedido(\'' + row.pe_id + '\',\'' + row.pe_idEmpleado + '\');"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver Pedido</a></li>' +
                        '    </ul>' +
                        '</div>' +
                        '</span>';
                // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';


            }

        }

    ],
    "columnDefs": [
        {
            "targets": [1],
            "data": "pe_idEstado",
            "render": function (data, type, row) {

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
            "render": function (data, type, row) {
                return '<a href="pedido/verDetalle/' + data + '">PED' + data + '</a>'

            }
        },
    ],
    "order": [[0, "asc"]],
});

var tablaP = $('#tblPedidos').DataTable();
fechaHoy();
tablaP.search('').columns().search('').draw();

cambiarAPreparado = function (idPedido) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/updPedido/",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            pe_id: idPedido,
            pe_idEstado: 2
        },
        success: function (res) {
            if (res.estado) {
                swal({
                    title: "El Pedido cambio a Preparando!",
                    text: "haga click!",
                    type: "success",
                },
                        function () {
                            location.reload();
                        });

            } else {
                sweetAlert("Oops...", "Error al cambiar el Estado del Pedido!", "error");
                console.log(res.response)
            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error.message);

        }
    });


};
cambiarAEnviado = function (idPedido, idEmpleado) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/updPedido/",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            pe_id: idPedido,
            pe_idEstado: 3,
            pe_idEmpleado: idEmpleado

        },
        success: function (res) {
            if (res.estado) {
                swal({
                    title: "El Pedido cambio a Enviando!",
                    text: "haga click!",
                    type: "success",
                },
                        function () {
                            location.reload();
                        });

            } else {
                sweetAlert("Oops...", "Error al cambiar el Estado del Pedido!", "error");
                console.log(res.response)
            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error.message);

        }
    });

};

cancelarPedido = function (idPedido, motivo) {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/updPedido/",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            pe_id: idPedido,
            pe_idEstado: 4,
            pe_motivoCancelado: motivo

        },
        success: function (res) {
            if (res.estado) {
                swal({
                    title: "El Pedido cambio a Cancelado!",
                    text: "haga click!",
                    type: "success",
                },
                        function () {
                            location.reload();
                        });

            } else {
                sweetAlert("Oops...", "Error al cambiar el Estado del Pedido!", "error");
                console.log(res.response)
            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error.message);

        }
    });

};

getCliente = function (idpedido) {
    $('#cliente').empty();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/getCliente/" + idpedido,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            if (res.estado) {
                $('#cliente').append('<strong>' + res.response.per_nombre + '</strong><br>Direccion: ' +
                        res.response.dir_direccion +
                        '<br>Telefono: ' +
                        res.response.per_celular +
                        '<br>' +
                        'Email: ' +
                        res.response.per_email);

                $('#cliente2').append('<strong>' + res.response.per_nombre + '</strong><br>Direccion: ' +
                        res.response.dir_direccion +
                        '<br>Telefono: ' +
                        res.response.per_celular);
            } else {
                sweetAlert("Oops...", "Error al Obtner el Cliente!", "error");
                console.log(res.response)
            }

        },
        error: function (request, status, error) {
            console.log(error.message);
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");

        }
    });

}

getEmpleado = function (idEmpleado) {
    $('#empleadoP').empty();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/empleado/get_empleadoById/" + idEmpleado,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            if (res.estado) {
                $('#empleadoP').append('Empleado:<br>' +
                        '<b>Empleado ID :</b>' + res.response.emp_id + '<br>' +
                        '<b>Nombre : </b>' + res.response.per_nombre + '<br>' +
                        '<b>Legajo: </b>' + res.response.emp_legajo + '<br>' +
                        '<b>Cargo: </b>' + res.response.emp_cargo
                        );

            } else {
                sweetAlert("Oops...", "Error al Obtner el Empleado!", "error");
                console.log(res.response)
            }

        },
        error: function (request, status, error) {
            console.log(error.message);
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");

        }
    });

}
getPedido = function (idpedido) {
    $('#pedidoE').empty();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/getPedido/" + idpedido,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            if (res.estado) {
                $('#pedidoE').append(' <b>Pedido #PED' + res.response.pe_id + '</b><br>' +
                        '<b>Pedido ID:</b>' + res.response.pe_id + '<br>' +
                        '<b>Fecha Pedido:</b>' + getFecha(res.response.pe_fechaPedido) + '<br>' +
                        '<b>Hora Pedido:</b>' + getHora(res.response.pe_fechaPedido) + '<br>' +
                        '<b>Estado:</b>' + res.response.descripcion + '<br>' +
                        '<b>Metodo Pago:</b>' + res.response.pe_medioPago);

                $('#fechaP').text("Fecha Pedido: " + getFecha(res.response.pe_fechaPedido));
                $('#aclaracionP').text(res.response.pe_aclaraciones);
            } else {
                sweetAlert("Oops...", "Error al Obtener el Encabezado del Pedido!", "error");
                console.log(res.response)
            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error.message);

        }
    });

}
cargarEmpleados = function () {
    $("#mRepartidor option").remove();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/empleado/get_empleados/1",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            $.each(res.data, function (key, data) {
                ;
                $("#mRepartidor").append("<option value=" + data.emp_id + ">" + data.per_nombre + '-' + data.emp_cargo + "</option>");
            });
        },
        error: function (request, status, error) {
            console.log(error.message);

        }

    });
}

cargarDetalle = function (idPedido) {

    $('#tbProductos tbody').empty()
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/get_detalleById/" + idPedido,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            if (res.estado) {
                res.response.forEach(function (item) {

                    $('#tbProductos tbody').append('<tr>' +
                            ' <td>' +
                            item.producto.dp_Cantidad +
                            ' </td>' +
                            ' <td>' +
                            item.producto.prod_codigoProducto +
                            ' </td>' +
                            ' <td><strong>' +
                            item.producto.prod_nombre + '-' + item.producto.var_nombre +
                            '</td><strong>' +
                            ' <td>' +
                            item.producto.pp_aclaracion +
                            ' </td>' +
                            ' <td>' + '$&nbsp;' +
                            item.producto.dp_PrecioUnitario +
                            '</tr>'
                            );
                    item.componentes.forEach(function (comp) {

                        $('#tbProductos tbody').append('<tr>' +
                                ' <td>' +
                                1 +
                                ' </td>' +
                                ' <td>' +
                                ' </td>' +
                                ' <td>' +
                                comp.com_nombre +
                                ' </td>' +
                                ' <td>' +
                                '' +
                                ' </td>' +
                                ' <td>' + '$&nbsp;' +
                                comp.com_precio +
                                '</tr>'
                                );

                    });

                });
            } else {
                sweetAlert("Oops...", "Error al Obtener el Detalle del Pedido!", "error");
                console.log(error.message);

            }

        },
        error: function (request, status, error) {
            console.log(error.message);
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");

        }





    });

}

cargarDetallePromo = function (idPedido) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/get_detallePromoById/" + idPedido,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            if (res.estado) {
                debugger;

                if (res.response instanceof Array)
                    res.response.forEach(function (item) {

                        $('#tbProductos tbody').append('<tr>' +
                                ' <td>' +
                                item.promo.ppro_cantidad +
                                ' </td>' +
                                ' <td>' +
                                '-' +
                                ' </td>' +
                                ' <td><strong>' +
                                item.promo.ppro_nombre +
                                '</strong></td>' +
                                ' <td>' +
                                item.promo.ppro_aclaracion +
                                ' </td>' +
                                ' <td>' + '$&nbsp;' +
                                item.promo.ppro_total +
                                '</tr>'
                                );
                        item.productos.forEach(function (prod) {

                            $('#tbProductos tbody').append('<tr>' +
                                    ' <td>' +
                                    '-' +
                                    ' </td>' +
                                    ' <td>' +
                                    '' +
                                    ' </td>' +
                                    ' <td>' +
                                    prod.prod_nombre + '-' + prod.var_nombre +
                                    '</td>' +
                                    ' <td>' +
                                    prod.pp_aclaracion +
                                    ' </td>' +
                                    ' <td>' + '-' +
                                    '</tr>'
                                    );

                        });

                    });





            } else {
                sweetAlert("Oops...", "Error al Obtener el Detalle del Pedido!", "error");
                console.log(error.message);

            }

        },
        error: function (request, status, error) {
            console.log(error.message);
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");

        }





    });

}
fechaActual = function () {
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    return(d + "/" + m + "/" + y);

}

getFecha = function (fecha) {
    n = new Date(fecha);
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    return(d + "/" + m + "/" + y);

}

getFechafiltro = function (fecha) {
    n = new Date(fecha);
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    return(y + "-" + m + "-" + d);

}
getHora = function (fecha) {
    n = new Date(fecha);
    h = n.getHours();
    m = n.getMinutes();

    return(h + ":" + m);

}
selPedido = function (idpedido, idempleado) {
    VerForm();
    getCliente(idpedido);
    getPedido(idpedido);
    getEmpleado(idempleado);
    cargarDetalle(idpedido);
    cargarDetallePromo(idpedido);
    $('#date').text(fechaActual());

};
selPedidoEnviar = function (idpedido) {


    cargarEmpleados();
    $('#midPedido').val(idpedido);
    debugger;


};

selPedidoCancelar = function (idpedido, idEstado) {

    $('#midcPedido').val(idpedido);
    $('#midEPedido').val(idEstado);
    $('#mMotivo').val('');
};

$('#mbtnEnviarPedido').click(function () {

    var idPedido = $('#midPedido').val();
    var idEmpleado = $('#mRepartidor').val();
    cambiarAEnviado(idPedido, idEmpleado);





})

$('#mbtnCancelarPedido').click(function () {

    var idPedido = $('#midcPedido').val();
    var motivo = $('#mMotivo').val();
    var estadoPedido = $('#midEPedido').val();

    swal({
        title: "Esta seguro?",
        text: "Se Cancelara el Pedido",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Si, Cancelar !",
        cancelButtonText: "No, Volver!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
            function (isConfirm) {
                debugger;
                if (isConfirm) {

                    if (estadoPedido == 2 || estadoPedido == 3) {
                        swal("Atencion", "No se puede cancelar un pedido que esta siendo Enviado/Preparado", "error");

                    } else {
                        cancelarPedido(idPedido, motivo);
                    }
                } else {
                    swal("Volver", "EL Pedido No Fue Cancelado", "error");
                    location.reload();
                }
            });

})

$("#selEst").change(function () {
    if ($('#selEst').val() != 0) {
        tablaP.columns(1).search($('#selEst').val().trim());//hit search on server
        tablaP.draw();
    } else {

        tablaP.search('').columns().search('').draw();
    }
})

$("#txtFechaPedido").change(function () {
    debugger;
    var fecha = $('#txtFechaPedido').val();

    if (fecha) {
        debugger;
        tablaP.ajax.url(baseurl + "index.php/pedido/get_pedidosFecha/" + fecha).load();

    }
//   tablaP.ajax.url(baseurl + "index.php/producto/get_pedidosFecha/"+fecha).load();
})