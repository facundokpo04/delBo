
$('#txtFechaInicio').datepicker({
    autoclose: true,
    format: 'dd/mm/yyyy'
});
$('#txtFechaFin').datepicker({
    autoclose: true,
    format: 'dd/mm/yyyy'
});

var cantpromodal = 0;



function VerForm() {
    $("#promo").show();// Mostramos el formulario
    $("#herramientas").hide();// ocultamos el boton nuevo
    $("#promos").hide();
    $("#estadodiv").show();


}

function OcultarForm() {
    $("#promo").hide();// Mostramos el formulario
    $("#herramientas").show();// ocultamos el boton nuevo
    $("#promos").show();
}

function VerFormAgregar( ) {
    $("#promo").show();// Mostramos el formulario
    $("#paneles").hide();
    $("#panelCont").hide();
    $("#herramientas").hide();// ocultamos el boton nuevo
    $("#promos").hide();
    $("#estadodiv").hide();


}
//modal productos
function limpiarModal() {
    $("#msj p").empty();
    $("#msj").hide();
    cantpromodal = 0;


}
function AbrirModalProductos() {
    $("#modalAgregarProductos").modal("show");
}
function cerrarModalProductos() {
    $("#modalAgregarProductos").modal("hide");
    cargarProductos($('#idPromo').val());

}

function agregarProd(idProd) {
    var idPromo = $('#idPromo').val();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/promo/updProducto",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            ppro_idPromo: idPromo,
            ppro_idProducto: idProd
        },
        success: function (res) {
            if (res.estado) {
                swal("El Producto fue Agregado!", "haga click!", "success")
                cantpromodal++;
                $("#msj p").html("<strong>" + cantpromodal + " Producto Agregado</strong>")
                $("#msj").show();
            } else {
                sweetAlert("Oops...", "Ocurrio Algun Error!", "error");
            }
        },
        error: function (request, status, error) {
            console.log(error.message);
            sweetAlert("Oops...", "Ocurrio Algun Error!", "error");

        }
    });







}
function agregarFilaProducto(id, nombre, descripcion, precio) {

    $('#tblProductos tbody').append('<tr>' +
            ' <td>' +
            id +
            ' </td>' +
            ' <td>' +
            nombre +
            ' </td>' +
            ' <td>' +
            descripcion +
            ' </td>' +
            ' <td>' + '$&nbsp;' +
            precio +
            ' </td>' +
            ' <td class="eliminarProd"><a href="#"  onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i></a></td>' +
            '</tr>'
            );

}
function cargarFCategorias() {
    $("#selCat option").remove();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/get_categorias",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            if (res.estado) {
                $.each(res.response, function (key, data) {

                    $("#selCat").append("<option value=" + data.cat_id + ">" + data.cat_nombre + "</option>");
                });
            } else {

                console.log(res.response)
            }


        },
        error: function (request, status, error) {
            console.log(error.message);

        }

    });
}
function actualizarTablaCat(idCat) {
    debugger;
    if (idCat == 0) {
        table2.ajax.url(baseurl + "index.php/producto/get_Productos/4").load()

    } else {
        table2.ajax.url(baseurl + "index.php/producto/get_ProductosCat/" + idCat).load()
    }


}
function cargarProductos(idPromo) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/promo/get_ProductosById/" + idPromo,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            if (res.estado) {
                debugger;

                $('#tblProductos tbody tr').remove();
                $.each(res.response, function (key, data) {

                    agregarFilaProducto(data.ppro_id, data.prod_nombre, data.prod_descripcionProducto, data.prod_precioBase);


                });
            } else {
                console.log(res.response)
            }
        },
        error: function (request, status, error) {
            console.log(error.message);

        }
    });
}
function actualizarTablaProd(idpromo) {
    table.ajax.url(baseurl + "index.php/promo/get_Promos/" + idpromo).load()
}

// promo
function cargarDataPromo(idPromo) {// funcion que llamamos del archivo ajax/CategoriaAjax.php linea 52
    VerForm();

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/promo/get_promoById/" + idPromo,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            if (res.estado) {
                $('#txtNombre').val(res.response.pro_nombre);
                $('#txtDescripcion').val(res.response.pro_descripcion);

                //ajax para traer todos los estados
                $('#txtPrecio').val(res.response.pro_precio);
                $('#txtDescuento').val(res.response.pro_descuento);
                $('#txtFechaInicio').val(res.response.pro_FechaInicio);
                $('#txtFechaFin').val(res.response.pro_FechaFin);
                $('#imagen').attr('src', './assets/imagenes/promos/' + res.response.pro_imagen);
                $('#idPromo').val(res.response.pro_id);
                $('#PEstado').val(res.response.pro_idEstado);
            } else {

                console.log(res.response)

            }
        },
        error: function (request, status, error) {
            console.log(error.message);

        }
    });

    cargarProductos(idPromo)



