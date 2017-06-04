

var table = $('#tbProductos').DataTable({
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
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
        {data: 'prod_idCategoria'},
        {data: 'prod_precioBase'},
        {data: 'prod_idEstado'},
        {data: 'prod_idEstadoVisible'},
        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Editar informacion"   onClick="cargarDataProducto(\'' + row.prod_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                        '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#" title="Eliminar Producto" onClick="eliminarProducto(\'' + row.prod_id + '\');"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
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
            "data": "prod_nombre",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span style='color:#006699;'></i>&nbsp;&nbsp;" + data + "</span>"

            }
        },
        {
            "targets": [4],
            "data": "prod_precio",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span ></i>$&nbsp;&nbsp; " + data + "</span>"

            }
        },
        {
            "targets": [5],
            "data": "prod_idEstado",
            "render": function (data, type, row) {

                if (data == 1) {
                    return "<span class='label label-success'>Habilitado</span>";
                } else if (data == 2) {
                    return "<span class='label label-danger'>Deshabilitado</span>";
                }

            }
        },
        {
            "targets": [6],
            "data": "prod_idEstadoVisible",
            "render": function (data, type, row) {

                if (data == 1) {
                    return "<span class='label label-success'>Visible</span>";
                } else if (data == 2) {
                    return "<span class='label label-danger'>No Visible</span>";
                }

            }
        },
    ],
    "order": [[0, "asc"]],

});
var table2 = {};

function VerForm() {
    $("#producto").show(); // Mostramos el formulario
    $("#herramientas").hide(); // ocultamos el boton nuevo
    $("#filtros").hide();//ocultamos los filtros
    $("#productos").hide();
    $("#estadodiv").show();
    $("#filtros").hide();
}
function OcultarForm() {
    $("#producto").hide(); // Mostramos el formulario
    $("#herramientas").show(); // ocultamos el boton nuevo
    $("#filtros").show();//ocultamos los filtros
    $("#productos").show();
    $("#filtros").show();

}
function VerFormAgregar() {
    $("#producto").show(); // Mostramos el formulario
    $("#paneles").hide();
    $("#panelCont").hide();
    $("#herramientas").hide(); // ocultamos el boton nuevo
    $("#productos").hide();
    $("#estadodiv").hide();
    $("#filtros").hide();
}


function cargarFCategorias() {
    $("#Fcategoria option").remove();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/get_categorias",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            $("#Fcategoria").append("<option value=" + 0 + ">Todas</option>");
            if (res.estado) {
                $.each(res.response, function (key, data) {

                    $("#Fcategoria").append("<option value=" + data.cat_id + ">" + data.cat_nombre + "</option>");
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
function cargarCategorias() {
    $("#Pcategoria option").remove();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/get_categorias",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            if (res.estado) {
                $.each(res.response, function (key, data) {
                    ;
                    $("#Pcategoria").append("<option value=" + data.cat_id + ">" + data.cat_nombre + "</option>");
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
        table.ajax.url(baseurl + "index.php/producto/get_Productos/4").load()

    } else {
        table.ajax.url(baseurl + "index.php/producto/get_ProductosCat/" + idCat).load()
    }


}

function cargarDataProducto(idProducto) {// funcion que llamamos del archivo ajax/CategoriaAjax.php linea 52
    VerForm();
    cargarCategorias();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/get_productoById/" + idProducto,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            if (res.estado) {

                $('#txtNombre').val(res.response.prod_nombre);
                $('#txtDescripcion').val(res.response.prod_descripcionProducto);
                $('#txtCodigo').val(res.response.prod_codigoProducto); //select
                //ajax para traer todos los estados
                $('#txtPrecio').val(res.response.prod_precioBase);
                $('#txtMaxCompo').val(res.response.prod_maxComponente); //select
                $('#txtMinCompo').val(res.response.prod_maxComponente); //select
                $('#PEstado').val(res.response.prod_idEstado); //selec
                $('#VEstado').val(res.response.prod_idEstadoVisible); //selec
                 $('#imgProducto').val(res.response.prod_imagen);
                $('#imagen').attr('src', './assets/imagenes/producto/' + res.response.prod_imagen);
                $('#idProducto').val(res.response.prod_id);
                $('#Pcategoria').val(res.response.prod_idCategoria);
            } else {
                sweetAlert("Oops...", res.response, "error");

                console.log(res.response)

            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error);

        }

    });
    cargarComponentes(idProducto);
    cargarVariedades(idProducto);
//    CargarComponetesAgregar(idProducto);




}
function cargarComponentes(idProducto) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/get_ComponentesById/" + idProducto,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            if (res.estado) {
                $('#tblComponentes tbody').empty();
                $.each(res.response, function (key, data) {
                    $('#tblComponentes tbody').append('<tr>' +
                            ' <td>' +
                            data.com_id +
                            '</td>' +
                            ' <td>' +
                            data.com_nombre +
                            ' </td>' +
                            ' <td>' +
                            data.com_descripcion +
                            ' </td>' +
                            ' <td>' + '$&nbsp;' +
                            data.com_precio +
                            ' </td>' +
                            ' <td class="eliminarComp"><a href="#"  onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i></a></td>' +
                            '</tr>'
                            );
                });
            } else {
                sweetAlert("Oops...", "Ocurrio un Error Al cargar los Componentes!", "error");
                console.log(res.response);
            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error.message);

        }
    });
}
//variedades

