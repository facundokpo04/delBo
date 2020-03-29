/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$('#tblPublicidad').DataTable({
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/publicidad/get_publicidades",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

    },
    'columns': [

        {data: 'pub_id', 'sClass': 'dt-body-center'},
        {data: 'pub_nombre'},
        {data: 'Imagen',
            render: function (data, type, row) {
                return '<center><img src="' + row.Imagen + '" width="120" height="80"/><center/>'

            }},
        {data: 'pub_orden'},
        {data: 'pub_Estado'},
        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditPublicidad" onClick="selPublicidad(\'' + row.pub_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                        '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#" title="Eliminar Publicidad" onClick="eliminarPublicidad(\'' + row.pub_id + '\');"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
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
            "data": "pub_Estado",
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
            "data": "pub_nombre",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span style='color:#006699;'><i class='fa fa-cutlery'></i>&nbsp;&nbsp;" + data + "</span>"

            }
        },
    ],
    "order": [[0, "asc"]],
});
inicializacion = function (){
     $('#mNombre').val('');
    $('#mOrden').val(1);
    $('#mEstado').val('1');//select
    //ajax para traer todos los estados
    $('#mIdPublicidad').val('');
    $('#imgPublicidad').val('');
    $('.nav-tabs a:first').tab('show')
    
}
inicializacion();
validacion = function () {
    if ($('#mNombre').val() !='' ) {
        return true

    } else
        return false


}
selPublicidad = function (idPublicidad) {


    $.ajax({
        type: "POST",
        url: baseurl + "index.php/publicidad/get_publicidadById/" + idPublicidad,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            if (res.estado) {
                debugger;
                $('#mNombre').val(res.response.pub_nombre);
                $('#mEstado').val(res.response.pub_Estado);
                $('#mOrden').val(res.response.pub_orden);
                $('#imgPublicidad').val(res.response.pub_Imagen),
                        //select
                        //ajax para traer todos los estados
                        $('#imagen').attr('src', './assets/imagenes/publicidad/' + res.response.pub_Imagen);
                $('#mIdPublicidad').val(res.response.pub_id);
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
    var inputFile = $('input#pImagen');
    var fileToUpload = inputFile[0].files[0];
    // make sure there is file to upload

    // provide the form data
    // that would be sent to sever through ajax
    if (!("undefined" === typeof fileToUpload)) {

        var formData = new FormData();
        formData.append('pub_Imagen', fileToUpload);

        // now upload the file using $.ajax
        $.ajax({
            url: baseurl + "index.php/publicidad/updImagen",
            type: 'post',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {

                if (res.estado) {

                    swal({
                        title: "La Imagen Fue Subida con exito!",
                        text: "No se olvide de Actualizar para Guardar los Cambios",
                        type: "success",
                        showLoaderOnConfirm: true,
                    }, function () {

                        $('#imagen').attr('src', './assets/imagenes/publicidad/' + res.response);
                        $('#imgPublicidad').val(res.response);
                    });


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
}
;

function eliminarPublicidad(idPublicidad) {
    swal({
        title: "Esta seguro?",
        text: "Se eliminara la Publicidad",
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
                        url: baseurl + "index.php/publicidad/eliminar/" + idPublicidad,
                        dataType: 'json',
                        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

                        success: function (res) {


                            if (res.estado) {

                                swal({
                                    title: "Eliminado",
                                    text: "La Publicidad se a eliminado!",
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
                    swal("Cancelado", "La Publicidad no fue Eliminada", "error");
                }
            });

}


$('#mbtnCerrarModal').click(function () {
    $('#mNombre').val('');
    $('#mOrden').val(1);
    $('#mEstado').val('1');//select
    $('#mEstadoVisible').val('1');
    //ajax para traer todos los estados
    $('#mIdPublicidad').val('');
    $('#imgPublicidad').val('');
    $('.nav-tabs a:first').tab('show')
})
$('#mCerrarModal').click(function () {
    $('#mNombre').val('');
    $('#mOrden').val(1);
    $('#mEstado').val('1');//select
    //ajax para traer todos los estados
    $('#mIdPublicidad').val('');
    $('#imgPublicidad').val('');
    $('.nav-tabs a:first').tab('show')
})

$('#mbtnUpdPublicidad').click(function () {

    if ($('#imgPublicidad').val() === '') {
          sweetAlert("Oops...", "Debe subir una imagen antes de guardar!", "error");
    
    } else if ($('#mNombre').val()===''){
        sweetAlert("Oops...", "Debe escribir un nombre a la publicidad!", "error");
    }
    else{
              $.ajax({
            type: "POST",
            url: baseurl + "index.php/publicidad/updPublicidad",
            dataType: 'json',
            data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
                pub_nombre: $('#mNombre').val(),
                pub_Estado: $('#mEstado').val(),
                pub_Orden: $('#mOrden').val(),
                pub_Imagen: $('#imgPublicidad').val(),
                pub_id: $('#mIdPublicidad').val()
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
                debugger;
                sweetAlert("Oops...", "Ocurrio un Error Inesperado!", "error");
                console.log(error);
            }
        });
    }
  
     
    ;

});





$('#btnGuardarImg').click(function () {

    guardarImagen();
})
