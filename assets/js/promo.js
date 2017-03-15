
$('#txtFechaInicio').datepicker({
    autoclose: true,
    format: 'dd/mm/yyyy'
});
$('#txtFechaFin').datepicker({
    autoclose: true,
    format: 'dd/mm/yyyy'
});




function VerForm() {
    $("#promo").show();// Mostramos el formulario
    $("#herramientas").hide();// ocultamos el boton nuevo
    $("#promos").hide();
}


function OcultarForm() {
    $("#promo").hide();// Mostramos el formulario
    $("#herramientas").show();// ocultamos el boton nuevo
    $("#promos").show();
}



function VerFormAgregar( ) {
    $("#promo").show();// Mostramos el formulario
    $("#paneles").hide();
    $("#panelCont").hide();
    $("#herramientas").hide();// ocultamos el boton nuevo
    $("#promos").hide();


}



function cargarDataPromo(idPromo) {// funcion que llamamos del archivo ajax/CategoriaAjax.php linea 52
    VerForm();

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/promo/get_promoById/" + idPromo,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            $('#txtNombre').val(res.pro_nombre);
            $('#txtDescripcion').val(res.pro_descripcion);

            //ajax para traer todos los estados
            $('#txtPrecio').val(res.pro_precio);
            $('#txtDescuento').val(res.pro_descuento);
            $('#txtFechaInicio').val(res.pro_FechaInicio);
            $('#txtFechaFin').val(res.pro_FechaFin);
            $('#imagen').attr('src', '../assets/imagenes/promo/' + res.pro_imagen);
            $('#idPromo').val(res.pro_id);

        }
    });


//    CargarComponetesAgregar(idPromo);




}




function actualizarPromo() {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/promo/updPromo",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
            pro_nombre: $('#txtNombre').val(),
            pro_descripcion: $('#txtDescripcion').val(),
            pro_descuento: $('#txtDescuento').val(),
            pro_precio: $('#txtPrecio').val(),
            pro_FechaInicio: $('#txtFechaInicio').val(),
            pro_FechaFin: $('#txtFechaFin').val(),
            pro_id: $('#idPromo').val()


        },
        success: function (res) {

            guardarImagen();

        }
    });
}

/**
 * Comment
 */
function guardarImagen() {
    var inputFile = $('input#pImagen');

    var fileToUpload = inputFile[0].files[0];
    // make sure there is file to upload

    // provide the form data
    // that would be sent to sever through ajax
    if (fileToUpload != 'undefined') {
        var formData = new FormData();
        formData.append('pro_imagen', fileToUpload);
        formData.append('pro_id', $('#idPromo').val());



        // now upload the file using $.ajax
        $.ajax({
            url: baseurl + "index.php/promo/updImagen",
            type: 'post',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            success: function (res) {

                $('#imagen').attr('src', '../assets/imagenes/promo/' + res.pro_Imagen);

            }
        });
    }
}


$('#agregarCom').click(function () {


    CargarComponetesAgregar($('#idPromo').val());

    $('#modalAgregarComp').modal('show');


})




OcultarForm();

$('#tbPromos').DataTable({
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/promo/get_Promos/4",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
    },
    'columns': [
        {data: 'pro_id', 'sClass': 'dt-body-center'},
        {data: 'pro_nombre'},
        {data: 'pro_descripcion'},
        {data: 'pro_descuento'},
        {data: 'pro_precio'},
        {data: 'pro_FechaInicio'},
        {data: 'pro_FechaFin'},
        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Editar informacion"   onClick="cargarDataPromo(\'' + row.pro_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                        '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#" title="Eliminar Promo" onClick="eliminarPromo(\'' + row.pro_id + '\');"><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
                        '    </ul>' +
                        '</div>' +
                        '</span>';
                // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditCategoria" onClick="selCategoria(\'' + row.cat_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';
                ocultarForm();
            }

        }

    ],
    "columnDefs": [
        {
            "targets": [1],
            "data": "pro_nombre",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span style='color:#006699;'></i>&nbsp;&nbsp;" + data + "</span>"

            }
        },
        {
            "targets": [4],
            "data": "pro_precio",
            "orderData": [1, 0],
            "render": function (data, type, row) {
                return "<span ></i>$&nbsp;&nbsp; " + data + "</span>"

            }
        }
    ],
    "order": [[0, "asc"]],
});
$('#mbtnUpdPromo').click(function () {

    actualizarPromo();


});
$('#btnAgregarPromo').click(function () {

    VerFormAgregar();



})

$('#btnGuardarImg').click(function () {

    guardarImagen();

})/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


