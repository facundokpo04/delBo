

//datos contactos
function cargarDatosc(idSucursal) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/sucursal/get_DatoContactoById/" + idSucursal,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {


            if (res.estado) {
                $('#idDcon').val(res.response.dcon_id);
                $('#txtFacebook').val(res.response.dcon_facebook);
                $('#txttwitter').val(res.response.dcon_twitter);
                $('#txtwebsite').val(res.response.dcon_website);
                $('#txtemailc').val(res.response.dcon_email);
                $('#txtDireccion').val(res.response.dcon_direccion);

            } else {
                console.log(res.response);

            }


        },
        error: function (request, status, error) {
            console.log(error.message);

        }
    });

}
function updDatosc(idSucursal) {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/sucursal/updDatoContacto",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            dcon_id: $('#idDcon').val(),
            dcon_facebook: $('#txtFacebook').val(),
            dcon_website: $('#txtwebsite').val(),
            dcon_twitter: $('#txttwitter').val(),
            dcon_direccion: $('#txtDireccion').val(),
            dcon_idSucursal: idSucursal,
            dcon_email: $('#txtemailc').val()

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
                sweetAlert("Oops...", "Ocurrio Algun Error!", "error");
                console.log(res.response);

            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio Algun Error!", "error");
            console.log(error.message);

        }
    });

}

