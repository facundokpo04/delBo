</div>


<!-- /.container -->


<hr>

<!-- Footer -->

<footer class="text-center">

    <div class="footer-above">

        <div class="row" >
            <div class="footer-col col-md-4">

                <div class="widget"><div class="inner">
                        <?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('subfooterleft')) :
                            ?>
                        <?php endif; ?>
                    </div></div>
            </div>
            <div class="footer-col col-md-4">
                <div class="widget"><div class="inner">
                        <?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('subfootercenter')) :
                            ?>
                        <?php endif; ?>
                    </div></div>
            </div>
            <div class="footer-col col-md-4">
                <div class="widget"><div class="inner">
                        <?php if (!function_exists('dynamic_sidebar') || !dynamic_sidebar('subfooterright')) :
                            ?>
                        <?php endif; ?>
                    </div></div>
            </div>

            <!--                <div class="footer-col col-md-4">
                                <h3>Tiempo en Iguazu</h3>
                                <div class='center-block' id="TT_yiGwbxtBtWzs8ehUKASEEkE1EzaUTYWlLYkdEZyIq1DoGImI3">El tiempo - Tutiempo.net</div>
                            </div>
                            <div class="footer-col col-md-4">
                                <h3>Comparti Nuestra Pagina</h3>
                                <div class="fb-like" data-href="https://www.facebook.com/trasladoscataratas/" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                            </div>
            -->
        </div>

        <div class="row">
            <div class="footer-col col-md-4">
                <h3>Localizacion</h3>
                <p>JJ valle 167
                    <br>Puerto Iguazu - Misiones</p>
            </div>
            <div class="footer-col col-md-4">
                <h3>Nuestras Redes Sociales</h3>
                <ul class="list-inline">
                    <li>
                        <a href="https://www.facebook.com/trasladoscataratas/" class="btn-social btn-outline"><span class="sr-only">Facebook</span><i class="fa fa-fw fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://plus.google.com/u/0/b/114930650887332202860/" class="btn-social btn-outline"><span class="sr-only">Google Plus</span><i class="fa fa-fw fa-google-plus"></i></a>
                    </li>
                    <li>
                        <a href="#" class="btn-social btn-outline"><span class="sr-only">Twitter</span><i class="fa fa-fw fa-twitter"></i></a>
                    </li>                        
                </ul>
            </div>
            <div class="footer-col col-md-4">
                <h3>Contacto</h3>

                <p><i class="fa fa-fw fa-phone-square"></i> 3757527299<br></p>
                <p><i class="fa fa-fw fa-whatsapp"></i> +5493757527299</p>


            </div>
        </div>

    </div>
    <div class="footer-below">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    Copyright &copy; Sofworks Iguazu 2017
                </div>
            </div>
        </div>
    </div>
   
</footer>

<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css">


<div id="fb-root"></div>
<script type='text/javascript' async>(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
            return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.10";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>
 <?php wp_footer(); ?>
</body>

</html>