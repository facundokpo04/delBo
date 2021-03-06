<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Pago extends CI_Controller {

    private $user;
    private $imagen2;

    public function __CONSTRUCT() {
        parent::__construct();

        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
        if($this->user['user'] === null) redirect('');
     
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('pagos/index.php');

        //footer
        $this->load->view('layout/footer');
    }

    public function get_Pagos() {

        $data = [];
        $data = new stdClass();
        try {

            $data = RestApi::call(
                RestApiMethod::GET,
                "pedidopago/listar1"
            );          
            
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_PagosFecha($fecha) {

        $data = [];
        $data = new stdClass();
        try {
            $data = RestApi::call(
                RestApiMethod::GET,
                "pedidopago/listarFecha/$fecha"
            );          
            
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    

    
}
