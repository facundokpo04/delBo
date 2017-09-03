


function fechaHoyMenu() {



    var f = new Date();
    var fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();


    return fecha;
}
salir = function () {

    $.ajax({
        type: "POST",
        url: baseurl + "index.php/auth/logout",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {
            window.location.href = '';

        },
        error: function (request, status, error) {

//            window.location.href = '';
            console.log(error.message);
            //direccionar al login?


        }
    });


}
getUsuario = function () {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/auth/getUser",
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {



            $('#nombreEmp1').append(res.NombreCompleto);

            $('#detalleEmp').append(res.NombreCompleto + ' - Administrador' +
                    '<small>Administrador del Sistema</small>');
            $('#nombreEmp2').append(res.NombreCompleto);
            getUsuarioimg(res.id);



        },
        error: function (request, status, error) {

            console.log(error.message);
            //direccionar al login?


        }
    });


}
getUsuarioimg = function (idPersona) {
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/empleado/get_empleadoByIdPer/" + idPersona,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {


            $('#empimg').attr('src', './assets/imagenes/empleado/' + res.response.emp_imagen);
            $('#emplimg1').attr('src', './assets/imagenes/empleado/' + res.response.emp_imagen);
            $('#emplimg2').attr('src', './assets/imagenes/empleado/' + res.response.emp_imagen);



        },
        error: function (request, status, error) {


            console.log(error.message);



        }
    });


};

getPedidosCant = function (fechamenu) {

    var cantpedidos = 0;
    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/get_pedidosFechaPed/" + fechamenu,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {

            $('#cantPedidos').empty();
            $('#cantPedidostext').empty();

            $('#cantPedidos').append(parseInt(res));
            $('#cantPedidostext').append('Tienes ' + (isNaN(parseInt(res)) ? '0' : parseInt(res)) + ' Pedidos Para Enviar');
            cantpedidos = (isNaN(parseInt(res)) ? 0 : parseInt(res))
            if (cantpedidos > sessionStorage.pedidosAct) {
                sessionStorage.pedidosAct = cantpedidos;
                playSound();

                Push.create("Nuevo Pedido", {
                    body: "Pedidos Pendientes: " + cantpedidos,
                    icon: 'assets/logo1.png',
                    timeout: 30000,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });

            } else {
                sessionStorage.pedidosAct = cantpedidos;
            }
        },
        error: function (request, status, error) {


            console.log(error.message);
            //direccionar al login?


        }
    });


}
getPedidosCantPre = function (fechamenu) {


    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/get_pedidosFechaPre/" + fechamenu,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {


            $('#cantPedidosPre').empty();
            $('#cantPedidosPretext').empty();

            $('#cantPedidosPre').append(parseInt(res));
            $('#cantPedidosPretext').append('Esta Preparando ' + (isNaN(parseInt(res)) ? '0' : parseInt(res)) + ' Pedidos');

        },
        error: function (request, status, error) {


            console.log(error.message);
            //direccionar al login?


        }
    });


}

getPedidosCantEn = function (fechamenu) {


    $.ajax({
        type: "POST",
        url: baseurl + "index.php/pedido/get_pedidosFechaEnv/" + fechamenu,
        dataType: 'json',
        data: {'<?php echo $this->security->get_csrf_token_name(); ?>': '<?php echo $this->security->get_csrf_hash(); ?>'},
        success: function (res) {


            $('#cantPedidosF').empty();
            $('#cantPedidosFtext').empty();

            $('#cantPedidosF').append(parseInt(res));
            $('#cantPedidosFtext').append('A Finalizado ' + (isNaN(parseInt(res)) ? '0' : parseInt(res)) + ' Pedidos');

        },
        error: function (request, status, error) {


            console.log(error.message);
            //direccionar al login?


        }
    });


}



var fechamenu = fechaHoyMenu();
if (!sessionStorage.pedidosAct) {
    sessionStorage.pedidosAct = 0;
}
getPedidosCant(fechamenu);
getPedidosCantEn(fechamenu);
getPedidosCantPre(fechamenu);
getUsuario();
Push.Permission.request(onGranted, onDenied);
function onGranted() {}
;
function onDenied() {}
;

var int2 = self.setInterval("refreshmenu()", 60000);
function refreshmenu()
{
    fechamenu = fechaHoyMenu();
    getPedidosCant(fechamenu);
    getPedidosCantEn(fechamenu);
    getPedidosCantPre(fechamenu);
}

function playSound() {
    var audio = new Audio('assets/sonidos/coin.mp3');
    audio.play();
}

