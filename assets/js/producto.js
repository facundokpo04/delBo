


function VerForm() {
    $("#producto").show(); // Mostramos el formulario
    $("#herramientas").hide(); // ocultamos el boton nuevo
    $("#productos").hide();
}


function OcultarForm() {
    $("#producto").hide(); // Mostramos el formulario
    $("#herramientas").show(); // ocultamos el boton nuevo
    $("#productos").show();
}


function cargarCategorias() {
    $("#Pcategoria option").remove();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/get_categorias",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            $.each(res, function (key, data) {
                ;
                $("#Pcategoria").append("<option value=" + data.cat_id + ">" + data.cat_nombre + "</option>");
            });
        },
        error: function (request, status, error) {
            cosole.log(error.message);

        }

    });
}
function VerFormAgregar() {
    $("#producto").show(); // Mostramos el formulario
    $("#paneles").hide();
    $("#panelCont").hide();
    $("#herramientas").hide(); // ocultamos el boton nuevo
    $("#productos").hide();
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
            $('#txtNombre').val(res.prod_nombre);
            $('#txtDescripcion').val(res.prod_descripcionProducto);
            $('#txtCodigo').val(res.prod_codigoProducto); //select
            //ajax para traer todos los estados
            $('#txtPrecio').val(res.prod_precioBase);
            $('#txtMaxCompo').val(res.prod_maxComponente); //select
            $('#txtMinCompo').val(res.prod_maxComponente); //select
            $('#PEstado').val(res.prod_idEstado); //selec
            $('#VEstado').val(res.prod_idEstadoVisible); //selec
            $('#imagen').attr('src', './assets/imagenes/producto/' + res.prod_imagen);
            $('#idProducto').val(res.prod_id);
            $('#Pcategoria').val(res.prod_idCategoria);
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

            $('#tblComponentes tbody tr').remove();
            $.each(res, function (key, data) {


                $('#tblComponentes tbody').append('<tr>' +
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
                        ' <td class="eliminarComp"><a href="#"  onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i></a></td>' +
                        '</tr>'
                        );
            });
        },
        error: function (request, status, error) {
            cosole.log(error.message);

        }
    });
}

function cargarVariedades(idProducto) {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/get_VariedadesById/" + idProducto,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            $.each(res, function (key, data) {


                $('#tblVariedades tbody').append('<tr>' +
                        ' <td>' +
                        data.var_id +
                        ' </td>' +
                        ' <td>' +
                        data.var_nombre +
                        ' </td>' +
                        ' <td>' +
                        data.var_descripcion +
                        ' </td>' +
                        ' <td>' + '$&nbsp;' +
                        data.var_precio +
                        ' </td>' +
                        ' <td class="eliminarVar"><a href="#"  onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i></a></td>' +
                        '</tr>'
                        );
            });
        },
        error: function (request, status, error) {
            cosole.log(error.message);

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

            $('#tblComponentes2 tbody tr').remove();
            $.each(res, function (key, data) {

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
        },
        error: function (request, status, error) {
            cosole.log(error.message);

        }
    });
}




/**
 * funcion para agregar todos los componentes que selecciono
 */
function ActualizarComponentes() {

//  $('#tblComponentes2 tbody tr').remove();


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


                    },
                    error: function (request, status, error) {
                        cosole.log(error.message);

                    }
                });
            }


        }



    });
    cargarComponentes($('#idProducto').val());
    cargarVariedades($('#idProducto').val());
}

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
            var a = 0;
            $('#mbtnCerrarModalVar').click();
        },
        error: function (request, status, error) {
            cosole.log(error.message);

        }
    });
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
            prod_id: $('#idProducto').val()


        },
        success: function (res) {

            location.reload();
        },
        error: function (request, status, error) {
            cosole.log(error.message);

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
        formData.append('prod_imagen', fileToUpload);
        formData.append('prod_id', $('#idProducto').val());
        // now upload the file using $.ajax
        $.ajax({
            url: baseurl + "index.php/producto/updImagen",
            type: 'post',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {
                
                if(res.estado){

                $('#imagen').attr('src', './assets/imagenes/producto/' + res.prod_Imagen);
            }
            else{
                cosole.log(res.response);
                alert(res.response);
                
            }
            },
            error: function (request, status, error) {
                cosole.log(error.message);

            }
        });
    }
}


$('#agregarCom').click(function () {


    CargarComponetesAgregar($('#idProducto').val());
})





$(document).on("click", ".eliminarComp", function () {

    var parent = $(this).parents().get(0);
    var comp_id = $(parent).find('td').eq(0).html();
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/eliminarComponente",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            idProducto: $('#idProducto').val(),
            idComponente: comp_id

        },
        success: function (res) {



        }
    });
    $(parent).remove();
});
$(document).on("click", ".eliminarVar", function () {

    var parent = $(this).parents().get(0);
    var var_id = $(parent).find('td').eq(0).html();
    debugger;
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/producto/eliminarVariedad/" + var_id,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
        },
        success: function (res) {



        }
    });
    $(parent).remove();
});
OcultarForm();
$('#tbProductos').DataTable({
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