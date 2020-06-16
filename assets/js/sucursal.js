function VerForm() {
    $("#sucursal").show(); // Mostramos el formulario
    $("#herramientas").hide(); // ocultamos el boton nuevo
    $("#sucursales").hide();
}


function OcultarForm() {
    $("#sucursal").hide(); // Mostramos el formulario
    $("#herramientas").show(); // ocultamos el boton nuevo
    $("#sucursales").show();
}

function VerFormAgregar() {
    $("#sucursal").show(); // Mostramos el formulario
    $("#paneles").hide();
    $("#panelCont").hide();
    $("#herramientas").hide(); // ocultamos el boton nuevo
    $("#sucursales").hide();


}



function cargarParametros(idSucursal) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/sucursal/get_ParametroById/" + idSucursal,
        dataType: 'json',
        data: { '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>' },
        success: function(res) {
            if (res.estado) {
                $('#txtZonaE').val(res.response.data.par_zonaEntrega);
                $('#txtPedidoM').val(res.response.data.par_pedidoMinimo);
                $('#txtCostoE').val(res.response.data.par_costoEnvio);
                $('#rangepm').val(res.response.data.par_pedidoMinimo);
                $('#txtTiempoE').val(res.response.data.par_tiempoEntrega);
                $('#rangete').val(res.response.data.par_tiempoEntrega);
            } else {
                sweetAlert("Oops...", res.response, "error");
                console.log(res.response);
            }

        },
        error: function(request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error.message);

        }
    });
}

function actualizarParametros(idSucursal) {
    debugger;
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/sucursal/updParametro/" + idSucursal,
        dataType: 'json',
        data: {
            '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            par_zonaEntrega: $('#txtZonaE').val(),
            par_pedidoMinimo: $('#txtPedidoM').val(),
            par_tiempoEntrega: $('#txtTiempoE').val(),
            par_costoEnvio: $('#txtCostoE').val()
        },
        success: function(res) {
            debugger;
            if (res.estado) {
                swal({
                        title: "Los Datos Fueron Guardados!",
                        text: "haga click!",
                        type: "success",
                    },
                    function() {

                        //                            location.reload();
                    });
            } else {
                debugger;
                sweetAlert("Oops...", JSON.stringify(res.response), "error");
                console.log(res.response);
            }



        },
        error: function(request, status, error) {
            debugger;
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error);

        }
    });


}

function actualizarHorarios() {

    var exito = true;
    $('#tablahorario tbody tr').each(function() {


        if ($(this).find('td').length > 0) {
            var dh_id = $(this).find('td').eq(0).html();
            var dh_diaSemana = $(this).find('td').eq(1).find("select").val();
            var dh_horaApertura = $(this).find('td').eq(2).find("input").eq(0).val();
            var dh_horaCierre = $(this).find('td').eq(3).find("input").eq(0).val();
            debugger;
            $.ajax({
                type: "POST",
                url: baseurl + "index.php/sucursal/updDiahorario",
                dataType: 'json',
                data: {
                    '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
                    dh_diaSemana: dh_diaSemana,
                    dh_horaApertura: dh_horaApertura,
                    dh_horaCierre: dh_horaCierre,
                    dh_idSucursal: $('#idSucursal').val(),
                    dh_id: dh_id
                },
                success: function(res) {
                    debugger;
                    if (!res.estado) {
                        exito = false;

                    }


                },
                error: function(request, status, error) {
                    debugger;
                    exito = false;
                    console.log(error.message);

                }
            });

        }


    });

    if (exito) {
        swal({
                title: "Informacion",
                text: "Se Actualizaron los Horarios",
                type: "success",
            },
            function() {

            });
    } else {
        sweetAlert("Oops...", "No se pudo actualizar los horarios", "error");
    }
}

$('#mCerrarModal').click(function() {

    $('#mDescripcion').val('');
    $('#mNombre').val('');
    $('#mEstado').val('1'); //select
    //ajax para traer todos los estados
    $('#mIdCategoria').val('');
})






