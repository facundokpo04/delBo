<?php // var_dump($model);          ?>
<ol class="breadcrumb">
    <li class="active">Empresa</li>
</ol>

<br/>
<div class="container-fluid">


    <div class="row">               
        <div class="col-lg-12">     
            <div class="panel panel-bluedark">
                <div class="panel-heading">Datos de la Empresa</div>
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
                <div class="panel-body">
                    <div id="sucursales" class="row">
                        <div class="col-xs-12">
                            <div class="box">
                                <div class="box-header">
                                    <h3 class="box-title">Sucursales</h3>
                                </div>
                                <!-- /.box-header -->
                                <div class="box-body table-responsive no-padding">
                                    <table  id="tbSucursales" class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nombre</th>
                                                <th>Cuilt</th>
                                                <th>Razon Social</th>
                                                <th>Direccion</th>

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

<script type="text/javascript">
    var baseurl = "<?php echo base_url(); ?>";
</script>