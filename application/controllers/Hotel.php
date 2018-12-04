<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Hotel extends CI_Controller {

    private $user;
    private $imagen2;

    public function __CONSTRUCT() {
        parent::__construct();

        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
        if($this->user['user'] === null) redirect('');
     
        $this->load->model('HotelModel', 'hm');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('hotel/index.php');

        //footer
        $this->load->view('layout/footer');
    }

    public function get_hoteles() {

        $data = [];
        $data = new stdClass();
        try {
            $result = $this->hm->getAll();
            $total = $result->total;
            $data->data = $result->data;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    
    public function get_hotelById($idHotel) {



        try {
            $result = $this->hm->obtener($idHotel);
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

    
    public function updHotel() {
        $errors = array();
        $id = $this->input->post('hotel_id');
        $respuesta = [];
        $data = [
            'hotel_nombre' => $this->input->post('hotel_nombre'),
            'hotel_direccion' => $this->input->post('hotel_direccion'),
            'hotel_telefono' => $this->input->post('hotel_telefono'),
            'hotel_estado' => $this->input->post('hotel_estado')
        ];
        try {

            if (empty($id)) {
                $response = $this->hm->registrar($data);
                $respuesta = [
                    'estado' => true,
                    'response' => $response
                ];
            } else {
                $response = $this->hm->actualizar($data, $id);
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


    public function eliminar($idHotel){
              try {
            $result = $this->hm->eliminar($idHotel);
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