function actualizarTablaVariedades(idProducto){
      table2.ajax.url(baseurl + "index.php/producto/get_VariedadesById/" + idProducto).load()
}
function cargarVariedades(idProducto) {

    table2 = $('#tblVariedades').DataTable({
        "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
        'paging': true,
        'info': false,
        'filter': false,
        'stateSave': true,    
        'ajax': {
            "url": baseurl + "index.php/producto/get_VariedadesById/" + idProducto,
            "type": "POST",
            "dataType": 'json',
            "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

        },
        'columns': [

            {data: 'var_id', 'sClass': 'dt-body-center'},
            {data: 'var_nombre'},
            {data: 'var_descripcion'},
            {data: 'var_precio'},
            {"orderable": true,
                render: function (data, type, row) {
                    return '<span>' +
                            '<div class="dropdown">' +
                            '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                            '    Acciones' +
                            '  <span class="caret"></span>' +
                            '  </button>' +
                            '    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">' +
                            '    <li><a href="#" title="Editar informacion"  data-toggle="modal" data-target="#modalEditVariedad" onClick="selVariedad(\'' + row.var_id + '\')";><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                            '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                            '    <li><a href="#" title="Eliminar Telefono" onClick="eliminarVariedad(\'' + row.var_id + '\')"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
                            '    </ul>' +
                            '</div>' +
                            '</span>';
                    // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';
                }
            }
        ],
        "columnDefs": [
            {
                "targets": [3],
                "data": "var_precio",
                "render": function (data, type, row) {
                    return "<span ></i>$&nbsp;&nbsp; " + data + "</span>"

                }
            },
        ],
        "order": [[0, "asc"]],
    });
}
function selVariedad(idVariedad) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/get_variedadById/" + idVariedad,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            debugger;
            if (res.estado) {
                $('#mIdVariedad').val(res.response.var_id);
                $('#mvNombre').val(res.response.var_nombre);
                $('#mvDescripcion').val(res.response.var_descripcion);
                $('#mvTipo').val(res.response.var_tipo);
                $('#mvPrecio').val(res.response.var_precio);
            } else {
                sweetAlert("Oops...", res.response, "error");
                console.log(res.response)
            }

        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error);
        }
    });
};
function eliminarVariedad(idVariedad) {
    swal({
        title: "Esta seguro?",
        text: "Se eliminar la Variedad del Producto",
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
                        url: baseurl + "index.php/producto/eliminarVariedad/" + idVariedad,
                        dataType: 'json',
                        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
                        },
                        success: function (res) {

                            if (res.estado) {
                                debugger;
                                actualizarTablaVariedades($('#idProducto').val());
                                swal("Eliminado!", "La Variedad fue eliminada del Producto", "success");
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
                    swal("Cancelado", "La Variedad No fue eliminada del Producto", "error");
                }
            });




};
function ActualizarVariedad(idProducto) {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/updVariedad",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            var_nombre: $('#mvNombre').val(),
            var_descripcion: $('#mvDescripcion').val(),
            var_tipo: $('#mvTipo').val(),
            var_precio: $('#mvPrecio').val(),
            var_idProducto: $('#idProducto').val(),
            var_id: $('#mIdVariedad').val()
        },
        success: function (res) {
            if (res.estado) {
                swal({
                    title: "Los Datos Fueron Guardados!",
                    text: "haga click!",
                    type: "success",
                },
                        function () {
                            $('#mbtnCerrarModalVar').click();
                            actualizarTablaVariedades($('#idProducto').val());
                        });


            } else {
                sweetAlert("Oops...", JSON.stringify(res.response), "error");
                console.log(res.response);
                $('#mbtnCerrarModalVar').click();


            }
        },
        error: function (request, status, error) {
            console.log(error.message);

        }
    });
}




function CargarComponetesAgregar(idProducto) {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/get_NotComponentesById/" + idProducto,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            if (res.estado) {

                $('#tblComponentes2 tbody tr').remove();
                $.each(res.response, function (key, data) {

                    $('#tblComponentes2 tbody').append('<tr>' +
                            ' <td>' +
                            data.com_id +
                            ' </td>' +
                            ' <td>' +
                            data.com_nombre +
                            ' </td>' +
                            ' <td>' +
                            data.com_descripcion +
                            ' </td>' +
                            ' <td>' + '$&nbsp;' +
                            data.com_precio +
                            ' </td>' +
                            ' <td> <input type="checkbox" id="compSel"></td>' +
                            '</tr>'
                            );
                });
            } else {

                sweetAlert("Oops...", "Ocurrio un Error al cargar los componentes!", "error");

                console.log(res.response);
            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error.message);

        }
    });
}

