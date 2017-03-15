
$('#tblEmpleados').DataTable({
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/empleado/get_empleados/1",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
    },
    'columns': [
        {data: 'emp_id', 'sClass': 'dt-body-center'},
        {data: 'emp_legajo'},
        {data: 'per_nombre'},
        {data: 'per_email'},
        {data: 'suc_nombre'},
        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditEmpleado" onClick="selEmpleado(\'' + row.emp_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                        '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#" title="Eliminar Empleado" onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
                        '    </ul>' +
                        '</div>' +
                        '</span>';
                // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditEmpleado" onClick="selEmpleado(\'' + row.emp_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';


            }

        }

    ],
    "columnDefs": [
    ],
    "order": [[0, "asc"]],
});




//$.ajax({
//    type: "POST",
//    url: baseurl + "index.php/sucursales/get_sucursales/1",
//    dataType: 'json',
//    data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
//    success: function (res) {
//        debugger;
//        $('#mSucursal').append($('<option>', {
//            value: res.suc_id,
//            text: res.suc_nombre
//
//        }));
//    }
//})
selEmpleado = function (idEmpleados) {


    $.ajax({
        type: "POST",
        url: baseurl + "index.php/empleado/get_empleadoById/" + idEmpleados,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            var sucursales = res.sucursales.data;
            var empleados = res.empleados;
            $('#mNombre').val(empleados.per_nombre);
            $('#mEmail').val(empleados.per_email);
            $('#mDocumento').val(empleados.per_documento); //select
            //ajax para traer todos los estados
            $('#mNacionalidad').val(empleados.per_nacionalidad);
            $('#mPassword').val(empleados.per_password);
            $('#mPerfilUsuario').val(empleados.per_perfilUsuario);
            $('#mIdPersona').val(empleados.emp_idPersona);
            $('#mIdEmpleado').val(empleados.emp_id);
            $('#mLegajo').val(empleados.emp_legajo);
            $('#mCargo').val(empleados.emp_cargo);
            for (var i = 0; i < sucursales.length; i++) {

                $('#mSucursal').append($('<option>', {
                    value: sucursales[i].suc_id,
                    text: sucursales[i].suc_nombre
                }));
            }
            debugger;
            $('#mSucursal option[value=' + empleados.suc_id + ']').attr('selected', 'selected');
            $('#imagen').attr('src', '../assets/imagenes/empleado/' + empleados.emp_imagen);
//            $('#mImagen').val(res.cat_imagen);
        }
    });
};


$.validator.setDefaults( {
			submitHandler: function () {
				alert( "submitted!" );
			}
		} );
$("#FormCategoria").submit(function(e) {

alert('a');
    var inputFile = $('input#mImagen');
    
    var fileToUpload = inputFile[0].files[0];
    // make sure there is file to upload

    // provide the form data
    // that would be sent to sever through ajax
    if (fileToUpload != 'undefined' && false) {
        var formData = new FormData();
        formData.append('<?php echo $this->security->get_csrf_token_name(); ?>', '<?php echo $this->security->get_csrf_hash(); ?>');
        formData.append('per_nombre', $('#mNombre').val());
        formData.append('per_email', $('#mEmail').val());
        formData.append('per_documento', $('#mDocumento').val());
        formData.append('per_password', $('#mPassword').val());
        formData.append('per_nacionalidad', $('#mNacionalidad').val());
        formData.append('per_id', $('#mIdPersona').val());
        formData.append('emp_id', $('#mIdEmpleado').val());
        formData.append('per_perfilUsuario', $('#mPerfilUsuario').val());
        formData.append('emp_legajo', $('#mLegajo').val());
        formData.append('emp_cargo', $('#mCargo').val());
        formData.append('emp_idSucursal', $('#mSucursal').val());
        formData.append('emp_imagen', fileToUpload);
        $.ajax({
            url: baseurl + "index.php/empleado/updEmpleado",
            type: 'post',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {



                $('#mbtnCerrarModal').click();
                location.reload();
            }
        });
    }

});


$('#mCerrarModal,#mbtnCerrarModal').click(function () {

    $('#mNombre').val('');
    $('#mEmail').val('');
    $('#mDocumento').val(''); //select
    //ajax para traer todos los estados
    $('#mNacionalidad').val('');
    $('#mPassword').val('');
    $('#mPerfilUsuario').val('');
    $('#mIdPersona').val('');
    $('#mIdEmpleado').val('');
    $('#mLegajo').val('');
    $('#mCargo').val('');
})


$("#FormCategoria").validate({
    rules: {
       
        mNombre: {
            required: true,
            minlength: 4
        },
        password: {
            required: true,
            minlength: 5
        }
    },
    messages: {
        
        mNombre: {
            required: "Please enter a username",
            minlength: "Your username must consist of at least 2 characters"
        }
    },
    errorElement: "em",
    errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
            error.insertAfter(element.parent("label"));
        } else {
            error.insertAfter(element);
        }
    },
    highlight: function (element, errorClass, validClass) {
        $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
    }
});