//telefonos
function limpiarModaltel() {
    $('#mNumero').val('');
    $('#mDescripcion').val('');
    $('#mtipo').val('1');
    $('#mIdtcon').val('');

}
function selTelefono(idTelefono) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/sucursal/get_Tel/" + idTelefono,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            debugger;
            if (res.estado) {
                $('#mNumero').val(res.response.tcon_numero);
                $('#mDescripcion').val(res.response.tcon_descripcion);
                $('#mtipo').val(res.response.tcon_tipo);
                $('#mIdtcon').val(res.response.tcon_id);
            } else {
                console.log(res.response);

            }

        },
        error: function (request, status, error) {
            console.log(error.message);

        }
    });   
};
function eliminarTelefono(idTelefono) {

    swal({
        title: "Esta seguro?",
        text: "Se eliminara el telefono",
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
                        url: baseurl + "index.php/sucursal/eliminarTel/" + idTelefono,
                        dataType: 'json',
                        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
                        success: function (res) {
                            debugger;

                            if (res.estado) {

                                swal({
                                    title: "Eliminado",
                                    text: "El Telefono se a eliminado!",
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
                            debugger;
                            console.log(error);
                            sweetAlert("Ocurrio un Error Inesperado", error, "error");

                        }
                    });
                } else {
                    swal("Cancelado", "El Telefono no fue Eliminado", "error");
                }
            });



};
function updTelefono(idcon){
     $.ajax({
        type: "POST",
        url: baseurl + "index.php/sucursal/updTel",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            tcon_id: $('#mIdtcon').val(),
            tcon_numero: $('#mNumero').val(),
            tcon_descripcion: $('#mDescripcion').val(),
            tcon_idDatoContacto: idcon,
            tcon_tipo: $('#mtipo').val()
            
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
                sweetAlert("Oops...", "Ocurrio Algun Error!", "error");
                console.log(res.response);

            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio Algun Error!", "error");
            console.log(error.message);

        }
    });

    
};
iniciar = function (idEmpresa) {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/empresa/get_EmpresaById/" + idEmpresa,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {


            if (res.estado) {
                $('#idEmpresa').val(res.response.emp_id);
                $('#txtRazonSocial').val(res.response.razonSocial);
                $('#txtRubro').val(res.response.Rubro);
                $('#txtCuit').val(res.response.cuilt);
                $('#txtDomicilio').val(res.response.Domicilio);
                $('#txtTelefono').val(res.response.telefono);
                $('#txtEmail').val(res.response.Email);//select
                //ajax para traer todos los estados
                $('#txtPais').val(res.response.Pais);
                $('#imagen').attr('src', './assets/imagenes/empresa/' + res.response.logo);
            } else {
                console.log(res.response);

            }


        },
        error: function (request, status, error) {
            console.log(error.message);

        }
    });


    $('#tbTelefonos').DataTable({
        "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
        'paging': true,
        'info': true,
        'filter': true,
        'stateSave': true,
        'ajax': {
            "url": baseurl + "index.php/sucursal/get_TelById/4",
            "type": "POST",
            "dataType": 'json',
            "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

        },
        'columns': [

            {data: 'tcon_id', 'sClass': 'dt-body-center'},
            {data: 'tcon_numero'},
            {data: 'tcon_descripcion'},
            {data: 'tcon_tipo'},
            {"orderable": true,
                render: function (data, type, row) {
                    return '<span class="pull-right" >' +
                            '<div class="dropdown">' +
                            '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                            '    Acciones' +
                            '  <span class="caret"></span>' +
                            '  </button>' +
                            '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                            '    <li><a href="#" title="Editar informacion"  data-toggle="modal" data-target="#modalEditTelefono" onClick="selTelefono(\'' + row.tcon_id + '\')";><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                            '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                            '    <li><a href="#" title="Eliminar Telefono" onClick="eliminarTelefono(\'' + row.tcon_id + '\')"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
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
                "data": "tcon_tipo",
                "render": function (data, type, row) {

                    if (data == 1) {
                        return "<span class='label label-success'><i class='fa  fa-whatsapp'></i>  Whatsapp</span>";
                    } else if (data == 2) {
                        return "<span class='label label-primary'><i class='fa   fa-phone'></i>  Fijo</span>";
                    }

                }
            },
        ],
        "order": [[0, "asc"]],
    });
    cargarDatosc(4);


};
function guardarImagen() {
    var inputFile = $('input#txtLogo');
    var fileToUpload = inputFile[0].files[0];

    if (!("undefined" === typeof fileToUpload)) {
        var formData = new FormData();
        formData.append('logo', fileToUpload);
        formData.append('emp_id', $('#idEmpresa').val());
        // now upload the file using $.ajax
        $.ajax({
            url: baseurl + "index.php/empresa/updImagen",
            type: 'post',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {

                if (res.estado) {
                    swal({
                        title: "Los Datos Fueron Guardados!",
                        text: "haga click!",
                        type: "success",
                    },
                            function () {
                                $('#imagen').attr('src', './assets/imagenes/empresa/' + res.response.logo);
                            });


                } else {
                    sweetAlert("Oops...", "Ocurrio Algun Error!", "error");
                    console.log(res.response);


                }
            },
            error: function (request, status, error) {
                sweetAlert("Oops...", "Ocurrio Algun Error!", "error");
                console.log(error.message);

            }
        });
    } else {
        sweetAlert("Atencion", "Seleccione una Imagen", "warning");
    }
};

$('#mbtnUpdTelefono').click(function () {
    updTelefono($('#idDcon').val());
});

$('#btnUpdEmpresa').click(function () {


    $.ajax({
        type: "POST",
        url: baseurl + "index.php/empresa/updEmpresa",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            razonSocial: $('#txtRazonSocial').val(),
            Rubro: $('#txtRubro').val(),
            cuilt: $('#txtCuit').val(),
            Domicilio: $('#txtDomicilio').val(),
            telefono: $('#txtTelefono').val(),
            Email: $('#txtEmail').val(),
            Pais: $('#txtPais').val(),
            emp_id: $('#idEmpresa').val()

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
                sweetAlert("Oops...", "Ocurrio Algun Error!", "error");
                console.log(res.response);

            }
        },
        error: function (request, status, error) {
            sweetAlert("Oops...", "Ocurrio Algun Error!", "error");
            console.log(error.message);

        }
    });






});
$('#btnUpdDatoc').click(function () {
    updDatosc(4);
});

$('#btnGuardarImg').click(function () {

    guardarImagen();
})
$('#mCerrarModal').click(function () {
    limpiarModaltel();

})
$('#mbtnCerrarModal').click(function () {
    limpiarModaltel();

})

iniciar(1);
