$('#tblhotel').DataTable({
    "lengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "Todo"]
    ],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/hotel/get_hoteles",
        "type": "POST",
        "dataType": 'json',
        "data": { '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>' },

    },
    'columns': [

        { data: 'hotel_id', 'sClass': 'dt-body-center' },
        { data: 'hotel_nombre' },
        { data: 'hotel_direccion' },
        { data: 'hotel_telefono' },
        { data: 'hotel_estado' },
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
                    '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditHotel" onClick="selHotel(\'' + row.hotel_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                    '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                    //                        '    <li><a href="#" title="Eliminar Hotel" onClick="eliminarHotel(\'' + row.hotel_id + '\');"><i style="color:red;" class="glyphicon glyphicon-remove"></i>Eliminar</a></li>' +
                    '    </ul>' +
                    '</div>' +
                    '</span>';
                // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';


            }

        }

    ],
    "columnDefs": [{
        "targets": [4],
        "data": "hotel_estado",
        "render": function(data, type, row) {

            if (data == 1) {
                return "<span class='label label-success'>Habilitado</span>";
            } else if (data == 2) {
                return "<span class='label label-danger'>Deshabilitado</span>";
            }

        }
    }, ],
    "order": [
        [0, "asc"]
    ],
});


selHotel = function(idHotel) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/hotel/get_hotelById/" + idHotel,
        dataType: 'json',
        data: { '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>' },
        success: function(res) {

            if (res.estado) {
                $('#mNombre').val(res.response.data.hotel_nombre);
                $('#mDireccion').val(res.response.data.hotel_direccion);
                $('#mTelefono').val(res.response.data.hotel_telefono);

                $('#mEstado').val(res.response.data.hotel_estado);
                $('#mIdHotel').val(res.response.data.hotel_id);
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

};

$('#mbtnCerrarModal').click(function() {
        $('#mNombre').val('');
        $('#mEstado').val('1');
        $('#mDireccion').val('');
        $('#mTelefono').val('');

        $('#mIdHotel').val('');
        $('.nav-tabs a:first').tab('show')
    })
    //
    //
$('#mbtnUpdHotel').click(function() {

    if (!($('#mNombre').val() === '' || $('#mDireccion').val() === '' || $('#mTelefono').val() === '')) {
        $.ajax({
            type: "POST",
            url: baseurl + "index.php/hotel/updHotel",
            dataType: 'json',
            data: {
                '<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
                hotel_nombre: $('#mNombre').val(),
                hotel_direccion: $('#mDireccion').val(),
                hotel_telefono: $('#mTelefono').val(),
                hotel_estado: $('#mEstado').val(),
                hotel_id: $('#mIdHotel').val()
            },
            success: function(res) {
                if (res.estado) {
                    swal({
                            title: "Los Datos Fueron Guardados!",
                            text: "haga click!",
                            type: "success",
                        },
                        function() {
                            $('#mbtnCerrarModal').click();
                            location.reload();
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
    } else {
        sweetAlert("Oops...", "Debe completar todos los campos", "warning");
    }
});