<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Sucursal extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();

//        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
//        if($this->user['user'] === null) redirect('');
//
        $this->load->model('SucursalModel', 'sm');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        $this->load->view('sucursal/index.php');
        //footer
        $this->load->view('layout/footer');
    }

    public function get_sucursales($idEmpresa = 1) {

        $data = [];

        $data = new stdClass();
        try {
            $result = $this->sm->getAll($idEmpresa);
            $total = $result->total;
            $data->data = $result->data;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_sucursalById($idSucursal) {

        try {
            $result = $this->sm->obtener($idSucursal);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_ParametroById($idSucursal) {

        try {
            $result = $this->sm->getPar($idSucursal);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_HorariosById($idSucursal) {

        try {
            $result = $this->sm->getAllDh($idSucursal);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function updParametro($idSucursal) {
        $errors = array();
        $result = '';

        $result = $this->sm->getPar($idSucursal);


        $data = [
            'par_zonaEntrega' => $this->input->post('par_zonaEntrega'),
            'par_pedidoMinimo' => $this->input->post('par_pedidoMinimo'),
            'par_tiempoEntrega' => $this->input->post('par_tiempoEntrega'),
            'par_costoEnvio' => $this->input->post('par_costoEnvio'),
            'par_idSucursal' => $this->input->post('par_idSucursal')
        ];
        try {
            if ($result == 'false') {
                $this->sm->registrarPar($data);
            } else {
                $this->sm->actualizarPar($data, $idSucursal);
            }
        } catch (Exception $e) {

            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
            }
        }
        if (count($errors) === 0)
            redirect('sucursal');

        else {
            $this->load->view('layout/header');
            $this->load->view('layout/menu');
            $this->load->view('sucursal/validation', [
                'errors' => $errors
            ]);
            $this->load->view('layout/footer');
        }
    }

    public function updsucursal() {

        $errors = array();

        $id = $this->input->post('suc_id');
        $respuesta;



        $data = [
            'suc_nombre' => $this->input->post('suc_nombre'),
            'suc_cuit' => $this->input->post('suc_cuit'),
            'suc_razonSocial' => $this->input->post('suc_razonSocial'),
            'suc_idEmpresa' => 1,
            'suc_direccion' => $this->input->post('suc_direccion')
        ];

        try {
            if (empty($id)) {
                $response = $this->sm->registrar($data);

                $respuesta = ($response->result);
            } else {
                $this->sm->actualizar($data, $id);
                $respuesta = $id;
            }
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
                var_dump($errors);
            }
        }


        if (count($errors) === 0) //redirect('sucursal')
            //
         echo json_encode($respuesta);
        else {
            $this->load->view('layout/header');
            $this->load->view('layout/menu');
            $this->load->view('sucursal/validation', [
                'errors' => $errors
            ]);
            $this->load->view('layout/footer');
        }
    }

    public function updDiahorario() {
        $errors = array();

        $id = $this->input->post('dh_id');



        $data = [
            'dh_diaSemana' => $this->input->post('dh_diaSemana'),
            'dh_horaApertura' => $this->input->post('dh_horaApertura'),
            'dh_horaCierre' => $this->input->post('dh_horaCierre'),
            'dh_idSucursal' => $this->input->post('dh_idSucursal')
        ];

        try {
            if (empty($id)) {
                $response = $this->sm->registrarDh($data);
                $respuesta = [
                    'estado' => true,
                    'response' => $result
                ];
            } else {
                $response = $this->sm->actualizarDh($data, $id);


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
//                 
        echo json_encode($respuesta);
    }

    public function eliminar($idSucursal) {


        try {
            $respuesta = $this->sm->eliminar($idSucursal);
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
            }
        }
//           

        echo json_encode($respuesta);
    }

    /* datos de contacto */

    public function updDatoContacto() {
        $errors = array();
        $result = '';

        $id = $this->input->post('dcon_id');


        $data = [
            'dcon_facebook' => $this->input->post('dcon_facebook'),
            'dcon_website' => $this->input->post('dcon_website'),
            'dcon_twitter' => $this->input->post('dcon_twitter'),
            'dcon_direccion' => $this->input->post('dcon_direccion'),
            'dcon_idSucursal' => $this->input->post('dcon_idSucursal'),
            'dcon_email' => $this->input->post('dcon_email')
        ];
        try {
            if (empty($id)) {
                $this->sm->registrarDatoC($data);
                $respuesta = [
                    'estado' => true,
                    'response' => $response
                ];
            } else {
                $response = $this->sm->actualizarDatoC($data, $id);
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
                    'response' => $e . getMessage()
                ];
            }
        }

        echo json_encode($respuesta);
    }

    public function get_DatoContactoById($idSucursal) {

        try {
            $result = $this->sm->getDatoC($idSucursal);
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

    public function updTel() {

        $errors = array();


        $id = $this->input->post('tcon_id');


        $data = [
            'tcon_numero' => $this->input->post('tcon_numero'),
            'tcon_descripcion' => $this->input->post('tcon_descripcion'),
            'tcon_tipo' => $this->input->post('tcon_tipo'),
            'tcon_idDatoContacto' => $this->input->post('tcon_idDatoContacto')
        ];
        try {
            if (empty($id)) {
                $response = $this->sm->registrarTel($data);
                $respuesta = [
                    'estado' => true,
                    'response' => $response
                ];
            } else {
                $response = $this->sm->actualizarTel($data, $id);
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
                    'response' => $e . getMessage()
                ];
            }
        }

        echo json_encode($respuesta);
    }

    public function get_TelById($idSucursal) {

        try {
            $result = $this->sm->getAllTel($idSucursal);
            $respuesta = [
                'estado' => true,
                'data' => $result
            ];
        } catch (Exception $e) {
            $respuesta = [
                'estado' => false,
                'data' => $e->getMessage()
            ];
        }
        echo json_encode($respuesta);
    }

    public function get_Tel($idTelefono) {

        try {
            $result = $this->sm->obtenerTel($idTelefono);
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

    public function eliminarTel($idTelefono) {

        try {
            $result = $this->sm->eliminarTel($idTelefono);
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
