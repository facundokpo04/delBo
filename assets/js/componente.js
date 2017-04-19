


$('#tblComponentes').DataTable({
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/componente/get_componentes",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

    },
    'columns': [

        {data: 'com_id', 'sClass': 'dt-body-center'},
        {data: 'com_nombre'},
        {data: 'com_descripcion'},
        {data: 'com_precio'},
        {data: 'com_idEstado'},
        {"orderable": true,
            render: function (data, type, row) {



                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditComponente" onClick="selComponente(\'' + row.com_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                        '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#" title="Eliminar Categoria" onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
                        '    </ul>' +
                        '</div>' +
                        '</span>';
                // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';


            }

        }

    ],
    "columnDefs": [
        {
            "targets": [4],
            "data": "com_idEstado",
            "render": function (data, type, row) {

                if (data == 1) {
                    return "<span class='label label-success'>Habilitado</span>";
                } else if (data == 2) {
                    return "<span class='label label-danger'>Deshabilitado</span>";
                }

            }
        },
        {
            "targets": [3],
            "data": "com_precio",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span > $ &nbsp;" + data + "</span>"

            }
        },
        {
            "targets": [1],
            "data": "com_nombre",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span style='color:#006699;'><i class='fa fa-cutlery'></i>&nbsp;&nbsp;" + data + "</span>"

            }
        },
    ],
    "order": [[0, "asc"]],
});

function guardarImagen() {
    var inputFile = $('input#mImagen');
    var fileToUpload = inputFile[0].files[0];
    // make sure there is file to upload

    // provide the form data
    // that would be sent to sever through ajax
    if (fileToUpload != 'undefined') {
        var formData = new FormData();
        formData.append('com_imagen', fileToUpload);
        formData.append('com_id', $('#mIdComponente').val());
        // now upload the file using $.ajax
        $.ajax({
            url: baseurl + "index.php/componente/updImagen",
            type: 'post',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {

                if (res.estado) {

                    $('#mImagen').attr('src', './assets/imagenes/componente/' + res.response.com_imagen);
                } else {
                    console.log(res.response);
                    window.alert(res.response);

                }
            },
            error: function (request, status, error) {
                console.log(error.message);

            }
        });
    }
}
;
selComponente = function (idComponente) {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/componente/get_componenteById/" + idComponente,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            if (res.estado) {
                $('#mDescripcion').val(res.response.com_descripcion);
                $('#mNombre').val(res.response.com_nombre);
                $('#mEstado').val(res.response.com_idEstado);//select
                //ajax para traer todos los estados
                $('#imagen').attr('src', './assets/imagenes/componentes/' + res.response.com_imagen);
                $('#mPrecio').val(res.response.com_precio);
                $('#mIdComponente').val(res.response.com_id);
            } else {
                console.log(res.response);

            }

        },
        error: function (request, status, error) {
            console.log(error.message);

        }
    });



};


$('#mbtnCerrarModal').click(function () {

    $('#mDescripcion').val('');
    $('#mNombre').val('');
    $('#mEstado').val('1');
    $('#mPrecio').val('');
    //
    ////select
    //ajax para traer todos los estados
    $('#mIdCategoria').val('');
})
$('#mCerrarModal').click(function () {

    $('#mDescripcion').val('');
    $('#mNombre').val('');
    $('#mEstado').val('1');
    $('#mPrecio').val('');
    //
    ////select
    //ajax para traer todos los estados
    $('#mIdCategoria').val('');
})

$('#mbtnUpdComponente').click(function () {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/componente/updComponente",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            com_Nombre: $('#mNombre').val(),
            com_descripcion: $('#mDescripcion').val(),
            com_idEstado: $('#mEstado').val(),
            com_precio: $('#mPrecio').val(),
            com_id: $('#mIdComponente').val()
        },
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

$('#btnGuardarImg').click(function () {

    guardarImagen();
})
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


