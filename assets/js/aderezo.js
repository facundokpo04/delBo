
debugger;

$('#tblAderezo').DataTable({
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/aderezo/get_aderezos",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

    },
    'columns': [

        {data: 'ade_id', 'sClass': 'dt-body-center'},
        {data: 'ade_nombre'},
        {data: 'ade_idEstado'},
        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditAderezo" onClick="selAderezo(\'' + row.ade_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                        '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#" title="Eliminar Categoria" onClick="eliminarAderezo(\'' + row.ade_id + '\');"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
                        '    </ul>' +
                        '</div>' +
                        '</span>';
                // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';


            }

        }

    ],
    "columnDefs": [
        {
            "targets": [2],
            "data": "ade_idEstado",
            "render": function (data, type, row) {

                if (data == 1) {
                    return "<span class='label label-success'>Habilitado</span>";
                } else if (data == 2) {
                    return "<span class='label label-danger'>Deshabilitado</span>";
                }

            }
        },

    ],
    "order": [[0, "asc"]],
});


selAderezo = function (idAderezo) {


    $.ajax({
        type: "POST",
        url: baseurl + "index.php/aderezo/get_aderezoById/" + idAderezo,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            if (res.estado) {
                debugger;
                $('#mNombre').val(res.response.ade_nombre);
                $('#mEstado').val(res.response.ade_idEstado);
                $('#mIdAderezo').val(res.response.ade_id);
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


function eliminarCategoria(idAderezo) {
    swal({
        title: "Esta seguro?",
        text: "Se eliminar el Aderezo",
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
                        url: baseurl + "index.php/aderezo/eliminar/" + idAderezo,
                        dataType: 'json',
                        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

                        success: function (res) {


                            if (res.estado) {

                                swal({
                                    title: "Eliminado",
                                    text: "El Aderezo se a eliminado!",
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
                    swal("Cancelado", "El Aderezo no fue Eliminado", "error");
                }
            });

}


$('#mbtnCerrarModal').click(function () {
    $('#mNombre').val('');
    $('#mEstado').val('1');
    
    $('#mIdAderezo').val('');
    $('.nav-tabs a:first').tab('show')
})


$('#mbtnUpdAderezo').click(function () {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/aderezo/updAderezo",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            ade_nombre: $('#mNombre').val(),
            ade_idEstado: $('#mEstado').val(),
            ade_id: $('#mIdAderezo').val()
        },
        success: function (res) {
            debugger;
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





