<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Pedido extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();
        $this->load->model('PedidoModel', 'pm');
        $this->load->model('PedidoDetalleModel', 'dm');
        $this->load->model('PromoPedidoModel', 'dp');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        $this->load->view('pedido/index.php');
        $this->load->view('layout/footer');
    }

    public function get_pedidos($limite = 5, $p = 0) {

        $data = [];
        $total = 0;
        $limite = 10;
        $data = new stdClass();
        try {
            $result = $this->pm->getAll();

            $total = $result->total;
            $data->data = $result->data;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_pedidosFecha($fecha) {

        $data = [];
        $total = 0;
        $limite = 10;
        $data = new stdClass();
        try {
            $result = $this->pm->getAllfecha($fecha);

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
            $respuesta = [
                'estado' => true,
                'response' => $result
            ];
        } catch (Exception $e) {
            $respuesta = [
                'estado' => false,
                'response' => $e->getMessage()
            ];
        }
        echo json_encode($respuesta);
    }

    public function get_detalleById($idPedido) {
        try {
            $result = $this->dm->obtenerPed($idPedido);
            $respuesta = [
                'estado' => true,
                'response' => $result
            ];
        } catch (Exception $e) {
            $respuesta = [
                'estado' => false,
                'response' => $e->getMessage()
            ];
        }
        echo json_encode($respuesta);
    }

    public function get_detallePromoById($idPedido) {
        try {
            $result = $this->dp->getAllPed($idPedido);
            $respuesta = [
                'estado' => true,
                'response' => $result
            ];
        } catch (Exception $e) {
            $respuesta = [
                'estado' => false,
                'response' => $e->getMessage()
            ];
        }
        echo json_encode($respuesta);
    }

    public function updPedido() {
        $id = $this->input->post('pe_id');
        $errors = array();
        $data = [
            'pe_idEstado' => $this->input->post('pe_idEstado'),
            'pe_idEmpleado' => $this->input->post('pe_idEmpleado'),
            'pe_motivoCancelado' => $this->input->post('pe_motivoCancelado'),
        ];
        try {
            $response = $this->pm->actualizar($data, $id);
            $respuesta = [
                'estado' => true,
                'response' => $response
            ];
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
                $respuesta = [
                    'estado' => false,
                    'validator' => true,
                    'response' => $errors
                ];
            } else {
                $respuesta = [
                    'estado' => false,
                    'validator' => false,
                    'response' => $e->getMessage()
                ];
            }
        }

        echo json_encode($respuesta);
    }

    public function getCliente($idPedido) {
        try {
            $result = $this->pm->obtenerCliente($idPedido);
            $respuesta = [
                'estado' => true,
                'response' => $result
            ];
        } catch (Exception $e) {
            $respuesta = [
                'estado' => false,
                'response' => $e->getMessage()
            ];
        }
        echo json_encode($respuesta);
    }

    public function getEmpleado($idPedido) {
        try {
            $result = $this->pm->obtenerEmpleado($idPedido);
            $respuesta = [
                'estado' => true,
                'response' => $result
            ];
        } catch (Exception $e) {
            $respuesta = [
                'estado' => false,
                'response' => $e->getMessage()
            ];
        }
        echo json_encode($respuesta);
    }

    public function getPedido($idPedido) {
        try {
            $result = $this->pm->obtener($idPedido);
            $respuesta = [
                'estado' => true,
                'response' => $result
            ];
        } catch (Exception $e) {
            $respuesta = [
                'estado' => false,
                'response' => $e->getMessage()
            ];
        }
        echo json_encode($respuesta);
    }

}
