<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Componente extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();

//        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
//        if($this->user['user'] === null) redirect('');
//
        $this->load->model('ComponenteModel', 'cm');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('componente/index.php');

        //footer
        $this->load->view('layout/footer');
    }

    public function get_componentes($limite = 5, $p = 0) {
        $data = [];
        $total = 0;
        $limite = 50;
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

    public function get_componenteById($idComponente) {
        try {
            $result = $this->cm->obtener($idComponente);
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

    public function updComponente() {

        $errors = array();
        $id = $this->input->post('com_id');
        $data = [
            'com_Nombre' => $this->input->post('com_Nombre'),
            'com_descripcion' => $this->input->post('com_descripcion'),
            'com_idEstado' => $this->input->post('com_idEstado'),
            'com_precio' => $this->input->post('com_precio')
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

        $id = $this->input->post('com_id');
        $config = [
            "upload_path" => "./assets/imagenes/componente",
            "allowed_types" => "png|jpg"
        ];
        $errors = array();

        $this->load->library("upload", $config);

        if ($this->upload->do_upload('com_imagen')) {
            $archivo = array("upload_data" => $this->upload->data());
            $imagen = $archivo['upload_data']['file_name'];
            $data = [
                'com_imagen' => $imagen
            ];
            try {
                $this->cm->actualizar($data, $id);

                echo json_encode(
                        [
                            'estado' => true,
                            'response' => $data
                        ]
                );
            } catch (Exception $e) {
                if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                    $errors = RestApi::getEntityValidationFieldsError();

                    echo json_encode(
                            [
                                'estado' => false,
                                'response' => $errors
                            ]
                    );
                }
            }
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

    public function eliminar($id) {
        
    }

}
