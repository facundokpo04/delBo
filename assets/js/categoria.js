


$('#tblCategorias').DataTable({
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/categoria/get_categorias",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

    },
    'columns': [

        {data: 'cat_id', 'sClass': 'dt-body-center'},
        {data: 'cat_nombre'},
        {data: 'cat_descripcion'},
        {data: 'cat_idEstado'},
        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                        '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#" title="Eliminar Categoria" onClick="eliminarCategoria(\'' + row.cat_id + '\');"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
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
            "data": "cat_idEstado",
            "render": function (data, type, row) {

                if (data == 1) {
                    return "<span class='label label-success'>Habilitado</span>";
                } else if (data == 2) {
                    return "<span class='label label-danger'>Deshabilitado</span>";
                }

            }
        },
        {
            "targets": [1],
            "data": "cat_nombre",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span style='color:#006699;'><i class='fa fa-cutlery'></i>&nbsp;&nbsp;" + data + "</span>"

            }
        },
    ],
    "order": [[0, "asc"]],
});


selCategoria = function (idCategorias) {


    $.ajax({
        type: "POST",
        url: baseurl + "index.php/categoria/get_categoriaById/" + idCategorias,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            if (res.estado) {
                $('#mDescripcion').val(res.response.cat_descripcion);
                $('#mNombre').val(res.response.cat_nombre);
                $('#mEstado').val(res.response.cat_idEstado);//select
                //ajax para traer todos los estados
                $('#imagen').attr('src', './assets/imagenes/categoria/' + res.response.cat_imagen);
                $('#mIdCategoria').val(res.response.cat_id);
            } else {
                sweetAlert("Oops...", res.response, "error");
                console.log(res.response);
            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error);
        }
    });

};
function guardarImagen() {
    var inputFile = $('input#cImagen');
    var fileToUpload = inputFile[0].files[0];
    // make sure there is file to upload

    // provide the form data
    // that would be sent to sever through ajax
    if (!("undefined" === typeof fileToUpload)) {

        var formData = new FormData();
        formData.append('cat_imagen', fileToUpload);
        formData.append('cat_id', $('#mIdCategoria').val());
        // now upload the file using $.ajax
        $.ajax({
            url: baseurl + "index.php/categoria/updImagen",
            type: 'post',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {

                if (res.estado) {

                    $('#imagen').attr('src', './assets/imagenes/categoria/' + res.response.cat_imagen);
                } else {
                    console.log(res.response);
                    sweetAlert("Oops...", res.response, "error");

                }
            },
            error: function (request, status, error) {
                sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
                console.log(error.message);

            }
        });
    } else {
        sweetAlert("Oops...", "Seleccione un Imagen", "warning");
    }
};

function eliminarCategoria(idCategoria) {
    swal({
        title: "Esta seguro?",
        text: "Se eliminar la Categoria",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Si, Eliminar!",
        cancelButtonText: "No, Cancelar!",
        closeOnConfirm: false,
        closeOnCancel: false
    },
            function (isConfirm) {
                if (isConfirm) {
                    $.ajax({
                        type: "POST",
                        url: baseurl + "index.php/categoria/eliminar/"+idCategoria,
                        dataType: 'json',
                        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

                        success: function (res) {


                            if (res.estado) {

                                swal({
                                    title: "Eliminado",
                                    text: "La Categoria se a eliminado!",
                                    type: "success",
                                },
                                        function () {
                                            location.reload();
                                        });

                            } else {
                                sweetAlert("Ocurrio un Error", res.response, "error");

                            }

                        },
                        error: function (request, status, error) {

                            console.log(error);
                            sweetAlert("Ocurrio un Error Inesperado", error, "error");

                        }
                    });
                } else {
                    swal("Cancelado", "La Categoria no fue Eliminada", "error");
                }
            });

}



$('#mbtnCerrarModal').click(function () {

    $('#mDescripcion').val('');
    $('#mNombre').val('');
    $('#mEstado').val('1');//select
    //ajax para traer todos los estados
    $('#mIdCategoria').val('');
})
$('#mCerrarModal').click(function () {

    $('#mDescripcion').val('');
    $('#mNombre').val('');
    $('#mEstado').val('1');//select
    //ajax para traer todos los estados
    $('#mIdCategoria').val('');
})

$('#mbtnUpdCategoria').click(function () {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/categoria/updCategoria",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            cat_nombre: $('#mNombre').val(),
            cat_descripcion: $('#mDescripcion').val(),
            cat_idEstado: $('#mEstado').val(),
            cat_id: $('#mIdCategoria').val()
        },
        success: function (res) {
            if (res.estado) {
                swal({
                    title: "Los Datos Fueron Guardados!",
                    text: "haga click!",
                    type: "success",
                },
                        function () {
                            $('#mbtnCerrarModal').click();
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
});





$('#btnGuardarImg').click(function () {

    guardarImagen();
})
         