<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="<?php echo base_url(); ?>assets/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
                <p>Alexander Pierce</p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
                <span class="input-group-btn">
                    <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
            <li class="header">MAIN NAVIGATION</li>
            <li class="active treeview">
                <a href="#">
                    <i class="fa fa-dashboard"></i> <span>Administrador</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">              
                    <li><a href="persona"><i class="fa fa-circle-o"></i> Persona</a></li>
                    <li><a href="empleado"><i class="fa fa-circle-o"></i> Empleado</a></li>
                </ul>
            </li>
               <li class="active treeview">
                <a href="#">
                    <i class="fa fa-book"></i> <span>Menu </span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li class="active"><a href="categoria"><i class="fa fa-circle-o"></i> Categor&iacute;a</a></li>
                    <li class="active"><a href="producto"><i class="fa fa-circle-o"></i> Producto</a></li>
                    <li class="active"><a href="componente"><i class="fa fa-circle-o"></i> Componente </a></li>                   
                    <li class="active"><a href="promo"><i class="fa fa-circle-o"></i> Promos </a></li>  
                </ul>
            </li>
              <li class="active treeview">
                <a href="#">
                    <i class="fa fa-cart-plus"></i> <span>Pedidos </span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li class="active"><a href="pedido"><i class="fa fa-calendar-check-o"></i> Tablero</a></li>                   
                </ul>
            </li>
            <li class="active treeview">
                <a href="#">
                    <i class="fa fa-building"></i> <span>Empresa</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li class="active"><a href="empresa"><i class="fa fa-cogs"></i>Configuracion Empresa</a></li>
                    <li><a href="sucursal"><a href="sucursal"><i class="fa fa-home"></i> Sucursales</a></li>
                </ul>
            </li>
            <li><a href="documentation/index.html"><i class="fa fa-book"></i> <span>Documentation</span></a></li>           
            <li class="header">LABELS</li>
            <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
            <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
            <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
        </ul>
    </section>
    <!-- /.sidebar -->
</aside>
<div class="content-wrapper">