//    CargarComponetesAgregar(idPromo);




}
function actualizarPromo() {
    debugger;
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/promo/updPromo",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            pro_nombre: $('#txtNombre').val(),
            pro_descripcion: $('#txtDescripcion').val(),
            pro_descuento: $('#txtDescuento').val(),
            pro_precio: $('#txtPrecio').val(),
            pro_FechaInicio: $('#txtFechaInicio').val(),
            pro_FechaFin: $('#txtFechaFin').val(),
            pro_idEstado: $('#PEstado').val(),
            pro_id: $('#idPromo').val()
        },
        success: function (res) {
            debugger;
            if (res.estado) {                       
                swal({
                    title: "La Promo Fue Modificada!",
                    text: "haga click!",
                    type: "success",                  
                },
                        function () {
                             location.reload();
                        });
            } else {
                sweetAlert("Oops...", res.response, "error");
            }
        },
        error: function (request, status, error) {
            console.log(error.message);
            sweetAlert("Oops...", error, "error");

        }
    });
}

/**
 * Comment
 */
function guardarImagen() {
    var inputFile = $('input#pImagen');

    var fileToUpload = inputFile[0].files[0];
    // make sure there is file to upload

    // provide the form data
    // that would be sent to sever through ajax
    if (fileToUpload != 'undefined') {
        var formData = new FormData();
        formData.append('pro_imagen', fileToUpload);
        formData.append('pro_id', $('#idPromo').val());



        // now upload the file using $.ajax
        $.ajax({
            url: baseurl + "index.php/promo/updImagen",
            type: 'post',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {

                $('#imagen').attr('src', './assets/imagenes/promos/' + res.pro_Imagen);

            },
            error: function (request, status, error) {
                console.log(error.message);

            }
        });
    }
}


$('#agregarProd').click(function () {

    limpiarModal();

    AbrirModalProductos();



})




OcultarForm();
cargarFCategorias();
var table = $('#tbPromos').DataTable({
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/promo/get_Promos/4",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
    },
    'columns': [
        {data: 'pro_id', 'sClass': 'dt-body-center'},
        {data: 'pro_nombre'},
        {data: 'pro_descripcion'},
        {data: 'pro_precio'},
        {data: 'pro_FechaInicio'},
        {data: 'pro_FechaFin'},
        {data: 'pro_idEstado'},

        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Editar informacion"   onClick="cargarDataPromo(\'' + row.pro_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                        '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#" title="Eliminar Promo" onClick="eliminarPromo(\'' + row.pro_id + '\');"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
                        '    </ul>' +
                        '</div>' +
                        '</span>';
                // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';
                ocultarForm();
            }

        }

    ],
    "columnDefs": [
        {
            "targets": [1],
            "data": "pro_nombre",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span style='color:#006699;'></i>&nbsp;&nbsp;" + data + "</span>"

            }
        },
        {
            "targets": [6],
            "data": "pro_idEstado",
            "render": function (data, type, row) {

                if (data == 1) {
                    return "<span class='label label-success'>Habilitada</span>";
                } else if (data == 2) {
                    return "<span class='label label-danger'>Deshabilitada</span>";
                }

            }
        },
        {
            "targets": [3],
            "data": "pro_precio",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span ></i>$&nbsp;&nbsp; " + data + "</span>"

            }
        }

    ],
    "order": [[0, "asc"]],
});
$('#tblProductos2').DataTable({
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': false,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/producto/get_Productos/4",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
    },
    'columns': [
        {data: 'prod_id', 'sClass': 'dt-body-center'},
        {data: 'prod_nombre'},
        {data: 'prod_descripcionProducto'},
        {data: 'prod_precioBase'},
        {data: 'prod_idCategoria'},
        {"orderable": true,
            render: function (data, type, row) {

                return  '<a class="btn btn-block btn-primary btn-sm" style="width: 80%" onClick="agregarProd(' + row.prod_id + ')"><i class="fa fa-fw  fa-check-square"></i></a></td>';

            }

        }

    ],
    "language": {
        "sProcessing": "Procesando...",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Buscar:",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst": "Primero",
            "sLast": "Último",
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
    },
    "columnDefs": [

        {
            "targets": [3],
            "data": "prod_precio",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span ></i>$&nbsp;&nbsp; " + data + "</span>"

            }
        }

    ],
    "order": [[0, "asc"]],

});

var table2 = $('#tblProductos2').DataTable();

$(document).on("click", ".eliminarProd", function () {

    var parent = $(this).parents().get(0);
    var pprod = $(parent).find('td').eq(0).html();
    swal({
        title: "Esta seguro?",
        text: "Se eliminara el producto de la Promo",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Si, Eliminar !",
        cancelButtonText: "No, Cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
            function (isConfirm) {
                debugger;
                if (isConfirm) {

                    $.ajax({
                        type: "POST",
                        url: baseurl + "index.php/promo/eliminarProductoPromo",
                        dataType: 'json',
                        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
                            ppro_id: pprod
                        },
                        success: function (res) {

                            if (res.estado) {
                                $(parent).remove();
                                swal("Eliminado!", "El producto a si eliminado de la promo", "success");

                            } else {
                                debugger;
                                sweetAlert("Oops...", res.response, "error");

                            }

                        },
                        error: function (request, status, error) {
                            debugger;
                            console.log(error.message);
                            sweetAlert("Oops...", error, "error");

                        }
                    });


                } else {
                    swal("Cancelado", "El producto no fue eliminado de la promo", "error");
                }
            });




});
$("#selCat").change(function () {
    table2.columns(4).search($('#selCat').val().trim());//hit search on server
    table2.draw();
})
$('#mbtnUpdPromo').click(function () {

    actualizarPromo();


});
$('#btnAgregarPromo').click(function () {


    VerFormAgregar();





})

$('#btnGuardarImg').click(function () {

    guardarImagen();

})/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


