<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Empresa extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();

       $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
       if($this->user['user'] === null) redirect('');
//
        $this->load->model('EmpresaModel', 'em');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        $this->load->view('empresa/index.php');
        $this->load->view('layout/footer');
    }

    public function get_EmpresaById($idEmpresa) {
        try {
            $result = $this->em->obtener($idEmpresa);
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

  public function updEmpresa() {
        $errors = array();
        $id = $this->input->post('emp_id');
        $data = [
            'cuilt' => $this->input->post('cuilt'),
            'telefono' => $this->input->post('telefono'),
            'razonSocial' => $this->input->post('razonSocial'),
            'Rubro' => $this->input->post('Rubro'),
            'Domicilio' => $this->input->post('Domicilio'),
            'Email' => $this->input->post('Email'),
            'Pais' => $this->input->post('Pais'),
        ];
        try {
            if (empty($id)) {
                $response = $this->em->registrar($data);
                $respuesta = [
                    'estado' => true,
                    'response' => $response
                ];
            } else {
                $response = $this->em->actualizar($data, $id);
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
      
    function updImagen() {

            $id = $this->input->post('emp_id');
            $config = [
                "upload_path" => "./assets/imagenes/empresa",
                "allowed_types" => "png|jpg"
            ];
            $errors = array();

            $this->load->library("upload", $config);

            if ($this->upload->do_upload('logo')) {
                $archivo = array("upload_data" => $this->upload->data());
                $imagen = $archivo['upload_data']['file_name'];
                $data = [
                    'logo' => $imagen
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

   
}