function actualizarSucursal() {
    debugger;
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/sucursal/updsucursal",
        dataType: 'json',
        data: {
            '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            suc_nombre: $('#txtNombre').val(),
            suc_cuit: $('#txtCuit').val(),
            suc_razonSocial: $('#txtRazonSocial').val(),
            suc_direccion: $('#txtDomicilio').val(),
            suc_id: $('#idSucursal').val()
        },
        success: function(res) {
            debugger;
            if (res.estado) {
                debugger;
                actualizarParametros($('#idSucursal').val());
            } else {
                sweetAlert("Oops...", JSON.stringify(res.response), "error");
                console.log(res.response);
            }

        },
        error: function(request, status, error) {
            debugger;
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error);

        }
    });
}

$('#mbtnUpdSucursal').click(function() {
    debugger;
    actualizarSucursal();


});

$('#guardarHor').click(function() {

    actualizarHorarios();


});


function cargarHorarios(idSucursal) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/sucursal/get_HorariosById/" + idSucursal,
        dataType: 'json',
        data: { '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>' },
        success: function(res) {

            if (res.estado) {
                for (var i = 0; i < res.response.data.length; i++) {

                    $('#tablahorario tbody tr:last').after('<tr class="fila-base">' +
                        ' <td>' +
                        res.response.data[i].dh_id +
                        '</td>' +
                        ' <td>' +
                        '  <select style="width: 90%" class="form-control" id="dia' + res.response.data[i].dh_id + '">' +
                        '  <option value="1">Lunes</option>' +
                        '  <option value="2">Martes</option>' +
                        '  <option value="3">Miercoles</option>' +
                        '  <option value="4">Jueves</option>' +
                        '  <option value="5">Viernes</option>' +
                        '  <option value="6">Sabado</option>' +
                        '  <option value="0">Domingo</option>' +
                        '  </select>' +
                        '  </td>' +
                        '  <td> <div  class="input-append datetimepicker">' +
                        '  <input id="horaApertura' + res.response.data[i].dh_id + '" data-format="hh:mm:ss" type="text" style="width: 90%"></input>' +
                        '  <span class="add-on">' +
                        '  <i class="fa fa-clock-o"></i>' +
                        '  </span>' +
                        '  </div>' +
                        '  </div>' +
                        '  </td>' +
                        '  <td>' +
                        '  <div  class="input-append datetimepicker">' +
                        '  <input id="horaCierre' + res.response.data[i].dh_id + '" data-format="hh:mm:ss" type="text" style="width: 90%"></input>' +
                        '  <span class="add-on">' +
                        '  <i class="fa fa-clock-o"></i>' +
                        '  </span>' +
                        '  </div>' +
                        '  </div>' +
                        '  </td>' +
                        '  <td class="eliminar"><a href="#"  onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i></a></td>' +
                        '  </tr>');

                    $('#dia' + res.response.data[i].dh_id).val(res.response.data[i].dh_diaSemana);
                    $('#horaApertura' + res.response.data[i].dh_id).val(res.response.data[i].dh_horaApertura);
                    $('#horaCierre' + res.response.data[i].dh_id).val(res.response.data[i].dh_horaCierre);




                }
                $('.datetimepicker').datetimepicker({
                    pickDate: false,
                    pickSeconds: false,
                    format: "hh:mm",
                    pick12HourFormat: false
                });

            } else {
                sweetAlert("Oops...", JSON.stringify(res.response), "error");
                console.log(res.response);
            }
        },
        error: function(request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error);
        }
    });


}

OcultarForm();
$('.datetimepicker').datetimepicker({
    pickDate: false,
    pickSeconds: false,
    format: "hh:mm",
    pick12HourFormat: false
});



