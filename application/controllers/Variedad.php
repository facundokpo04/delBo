<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Variedad extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();

//        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
//        if($this->user['user'] === null) redirect('');
//
        $this->load->model('VariedadModel', 'cm');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('variedad/index.php');

        //footer
        $this->load->view('layout/footer');
    }

    public function get_variedades($limite = 5, $p = 0) {

        $data = [];
        $total = 0;
        $limite = 10;
        $data = new stdClass();
        try {
            $result = $this->cm->getAll($limite, $p);
            $total = $result->total;
            $data->data = $result->data;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_variedadById($idVariedad) {



        try {
            $result = $this->cm->obtener($idVariedad);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function updVariedad() {


        $errors = array();

        $id = $this->input->post('var_id');


        $data = [
            'var_nombre' => $this->input->post('var_nombre'),
            'var_descripcion' => $this->input->post('var_descripcion'),
            'var_tipo' => $this->input->post('var_tipo'),
            'var_precio' => $this->input->post('var_precio'),
            'var_idProducto' => $this->input->post('var_idProducto')
        ];
        try {

            if (empty($id)) {
                $this->cm->registrar($data);
            } else {
                $this->cm->actualizar($data, $id);
            }
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
            }
        }

        echo json_encode($errors);
    }

    public function guardar() {
        
    }

    public function eliminar($id) {
        
    }

}
