<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Promo extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();

//        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
//        if($this->user['user'] === null) redirect('');
//
        $this->load->model('PromoModel', 'pm');
         $this->load->model('ProductoModel', 'p');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        $this->load->view('promo/index.php');
        //footer
        $this->load->view('layout/footer');
    }

    public function get_Promos($idSucursal = 4) {

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
   public function get_Productos() {

        try {
            $result = $this->p->getAllSuc(4);
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
    public function get_promoById($idPromo) {
        try {
            $result = $this->pm->obtener($idPromo);
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

    public function updImagen() {


        $id = $this->input->post('pro_id');

        $config = [
            "upload_path" => "./assets/imagenes/promos",
            "allowed_types" => "png|jpg"
        ];
        $errors = array();

        $this->load->library("upload", $config);

        if ($this->upload->do_upload('pro_imagen')) {
            $archivo = array("upload_data" => $this->upload->data());
            $imagen = $archivo['upload_data']['file_name'];
            $data = [
                'pro_imagen' => $imagen
            ];
            try {
                $this->pm->actualizar($data, $id);
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
        }
    }

    public function updPromo() {

        $errors = array();

        $id = $this->input->post('pro_id');
        $respuesta;


        $FI = date("Y-m-d", strtotime($this->input->post('pro_FechaInicio')));
        $FF = date("Y-m-d", strtotime($this->input->post('pro_FechaFin')));
        $data = [
            'pro_nombre' => $this->input->post('pro_nombre'),
            'pro_descripcion' => $this->input->post('pro_descripcion'),
            'pro_precio' => $this->input->post('pro_precio'),
            'pro_descuento' => $this->input->post('pro_descuento'),
            'pro_idEstado' => $this->input->post('pro_idEstado'),
            'pro_FechaInicio' => $FI,
            'pro_FechaFin' => $FF
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
            }
             else {
                $respuesta = [
                            'estado' => false,
                            'validator' => false,
                            'response' => $e->getMessage()
                ];
            }
        }
        
        echo json_encode($respuesta);
    }

    public function updProducto() {
        $errors = array();

        $data = [
            'ppro_idPromo' => $this->input->post('ppro_idPromo'),
            'ppro_idProducto' => $this->input->post('ppro_idProducto')
        ];
//
//
//
        try {

            $response = $this->pm->registrarProd($data);
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
                    'response' => $e . getMessage()
                ];
            }
        }
        echo json_encode($respuesta);
    }

    public function eliminarProductoPromo() {

        $idProductoPromo = $this->input->post('ppro_id');

        try {
            $response = $this->pm->eliminarProd($idProductoPromo);
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
//           

        echo json_encode($respuesta);
    }

    public function get_ProductosById($idPromo) {

        try {
            $result = $this->pm->getAllProd($idPromo);
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

    public function eliminar($idPromo) {


           try {
            $response = $this->pm->eliminar($idPromo);
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
//           

        echo json_encode($respuesta);
    }

}
