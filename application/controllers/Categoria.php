<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Categoria extends CI_Controller {

    private $user;
    private $imagen2;

    public function __CONSTRUCT() {
        parent::__construct();

       $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
        if($this->user['user'] === null) redirect('');
     
        $this->load->model('CategoriaModel', 'cm');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('categoria/index.php');

        //footer
        $this->load->view('layout/footer');
    }

    public function get_categorias() {

        $data = [];
        $data = new stdClass();
        try {
            $result = $this->cm->getAll();
            $total = $result->total;
            $data->data = $result->data;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    
    public function get_categoriaById($idCategoria) {



        try {
            $result = $this->cm->obtener($idCategoria);
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

    
    public function updCategoria() {
        $errors = array();
        $id = $this->input->post('cat_id');
        $respuesta = [];
        $data = [
            'cat_nombre' => $this->input->post('cat_nombre'),
            'cat_descripcion' => $this->input->post('cat_descripcion'),
            'cat_idEstado' => $this->input->post('cat_idEstado'),
            'cat_idEstadoVisible' => $this->input->post('cat_idEstadoVisible'),
            'cat_imagen' => $this->input->post('cat_imagen'),
        ];
        try {

            if (empty($id)) {
                $response = $this->cm->registrar($data);
                $respuesta = [
                    'estado' => true,
                    'response' => $response
                ];
            } else {
                $response = $this->cm->actualizar($data, $id);
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
            "upload_path" => "./assets/imagenes/categoria",
            "allowed_types" => "png|jpg"
        ];
        $errors = array();

        $this->load->library("upload", $config);

        if ($this->upload->do_upload('cat_imagen')) {
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

    public function eliminar($idCategoria){
              try {
            $result = $this->cm->eliminar($idCategoria);
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
