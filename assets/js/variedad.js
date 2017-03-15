


$('#tblVariedades').DataTable({
    "lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "Todo"]],
    'paging': true,
    'info': true,
    'filter': true,
    'stateSave': true,
    'ajax': {
        "url": baseurl + "index.php/variedad/get_variedades/",
        "type": "POST",
        "dataType": 'json',
        "data": {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},

    },
    'columns': [

        {data: 'var_id', 'sClass': 'dt-body-center'},
        {data: 'var_nombre'},
        {data: 'var_descripcion'},
        {data: 'var_tipo'},
        {data: 'var_precio'},
        {"orderable": true,
            render: function (data, type, row) {

                return '<span class="pull-right" >' +
                        '<div class="dropdown">' +
                        '  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                        '    Acciones' +
                        '  <span class="caret"></span>' +
                        '  </button>' +
                        '    <ul class="dropdown-menu pull-right" aria-labelledby="dropdownMenu1">' +
                        '    <li><a href="#" title="Editar informacion" data-toggle="modal" data-target="#modalEditVariedad" onClick="selVariedad(\'' + row.var_id + '\');"><i style="color:#555;" class="glyphicon glyphicon-edit"></i> Editar</a></li>' +
                        '    <li><a href="#"><i class="glyphicon glyphicon-eye-open" style="color:#006699"></i> Ver</a></li>' +
                        '    <li><a href="#" title="Eliminar Variedad" onClick=""><i style="color:red;" class="glyphicon glyphicon-remove"></i> Eliminar</a></li>' +
                        '    </ul>' +
                        '</div>' +
                        '</span>';
                // '<a href="#" class="btn btn-block btn-primary btn-sm" style="width: 80%;" data-toggle="modal" data-target="#modalEditVariedad" onClick="selVariedad(\'' + row.var_id + '\');"><i class="fa fa-fw fa-edit"></i></a></td>';


            }

        }

    ],
    "columnDefs": [
    ],
    "order": [[0, "asc"]],
});


selVariedad = function (idVariedades) {


    $.ajax({
        type: "POST",
        url: baseurl + "index.php/variedad/get_variedadById/" + idVariedades,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {


            $('#mDescripcion').val(res.var_descripcion);
            $('#mNombre').val(res.var_nombre);
            $('#mTipo').val(res.var_tipo);//select
            $('#mPrecio').val(res.var_precio);//select
            //ajax para traer todos los estados
            $('#mIdVariedad').val(res.var_id);

        }
    });

};
$('#mbtnCerrarModal').click(function () {
    
            $('#mDescripcion').val('');
            $('#mNombre').val('');
            $('#mEstado').val('1');//select
            //ajax para traer todos los estados
            $('#mIdVariedad').val('');
})
$('#mCerrarModal').click(function () {
    
            $('#mDescripcion').val('');
            $('#mNombre').val('');
            $('#mEstado').val('1');//select
            //ajax para traer todos los estados
            $('#mIdVariedad').val('');
})

$('#mbtnUpdVariedad').click(function () {
  

        $.ajax({
            type: "POST",
            url: baseurl + "index.php/variedad/updVariedad",
            dataType: 'json',
            data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>',
                var_nombre: $('#mNombre').val(),
                var_descripcion: $('#mDescripcion').val(),
                var_tipo: $('#mTipo').val(),
                var_precio: $('#mPrecio').val(),
                var_idProducto: $('#mIdProducto').val(),
                var_id: $('#mIdVariedad').val()
            },
            success: function (res) {


                  var a = 0;
                $('#mbtnCerrarModal').click();

                location.reload();
            }
        });


    
    

  
});


         