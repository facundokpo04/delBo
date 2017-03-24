



iniciar = function (idEmpresa) {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/empresa/get_EmpresaById/" + idEmpresa,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            $('#idEmpresa').val(res.emp_id);
            $('#txtRazonSocial').val(res.razonSocial);
            $('#txtRubro').val(res.Rubro);
            $('#txtCuit').val(res.cuilt);
            $('#txtDomicilio').val(res.Domicilio);
            $('#txtTelefono').val(res.telefono);
            $('#txtEmail').val(res.Email);//select
            //ajax para traer todos los estados
            $('#txtPais').val(res.Pais);
            $('#imagen').attr('src', './assets/imagenes/empresa/' + res.logo);
            ;

        }
    });


    $('#tbSucursales').DataTable({
        "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
        'paging': true,
        'info': true,
        'filter': true,
        'stateSave': true,
        'ajax': {
            "url": baseurl + "index.php/sucursal/get_sucursales/1",
            "type": "POST",
            "dataType": 'json',
            "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

        },
        'columns': [

            {data: 'suc_id', 'sClass': 'dt-body-center'},
            {data: 'suc_nombre'},
            {data: 'suc_cuit'},
            {data: 'suc_razonSocial'},
            {data: 'suc_direccion'},
            {"orderable": true,
                render: function (data, type, row) {
                    debugger;
                    return '<span class="pull-right" >' +
                            '<div class="dropdown">' +
                            '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                            '    Acciones' +
                            '  <span class="caret"></span>' +
                            '  </button>' +
                            '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                            '    <li><a href="#" title="Editar informacion"   onClick="cargarDataSucursal(\'' + row.suc_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                            '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                            '    <li><a href="#" title="Eliminar Sucursal" onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
                            '    </ul>' +
                            '</div>' +
                            '</span>';
                    // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';


                }

            }

        ],
        "columnDefs": [

            {
                "targets": [1],
                "data": "suc_nombre",
                "orderData": [1, 0],
                "render": function (data, type, row) {
                    return "<span style='color:#006699;'><i class='fa fa-home'></i>&nbsp;&nbsp;" + data + "</span>"

                }
            },
        ],
        "order": [[0, "asc"]],
    });



};

$('#btnUpdEmpresa').click(function () {
    debugger;
    var inputFile = $('input#txtLogo');

    var fileToUpload = inputFile[0].files[0];
    // make sure there is file to upload

    // provide the form data
    // that would be sent to sever through ajax
    if (fileToUpload !== 'undefined') {
        var formData = new FormData();
        formData.append('<?php echo $this->security->get_csrf_token_name(); ?>', '<?php echo $this->security->get_csrf_hash(); ?>');
        formData.append('razonSocial', $('#txtRazonSocial').val());
        formData.append('Rubro', $('#txtRubro').val());
        formData.append('cuilt', $('#txtCuit').val());
        formData.append('Domicilio', $('#txtDomicilio').val());
        formData.append('telefono', $('#txtTelefono').val());
        formData.append('Email', $('#txtEmail').val());
        formData.append('Pais', $('#txtPais').val());
        formData.append('emp_id', $('#idEmpresa').val());
        formData.append('logo', fileToUpload);

        // now upload the file using $.ajax
        $.ajax({
            url: baseurl + "index.php/empresa/updEmpresa",
            type: 'post',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {

                location.reload();
            }
        });
    } else {
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




                location.reload();
            }
        });


    }



});
iniciar(1);