$("#agregar").on('click', function() {
    $('#tablahorario tr:last').after(' <tr class="fila-base">' +
        '<td>' +
        '</td>' +
        ' <td>' +
        '  <select style="width: 90%" class="form-control>' +
        '  <option value="1">Lunes</option>' +
        '  <option value="2">Martes</option>' +
        '  <option value="3">Miercoles</option>' +
        '  <option value="4">Jueves</option>' +
        '  <option value="5">Viernes</option>' +
        '  <option value="6">Sabado</option>' +
        '  <option value="0">Domingo</option>' +
        '  </select>' +
        '  </td>' +
        '  <td> <div  class="input-append datetimepicker">' +
        '  <input  data-format="hh:mm:ss" type="text" style="width: 90%"></input>' +
        '  <span class="add-on">' +
        '  <i class="fa fa-clock-o"></i>' +
        '  </span>' +
        '  </div>' +
        '  </div>' +
        '  </td>' +
        '  <td>' +
        '  <div  class="input-append datetimepicker">' +
        '  <input data-format="hh:mm:ss" type="text" style="width: 90%"></input>' +
        '  <span class="add-on">' +
        '  <i class="fa fa-clock-o"></i>' +
        '  </span>' +
        '  </div>' +
        '  </div>' +
        '  </td>' +
        //            '  <td class="eliminar"><a href="#"  onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i></a></td>' +
        '  </tr>');

    $('.datetimepicker').datetimepicker({
        pickDate: false,
        pickSeconds: false,
        format: "hh:mm",
        pick12HourFormat: false
    });
});

// Evento que selecciona la fila y la elimina 
$(document).on("click", ".eliminar", function() {
    var parent = $(this).parents().get(0);
    $(parent).remove();
});

$('#tbSucursales').DataTable({
    "lengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "Todo"]
    ],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/sucursal/get_sucursales/1",
        "type": "POST",
        "dataType": 'json',
        "data": { '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>' },

    },
    error: function(request, status, error) {
        debugger;
        console.log(error.message);

    },

    'columns': [

        { data: 'suc_id', 'sClass': 'dt-body-center' },
        { data: 'suc_nombre' },
        { data: 'suc_cuit' },
        { data: 'suc_razonSocial' },
        { data: 'suc_direccion' },
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
                    '    <li><a href="#" title="Editar informacion"   onClick="cargarDataSucursal(\'' + row.suc_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                    '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
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
            "data": "suc_nombre",
            "orderData": [1, 0],
            "render": function(data, type, row) {
                return "<span style='color:#006699;'><i class='fa fa-home'></i>&nbsp;&nbsp;" + data + "</span>"

            }
        },
    ],
    "order": [
        [0, "asc"]
    ],
});


function cargarDataSucursal(idSucursal) { // funcion que llamamos del archivo ajax/CategoriaAjax.php linea 52
    VerForm();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/sucursal/get_sucursalById/" + idSucursal,
        dataType: 'json',
        data: { '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>' },
        success: function(res) {

            if (res.estado) {
                $('#txtNombre').val(res.response.data.suc_nombre);
                $('#txtRazonSocial').val(res.response.data.suc_razonSocial);
                $('#txtCuit').val(res.response.data.suc_cuit); //select
                //ajax para traer todos los estados
                $('#txtDomicilio').val(res.response.data.suc_direccion);
                $('#idSucursal').val(res.response.data.suc_id); //select
            } else {
                sweetAlert("Oops...", res.response, "error");
                console.log(res.response);
            }

        },
        error: function(request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error);
        }

    });
    cargarParametros(idSucursal);
    cargarHorarios(idSucursal);


}

function eliminarSucursal(idSucursal) {

    //no dejar que eliminen sucursal.

    //    $.ajax({
    //        type: "POST",
    //        url: baseurl + "index.php/sucursal/eliminar/" + idSucursal,
    //        dataType: 'json',
    //        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
    //        success: function (res) {
    //            window.location.reload(true);
    //
    //        }
    //    });
}

$('#btnAgregarSuc').click(function() {
    VerFormAgregar();

})


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */