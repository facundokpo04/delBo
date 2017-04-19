<?php // var_dump($model);            ?>
<ol class="breadcrumb">
    <li class="active">Empresa</li>
</ol>

<br/>
<div class="container-fluid">


    <div class="row">               
        <div class="col-lg-12">   
            <ul class="nav nav-tabs" role="tablist" id="paneles">
                <li class="active"><a href="#tabEmpresa" role="tab" data-toggle="tab"><h4 class="reviews text-capitalize">Datos Empresa</h4></a></li>                     
                <li><a href="#tabDatosContacto" role="tab" data-toggle="tab"><h4 class="reviews text-capitalize">Datos Contacto</h4></a></li>

            </ul> 
            <div class="tab-content" id="panelCont">
                <div class="tab-pane active" id="tabEmpresa">  
                    <div class="panel panel-bluedark">
                        <div class="panel-heading"></div>
                        <div class="panel-body">
                            <input id="idEmpresa" name="idEmpresa" style="display:none;">
                            <div class="col-lg-6 form-group">
                                <label for="">Razon Social</label>
                                <div class="input-group">
                                    <span class="input-group-addon cajaParametro"><i class="fa fa-building fa-fw"></i> </span><strong><input class="form-control" placeholder="" name="txtRazonSocial" id="txtRazonSocial" type="text" autocomplete="on" autofocus="" tabindex="1"  required=""></strong>
                                </div>
                            </div>     

                            <div class="col-lg-6 form-group">
                                <label for="">Rubro</label>
                                <div class="input-group">
                                    <span class="input-group-addon cajaParametro"><i class="fa fa-university fa-fw"></i> </span><input class="form-control" placeholder="" name="txtRubro" id="txtRubro" type="text" autocomplete="on" autofocus="" tabindex="2" >
                                </div>	
                            </div>     

                            <div class="col-lg-6 form-group">
                                <label for="">Cuilt</label>
                                <div class="input-group">
                                    <span class="input-group-addon cajaParametro"><i class="fa fa-building fa-fw"></i></span><input class="form-control" placeholder="" name="txtCuit" id="txtCuit" type="text" autocomplete="on" autofocus="" tabindex="3" required="">
                                </div>	
                            </div>     

                            <div class="col-lg-6 form-group">
                                <label for="">Domicilio</label>
                                <div class="input-group">
                                    <span class="input-group-addon cajaParametro"><i class="fa fa-map-marker fa-fw"></i> </span><input class="form-control" placeholder="" name="txtDomicilio" id="txtDomicilio" type="text" autocomplete="on" autofocus="" tabindex="4" >
                                </div>	
                            </div>     

                            <div class="col-lg-6 form-group">
                                <label for="">Teléfono</label>
                                <div class="input-group">
                                    <span class="input-group-addon cajaParametro"><i class="fa fa-phone-square fa-fw"></i> </span><input class="form-control" placeholder="" name="txtTelefono" id="txtTelefono" type="text" autocomplete="on" autofocus="" tabindex="5" >
                                </div>	
                            </div>     

                            <div class="col-lg-6 form-group">
                                <label for="">E-mail</label>
                                <div class="input-group">
                                    <span class="input-group-addon cajaParametro"><i class="fa fa-envelope-o fa-fw"></i></span><input class="form-control" placeholder="" name="txtEmail" id="txtEmail" type="text" autocomplete="on" autofocus="" tabindex="6" >
                                </div>	
                            </div>    

                            <div class="col-lg-6 form-group">
                                <label for="">País/Ubicación</label>
                                <div class="input-group">
                                    <span class="input-group-addon cajaParametro"><i class="fa fa-globe fa-fw"></i></span>
                                    <select name="txtPais" id="txtPais" class="form-control" tabindex="7">
                                        <option value="AR">Argentina</option>
                                        <option value="BL">Bolivia</option>
                                        <option value="BR">Brasil</option>
                                        <option value="CL">Chile</option>
                                        <option value="CO">Colombia</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CU">Cuba</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="ES">El Salvador</option>
                                        <option value="HO">Honduras</option>
                                        <option value="MX">México</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="PY">Paraguay</option>					
                                        <option value="PA">Panamá</option>					
                                        <option value="PE">Perú</option>							
                                        <option value="PR">Puerto Rico</option>					
                                        <option value="RD">República Dominicana</option>			
                                        <option value="UY">Uruguay</option>						
                                        <option value="VE">Venezuela</option>					
                                    </select>
                                </div>	
                            </div>

                        </div>
                        <div class="panel-footer clearfix">
                            <a class="btn btn-default pull-left" href="#"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</a>  	
                            <button type="button" class="btn btn-danger pull-right" id="btnUpdEmpresa" tabindex="17"><i class="fa fa-floppy-o" aria-hidden="true"></i>  Guardar</button>    
                        </div> 

                    </div>  
                </div>

                <div class="tab-pane" id="tabDatosContacto">                   
                    <div class="panel panel-bluedark">
                        <div class="panel-heading"></div>
                        <div class="panel-body">
                            <input id="idDcon" name="idDcon" style="display:none;">
                             <div class="col-lg-6 form-group">
                                <label for="">Facebook</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-facebook-official fa-fw"></i> </span><strong><input class="form-control" placeholder="" name="txtFacebook" id="txtFacebook" type="text" autocomplete="on" autofocus="" tabindex="1"  required=""></strong>
                                </div>
                            </div> 
                              <div class="col-lg-6 form-group">
                                <label for="">twitter</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa  fa-twitter fa-fw"></i> </span><strong><input class="form-control" placeholder="" name="txttwitter" id="txttwitter" type="text" autocomplete="on" autofocus="" tabindex="1"  required=""></strong>
                                </div>
                            </div> 
                              <div class="col-lg-6 form-group">
                                <label for="">Sitio Web</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa  fa-chrome fa-fw"></i> </span><strong><input class="form-control" placeholder="" name="txtwebsite" id="txtwebsite" type="text" autocomplete="on" autofocus="" tabindex="1"  required=""></strong>
                                </div>
                            </div> 
                              <div class="col-lg-6 form-group">
                                <label for="">Email Contacto</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa  fa-envelope-o fa-fw"></i> </span><strong><input class="form-control" placeholder="" name="txtemailc" id="txtemailc" type="text" autocomplete="on" autofocus="" tabindex="1"  required=""></strong>
                                </div>
                            </div> 
                              <div class="col-lg-6 form-group">
                                <label for="">Direccion Contacto</label>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa  fa-map-signs fa-fw"></i> </span><strong><input class="form-control" placeholder="" name="txtDireccion" id="txtDireccion" type="text" autocomplete="on" autofocus="" tabindex="1"  required=""></strong>
                                </div>
                            </div> 
                            
                        </div>
                        <div class="panel-footer clearfix">
                            <a class="btn btn-default pull-left" href="#"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</a>  	
                            <button type="button" class="btn btn-danger pull-right" id="btnUpdDatoc" tabindex="17"><i class="fa fa-floppy-o" aria-hidden="true"></i>  Guardar</button>    
                        </div> 
                        </div>
 
                </div>
               


            </div>
            
            


        </div>   
    </div>		
    <div class="row">	
        <div class="col-lg-6">
            <div class="panel panel-bluedark">
                <div class="panel-heading">Otros</div>
                <div class="panel-body">
                    <div class="col-lg-12 form-group">
                        <label for="">Logo</label>
                        <span class="label label-primary">La imagen debe ser de 76 x 76</span>     
                        <div class="input-group">
                            <span class="input-group-addon cajaParametro"><i class="fa fa-picture-o fa-fw"></i> </span>
                            <input class="form-control" type="file" name="txtLogo" id="txtLogo" tabindex="16">  
                        </div>  

                        <div class="form-group">    
                            <br>	
                            <div class="thumbnail">
                                <!--Foto de 76 x 76 -->
