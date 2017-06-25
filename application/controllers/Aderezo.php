<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Aderezo extends CI_Controller {

    private $user;
    private $imagen2;

    public function __CONSTRUCT() {
        parent::__construct();

        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
        if($this->user['user'] === null) redirect('');
     
        $this->load->model('AderezoModel', 'am');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('aderezo/index.php');

        //footer
        $this->load->view('layout/footer');
    }

    public function get_aderezos() {

        $data = [];
        $data = new stdClass();
        try {
            $result = $this->am->getAll();
            $total = $result->total;
            $data->data = $result->data;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    
    public function get_aderezoById($idAderezo) {



        try {
            $result = $this->am->obtener($idAderezo);
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

    
    public function updAderezo() {
        $errors = array();
        $id = $this->input->post('ade_id');
        $respuesta = [];
        $data = [
            'ade_nombre' => $this->input->post('ade_nombre'),
            'ade_idEstado' => $this->input->post('ade_idEstado'),
        ];
        try {

            if (empty($id)) {
                $response = $this->am->registrar($data);
                $respuesta = [
                    'estado' => true,
                    'response' => $response
                ];
            } else {
                $response = $this->am->actualizar($data, $id);
                $respuesta = [
                    'estado' => true,
                    'response' => $response
                ];
            }
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


    public function eliminar($idAderezo){
              try {
            $result = $this->am->eliminar($idAderezo);
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
//           

        echo json_encode($respuesta);
    }
    
}
