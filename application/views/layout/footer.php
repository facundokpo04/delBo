 </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <div class="pull-right hidden-xs">
      <b>Version</b> 1.0.1
    </div>
    <strong>Copyright &copy; 2016-2017 <a href="">Iguazu Sistemas</a>.</strong> All rights
    reserved.
  </footer>
</div>
<!-- ./wrapper -->

<!-- jQuery 2.2.3 -->
<script src="<?php echo base_url(); ?>assets/plugins/jQuery/jquery-2.2.3.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.6 -->
<script src="<?php echo base_url(); ?>assets/bootstrap/js/bootstrap.min.js"></script>
<!-- Morris.js charts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="<?php echo base_url(); ?>assets/plugins/morris/morris.min.js"></script>
<!-- Sparkline -->
<script src="<?php echo base_url(); ?>assets/plugins/sparkline/jquery.sparkline.min.js"></script>
<!-- jvectormap -->
<script src="<?php echo base_url(); ?>assets/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script src="<?php echo base_url(); ?>assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
<!-- jQuery Knob Chart -->
<script src="<?php echo base_url(); ?>assets/plugins/knob/jquery.knob.js"></script>
<!-- daterangepicker -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js"></script>
<script src="<?php echo base_url(); ?>assets/plugins/daterangepicker/daterangepicker.js"></script>
<!-- datepicker -->
<script src="<?php echo base_url(); ?>assets/plugins/datepicker/bootstrap-datepicker.js"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="<?php echo base_url(); ?>assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
<!-- Slimscroll -->
<script src="<?php echo base_url(); ?>assets/plugins/slimScroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="<?php echo base_url(); ?>assets/plugins/fastclick/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="<?php echo base_url(); ?>assets/dist/js/app.min.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="<?php echo base_url(); ?>assets/dist/js/pages/dashboard.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="<?php echo base_url(); ?>assets/dist/js/demo.js"></script>

<!-- DataTables -->
<script src="<?php echo base_url(); ?>assets/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?php echo base_url(); ?>assets/plugins/datatables/dataTables.bootstrap.min.js"></script>


<script src="<?php echo base_url(); ?>assets/plugins/datetimepicker/bootstrap-datetimepicker.min.js"></script>

<!-- sweetalert -->
<script src="<?php echo base_url(); ?>assets/dist/js/sweetalert.min.js"></script>
//iniciliza todo
<script   type="text/javascript" src="<?php echo base_url('assets/js/home.js') ?>"></script>


 


<?php if($this->uri->segment(1)=='categoria'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/categoria.js') ?>"></script>
<?php }?>
<?php if($this->uri->segment(1)=='persona'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/persona.js') ?>"></script>
<?php }?>
<?php if($this->uri->segment(1)=='empresa'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/empresa.js') ?>"></script>
<?php }?>
<?php if($this->uri->segment(1)=='sucursal'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/sucursal.js') ?>"></script>
<?php }?>
<?php if($this->uri->segment(1)=='empleado'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/empleado.js') ?>"></script>
<?php }?>
<?php if($this->uri->segment(1)=='componente'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/componente.js') ?>"></script>
<?php }?>
<?php if($this->uri->segment(1)=='variedad'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/variedad.js') ?>"></script>
<?php }?>

<?php if($this->uri->segment(1)=='producto'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/producto.js') ?>"></script>
<?php }?>
<?php if($this->uri->segment(1)=='promo'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/promo.js') ?>"></script>
<?php }?>
<?php if($this->uri->segment(1)=='pedido'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/pedidos.js') ?>"></script>
<?php }?>
<?php if($this->uri->segment(1)=='aderezo'){?>
<script   type="text/javascript" src="<?php echo base_url('assets/js/aderezo.js') ?>"></script>
<?php }?>

</body>
</html>