/**
 * funcion para agregar todos los componentes que selecciono
 */
function ActualizarComponentes() {
    $('#tblComponentes2 tbody tr').each(function () {
        if ($(this).find('td').length > 0) {
            var comp_id = $(this).find('td').eq(0).html();
            var comp_check = $(this).find('td').eq(4).find("input").eq(0);
            if (comp_check.is(':checked')) {
                $.ajax({
                    type: "POST",
                    url: baseurl + "index.php/producto/updComponente",
                    dataType: 'json',
                    data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
                        cp_idProducto: $('#idProducto').val(),
                        cp_idComponente: comp_id
                    },
                    success: function (res) {
                        debugger;
                        if (res.estado) {
                        }
                    },
                    error: function (request, status, error) {
                        console.log(error.message);

                    }
                });
            }
        }
    });
    cargarComponentes($('#idProducto').val());
    cargarVariedades($('#idProducto').val());
}



function actualizarProducto() {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/updProducto",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            prod_nombre: $('#txtNombre').val(),
            prod_descripcionProducto: $('#txtDescripcion').val(),
            prod_codigoProducto: $('#txtCodigo').val(),
            prod_precioBase: $('#txtPrecio').val(),
            prod_maxComponente: $('#txtMaxCompo').val(),
            prod_minComponente: $('#txtMinCompo').val(),
            prod_idEstado: $('#PEstado').val(),
            prod_idCategoria: $('#Pcategoria').val(),
            prod_idEstadoVisible: $('#VEstado').val(),
            prod_imagen: $('#imgProducto').val(),
            prod_id: $('#idProducto').val()


        },
        success: function (res) {
            if (res.estado) {

                swal({
                    title: "Los Datos Fueron Guardados!",
                    text: "haga click!",
                    type: "success",
                },
                        function () {
                            location.reload();
                        });


            } else {
                sweetAlert("Oops...", JSON.stringify(res.response), "error");
                console.log(res.response);
            }


        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error);

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
    if (!("undefined" === typeof fileToUpload)) {
        var formData = new FormData();
        formData.append('prod_imagen', fileToUpload);

        // now upload the file using $.ajax
        $.ajax({
            url: baseurl + "index.php/producto/updImagen",
            type: 'post',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {

                if (res.estado) {

                    swal({
                        title: "La Imagen Fue Subida con exito!",
                        text: "haga click en actualizar para guardar!",
                        type: "success",
                        showLoaderOnConfirm: true,
                    }, function () {
                        debugger

                        $('#imagen').attr('src', './assets/imagenes/producto/' + res.response);
                        $('#imgProducto').val(res.response);
                    });

                } else {
                    console.log(res.response);
                    sweetAlert("Oops...", JSON.stringify(res.response), "error");

                }
            },
            error: function (request, status, error) {
                sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
                console.log(error.message);

            }
        });
    } else {
        sweetAlert("Oops...", "Seleccione una imagen", "warning");
    }
}


$('#agregarCom').click(function () {
    CargarComponetesAgregar($('#idProducto').val());
})

$(document).on("click", ".eliminarComp", function () {
    var parent = $(this).parents().get(0);
    var comp_id = $(parent).find('td').eq(0).html();
    swal({
        title: "Esta seguro?",
        text: "Se eliminara el Componente del Producto",
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
                        url: baseurl + "index.php/producto/eliminarComponente",
                        dataType: 'json',
                        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
                            idProducto: $('#idProducto').val(),
                            idComponente: comp_id
                        },
                        success: function (res) {

                            if (res.estado) {
                                $(parent).remove();
                                swal("Eliminado!", "El Componente se elimino del producto", "success");

                            } else {
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
                    swal("Cancelado", "El Componente no fue eliminado del producto", "error");
                }
            });




});
OcultarForm();
cargarFCategorias();

$("#Fcategoria").change(function () {
    actualizarTablaCat(this.value);
})
$('#mbtnUpdProducto').click(function () {

    actualizarProducto();
});
$('#btnAgregarProd').click(function () {

    VerFormAgregar();
    cargarCategorias();
})
$('#btnGuardarImg').click(function () {
    guardarImagen();
})


$('#mbtnCerrarModalVar,#mCerrarModalVar').click(function () {

    $('#mIdVariedad').val('');
    $('#mvNombre').val('');
    $('#mvDescripcion').val(''); //select
    //ajax para traer todos los estados
    $('#mvTipo').val('');
    $('#mvPrecio').val('');
})