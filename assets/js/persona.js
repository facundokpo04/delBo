
$('#tblPersonas').DataTable({
    "lengthMenu": [[6, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/persona/get_personas",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
    },
    'columns': [
        {data: 'per_id', 'sClass': 'dt-body-center'},
        {data: 'per_nombre'},
        {data: 'per_email'},
        {data: 'per_password'},
        {'data': 'per_documento'},
        {data: 'per_nacionalidad'},
        {data: 'per_celular'},
        {data: 'per_perfilUsuario'},

        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditPersona" onClick="selPersona(\'' + row.per_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                        '    <li><a href="#" title="Ver informacion" data-toggle="modal" data-target="#modalEditPersona" onClick="selPersona(\'' + row.per_id + '\');"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#"  onClick="eliminarPersona(\'' + row.per_id + '\');"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
                        '    </ul>' +
                        '</div>' +
                        '</span>';
                // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';


            }

        }

    ],
    "columnDefs": [
    ],
    "order": [[0, "asc"]],
});


selPersona = function (idPersonas) {


    $.ajax({
        type: "POST",
        url: baseurl + "index.php/persona/get_personaById/" + idPersonas,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            
            if (res.estado) {

                $('#mNombre').val(res.response.per_nombre);
                $('#mEmail').val(res.response.per_email);
                $('#mDocumento').val(res.response.per_documento);//select
                //ajax para traer todos los estados
                $('#mNacionalidad').val(res.response.per_nacionalidad);
                $('#mPassword').val(res.response.per_password);
                $('#mCelular').val(res.response.per_celular);
                $('#mPerfilUsuario').val(res.response.per_perfilUsuario);
                $('#mIdPersona').val(res.response.per_id);
            } else {
                sweetAlert("Oops...", "Ocurrio Algun Error!", "error");

            }
//            $('#mImagen').val(res.cat_imagen);
        },
        error: function (request, status, error) {

            sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
            console.log(error);

        }
    });

};
function eliminarPersona(idPersona) {
    swal({
        title: "Esta seguro?",
        text: "Se eliminara la Persona",
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
                        url: baseurl + "index.php/persona/eliminar/" + idPersona,
                        dataType: 'json',
                        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

                        success: function (res) {


                            if (res.estado) {

                                swal({
                                    title: "Eliminado",
                                    text: "La Persona se a eliminado!",
                                    type: "success",
                                },
                                        function () {
                                            location.reload();
                                        });

                            } else {
                                sweetAlert("Ocurrio un Error", res.response, "error");
                                console.log(res.response);

                            }

                        },
                        error: function (request, status, error) {

                            console.log(error);
                            sweetAlert("Ocurrio un Error Inesperado", error, "error");

                        }
                    });
                } else {
                    swal("Cancelado", "La Persona no fue Eliminado", "error");
                }
            });

}

$('#mbtnUpdPersona').click(function () {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/persona/updPersona",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            per_nombre: $('#mNombre').val(),
            per_email: $('#mEmail').val(),
            per_documento: $('#mDocumento').val(),
            per_password: $('#mPassword').val(),
            per_Nacionalidad: $('#mNacionalidad').val(),
            per_id: $('#mIdPersona').val(),
            per_perfilUsuario: $('#mPerfilUsuario').val()},
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
            console.log(error.message);

        }
    });

});


         