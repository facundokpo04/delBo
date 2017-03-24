

$('#tblPersonas').DataTable({
    "lengthMenu": [[6, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/persona/get_personas/1",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
    },
    'columns': [
        {data: 'per_id', 'sClass': 'dt-body-center'},
        {data: 'per_nombre'},
        {data: 'per_email'},
        {'data': 'per_documento'},
        {data: 'per_nacionalidad'},
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
                        '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#" title="Eliminar Persona" onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
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


            $('#mNombre').val(res.per_nombre);
            $('#mEmail').val(res.per_email);
            $('#mDocumento').val(res.per_documento);//select
            //ajax para traer todos los estados
            $('#mNacionalidad').val(res.per_nacionalidad);
            $('#mPassword').val(res.per_password);
            $('#mPerfilUsuario').val(res.per_perfilUsuario);
            $('#mIdPersona').val(res.per_id);
//            $('#mImagen').val(res.cat_imagen);
        },
         error: function (request, status, error) {
            console.log(error.message);

        }
    });

};


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


            var a = 0;
            $('#mbtnCerrarModal').click();

            location.reload();
        },
         error: function (request, status, error) {
            console.log(error.message);

        }
    });

});
         