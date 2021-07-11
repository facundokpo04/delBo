<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Empleado extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();

        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
        if($this->user['user'] === null) redirect('');
//
        $this->load->model('EmpleadoModel', 'em');
        $this->load->model('SucursalModel', 'sm');
        $this->load->model('PersonaModel', 'pm');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        //definimos variable para traer la data y mantner la logica de paginacion
        //inicializacion de paginacion


        $this->load->view('empleado/index.php');

        //footer
        $this->load->view('layout/footer');
    }

    public function get_empleados($limite = 5, $p = 0) {

        $data = [];
        $total = 0;
        $limite = 20;
        $data = new stdClass();
        try {
            $result = $this->em->getAll($limite, $p);
            $total = $result->total;
            $data->data = $result->data;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_empleadoById($idEmpleado) {

        $data = new stdClass();

        try {
            $result = $this->em->obtener($idEmpleado);
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
    
    public function get_empleadoByIdPer($idPersona) {

        $data = new stdClass();

        try {
            $result = $this->em->obtenerPer($idPersona);
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

    public function updEmpleado() {

        $errors = array();
        $idEmpleado = $this->input->post('emp_id');
        
         $dataEmpleado = [
                    'emp_legajo' => $this->input->post('emp_legajo'),
                    'emp_cargo' => $this->input->post('emp_cargo'),
                    'emp_idSucursal' => $this->input->post('emp_idSucursal'),
                    'emp_idPersona' => $this->input->post('emp_idPersona'),
                ];

        try {
            if (empty($idEmpleado)) {                           
               
                $response = $this->em->registrar($dataEmpleado);
                $respuesta = [
                    'estado' => true,
                    'response' => $response->result
                ];
            } else {                             
                $response = $this->em->actualizar($dataEmpleado, $idEmpleado);
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
        $idEmpleado = $this->input->post('emp_id');

        $config = [
            "upload_path" => "./assets/imagenes/empleado",
            "allowed_types" => "png|jpg"
        ];
        $errors = array();

        $this->load->library("upload", $config);

        if ($this->upload->do_upload('emp_imagen')) {
            $archivo = array("upload_data" => $this->upload->data());
            $imagen = $archivo['upload_data']['file_name'];
            $data = [
                'emp_imagen' => $imagen
            ];
            try {
                $this->em->actualizar($data, $id);

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

    public function get_Sucursales($idEmpresa = 1) {

        try {
            $result = $this->sm->getAll($idEmpresa);

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

    public function eliminar() {

        $idEmpleado = $this->input->post('emp_id');
        $idPersona = $this->input->post('emp_idPersona');


        try {
            $result = $this->em->eliminar($idEmpleado);
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
