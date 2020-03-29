<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Publicidad extends CI_Controller {

    private $user;
    private $imagen2;

    public function __CONSTRUCT() {
        parent::__construct();

       $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
        if($this->user['user'] === null) redirect('');
     
        $this->load->model('PublicidadModel', 'pm');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('publicidad/index.php');

        //footer
        $this->load->view('layout/footer');
    }

    public function get_publicidades() {

        $data = [];
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

    
    public function get_publicidadById($idPublicidad) {



        try {
            $result = $this->pm->obtener($idPublicidad);
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

    
    public function updPublicidad() {
        $errors = array();
        $id = $this->input->post('pub_id');
       
        $respuesta = [];
//        $FI = date("Y-m-d", strtotime($this->input->post('pub_FechaInicio')));
//        $FF = date("Y-m-d", strtotime($this->input->post('pub_FechaFin')));
        
        $data = [
            'pub_nombre' => $this->input->post('pub_nombre'),
            'pub_Estado' => $this->input->post('pub_Estado'),
            'pub_Orden' => $this->input->post('pub_Orden'),
            'pub_Imagen' => $this->input->post('pub_Imagen'),
        ];
        try {

            if (empty($id)) {
                $response = $this->pm->registrar($data);
                $respuesta = [
                    'estado' => true,
                    'response' => $response
                ];
            } else {
                $response = $this->pm->actualizar($data, $id);
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

    public function updImagen() {

     
        $config = [
            "upload_path" => "./assets/imagenes/publicidad",
            "allowed_types" => "png|jpg"
        ];
        $errors = array();

        $this->load->library("upload", $config);

        if ($this->upload->do_upload('pub_Imagen')) {
            $archivo = array("upload_data" => $this->upload->data());
            $imagen = $archivo['upload_data']['file_name'];   
             echo json_encode(
                    [
                        'estado' => true,
                        'response' => $imagen
                    ]
            );
            
        } else {
            echo json_encode(
                    [
                        'estado' => false,
                        'response' => $this->upload->display_errors()
                    ]
            );
            //$imagen = $this->cm->obtener($id)->cat_imagen;
        }
    }

    public function eliminar($idPublicidad){
              try {
            $result = $this->pm->eliminar($idPublicidad);
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
