
function VerForm() {
    $("#pedido").show();// Mostramos el formulario
    $("#pedidos").hide();
}


function OcultarForm() {
    $("#pedido").hide();// Mostramos el formulario
    $("#pedidos").show();
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
        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Cambiar Estado" data-toggle="modal" data-target="#" onClick="selPedido(\'' + row.pe_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i>Estado</a></li>' +
                        '    <li><a href="#" onClick="selPedido(\'' + row.pe_id + '\')><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver Pedido</a></li>' +
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
                    return "<span class='label label-succes'>Enviado</span>";
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

getCliente = function (idpedido) {
    $('#cliente').empty();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/getCliente/" + idpedido,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            $('#cliente').append('<strong>' + res.per_nombre + '</strong><br>Direccion: ' +
                    res.dir_direccion +
                    '<br>Telefono: ' +
                    res.per_celular +
                    '<br>' +
                    'Email: ' +
                    res.per_email);

        },
        error: function (request, status, error) {
            console.log(error.message);

        }
    });

}
getPedido = function (idpedido) {

//        <b>Pedido #007612</b><br>
//        <br>
//        <b>Pedido ID:</b> 4F3S8J<br>
//        <b>Fecha Pedido:</b> 2/22/2014<br>
//        <b>Estado:</b> Pendiente<br>
//        <b>Metodo Pago:</b> Efectivo
    $('#pedidoE').empty();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/getPedido/" + idpedido,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            $('#pedidoE').append(' <b>Pedido #PED' + res.pe_id + '</b><br>' +
                    '<b>Pedido ID:</b>' + res.pe_id + '<br>' +
                    '<b>Fecha Pedido:</b> 2/22/2014<br>' +
                    '<b>Estado:</b>' + res.descripcion + '<br>' +
                    '<b>Metodo Pago:</b>' + res.pe_medioPago);

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

            res.forEach(function (item) {

                $('#tbProductos tbody').append('<tr>' +
                        ' <td>' +
                        item.producto.dp_Cantidad +
                        ' </td>' +
                        ' <td>' +
                        item.producto.prod_codigoProducto +
                        ' </td>' +
                        ' <td>' +
                        item.producto.prod_nombre +
                        ' -Grande </td>' +
                        ' <td>' +
                        'Sin aceitunas' +
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

        },
        error: function (request, status, error) {
            console.log(error.message);

        }





    });
}

selPedido = function (idpedido) {
    VerForm();

    getCliente(idpedido);
    getPedido(idpedido);
    cargarDetalle(idpedido);

};