<!--									<img src="assets/img/Logo-impresion.png" alt="logo">-->
                                <img id="imagen" src="" alt="logo">	
                            </div>
                        </div> 
                    </div>
                </div>  
                <div style="height:35px;">
                </div>
                <div class="panel-footer clearfix">
                    <a class="btn btn-default pull-left" href="#"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</a>  	
                    <button type="button" class="btn btn-danger pull-right" id="btnGuardarImg" tabindex="17"><i class="fa fa-floppy-o" aria-hidden="true"></i>  Guardar</button>    
                </div> 
            </div>    
        </div>
        <div class="col-lg-6">
            <div class="panel panel-bluedark">
                <div class="panel-heading">                   
                     <button class="btn btn-primary" type="button" id="btnAgregarTel"  data-toggle="modal" data-target="#modalEditTelefono" >Agregar Telefono</button>
                </div>
                <div class="panel-body">
                    <div id="sucursales" class="row">
                        <div class="col-xs-12">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">Telefonos Contacto</h3>
                                </div>
                                <!-- /.box-header -->
                                <div class="box-body table-responsive no-padding">
                                    <table  id="tbTelefonos" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Numero</th>
                                                <th>Descripcion</th>
                                                <th>Tipo</th>                                               
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>

                                    </table>

                                </div>
                                <!-- /.box-body -->
                            </div>
                            <!-- /.box -->
                        </div>
                    </div>

                </div>	
            </div>    
        </div>

    </div>

</div>

<style>
    .example-modal .modal {
        position: relative;
        top: auto;
        bottom: auto;
        right: auto;
        left: auto;
        display: block;
        z-index: 1;
    }

    .example-modal .modal {
        background: transparent !important;
    }
</style>

<div class="example-modal modal fade" id="modalEditTelefono" tabindex="-1" >
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" id="mCerrarModal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Agregar/Actualizar Telefonos</h4>
                </div>
                <div class="modal-body">
                     <div role="tabpanel">
                             <form class="form-horizontal">
                        <!-- parametros ocultos -->
                        <input type="hidden" id="mIdtcon">

                        <div class="box-body">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Numero</label>
                                <div class="col-sm-9"> 
                                    <input type="text" name="mNumero" id="mNumero" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Descripci&oacute;n</label>
                                <div class="col-sm-9"> 
                                    <input type="text" name="mDescripcion" id="mDescripcion" class="form-control" placeholder="">
                                </div>
                            </div>                     
                            <div class="form-group">
                                <label class="col-sm-3 control-label">Tipo</label>
                                <div class="col-sm-9"> 
                                    <select name="mtipo" id="mtipo" class="form-control">                       
                                        <option value="1">WattApp</option>
                                        <option value="2">Fijo</option>
                                    </select>
                                </div>
                            </div>                         
                        </div>
                    </form>
                    
                </div>
                 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" id="mbtnCerrarModal" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-info" id="mbtnUpdTelefono">Actualizar</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
</div>
<script type="text/javascript">
    var baseurl = "<?php echo base_url(); ?>";
</script>