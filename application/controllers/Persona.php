<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Persona extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();
       $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
        if($this->user['user'] === null) redirect('');
//
        $this->load->model('PersonaModel', 'pm');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('persona/index.php');

        //footer
        $this->load->view('layout/footer');
    }

    public function get_personas() {

        $data = [];
        $total = 0;
        $limite = 10;
        $data = new stdClass();
        try {
//            $result = $this->pm->getAll($limite, $p);

            $result = $this->pm->getAll2();

            $total = $result->total;
            $data->data = $result->data;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_personaById($idPersona) {

        try {
            $result = $this->pm->obtener($idPersona);
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

    public function updPersona() {

        $id = $this->input->post('per_id');
        $errors = array();
        $data = [
            'per_nombre' => $this->input->post('per_nombre'),
            'per_email' => $this->input->post('per_email'),
            'per_documento' => $this->input->post('per_documento'),
            'per_password' => $this->input->post('per_password'),
            'per_Nacionalidad' => $this->input->post('per_Nacionalidad'),
            'per_id' => $this->input->post('per_id'),
            'per_perfilUsuario' => $this->input->post('per_perfilUsuario')
        ];


        try {

            if (empty($id)) {

				unset($data['per_id']);
                $response = $this->pm->registrar($data);
                $respuesta = [
                    'estado' => true,
                    'response' => $response->result
                ];
            } else {

                $response = $this->pm->actualizar($data, $id);

                $respuesta = [
                    'estado' => true,
                    'response' => $id
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

    public function eliminar($idPersona) {

        try {
            $result = $this->pm->eliminar($idPersona);
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
