<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Pedido extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();

//        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
//        if($this->user['user'] === null) redirect('');
//
        $this->load->model('PedidoModel', 'pm');
           $this->load->model('PedidoDetalleModel', 'dm');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('pedido/index.php');

        //footer
        $this->load->view('layout/footer');
    }

    public function get_pedidos($limite = 5, $p = 0) {

        $data = [];
        $total = 0;
        $limite = 10;
        $data = new stdClass();
        try {
            $result = $this->pm->getAll($limite, $p);

            $total = $result->total;
            $data->data = $result->data;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_pedidosById($idPedido) {



        try {
            $result = $this->pm->obtener($idPedido);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }
    public function get_detalleById($idPedido) {



        try {
            $result = $this->dm->obtenerPed($idPedido);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function updPedido() {

        $id = $this->input->post('pe_id');
        $errors = array();
        $data = [
            'pe_idEstado' => $this->input->post('pe_idEstado'),
         
        ];


        try {

       

               $a= $this->pm->actualizar($data, $id);
        
             
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
            }
        }

        echo json_encode($errors);
    }

    public function guardar() {
        
    }
    
    public function getCliente($idPedido){               
        try {
            $result = $this->pm->obtenerCliente($idPedido);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }
    
     public function getPedido($idPedido){               
        try {
            $result = $this->pm->obtener($idPedido);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }
    
    public function verDetalle($id) {
          $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('pedido/detalle.php',$id);

        //footer
        $this->load->view('layout/footer');
        
    }
    public function eliminar($id) {
        
        
      
    }

}
