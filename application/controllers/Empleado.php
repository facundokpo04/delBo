<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Empleado extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();

//        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
//        if($this->user['user'] === null) redirect('');
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
        $limite = 10;
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
            $data->empleados = $result;
            $result = $this->sm->getAll(1); //
            $data->sucursales = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function updEmpleado() {

        $config = [
            "upload_path" => "./assets/imagenes/empleado",
            "allowed_types" => "png|jpg"
        ];
        $errors = array();

        $this->load->library("upload", $config);

        $id = $this->input->post('per_id');

        $idEmpleado = $this->input->post('emp_id');


        if ($this->upload->do_upload('emp_imagen')) {
            $archivo = array("upload_data" => $this->upload->data());
            $imagen = $archivo['upload_data']['file_name'];
        } else {
            //echo  json_encode($this->upload->display_errors());
            if (!empty($idEmpleado))
                $imagen = $this->em->obtener($idEmpleado)->emp_imagen;
        }

        $data = [
            'per_nombre' => $this->input->post('per_nombre'),
            'per_email' => $this->input->post('per_email'),
            'per_documento' => $this->input->post('per_documento'),
            'per_password' => md5($this->input->post('per_password')),
            'per_nacionalidad' => $this->input->post('per_nacionalidad'),
            'per_id' => $this->input->post('per_id'),
            'per_perfilUsuario' => $this->input->post('per_perfilUsuario')
        ];
        
//        var_dump($dataEmpleado);

        try {

            if (empty($idEmpleado)) {
                $result = $this->pm->registrar($data);
                $id = $result->result;
                $dataEmpleado = [
                    'emp_legajo' => $this->input->post('emp_legajo'),
                    'emp_cargo' => $this->input->post('emp_cargo'),
                    'emp_idSucursal' => $this->input->post('emp_idSucursal'),
                    'emp_idPersona' => $id,
                    'emp_imagen' => $imagen
                ];
                $this->em->registrar($dataEmpleado);
            } else {
                $dataEmpleado = [
                    'emp_legajo' => $this->input->post('emp_legajo'),
                    'emp_cargo' => $this->input->post('emp_cargo'),
                    'emp_idSucursal' => $this->input->post('emp_idSucursal'),
                    'emp_idPersona' => $id,
                    'emp_imagen' => $imagen
                ];
                $result = $this->pm->actualizar($data, $id);

                $this->em->actualizar($dataEmpleado, $idEmpleado);
            }
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
                var_dump($errors);
            }
        }

        echo json_encode($errors);
    }

    public function guardar() {
        
    }

    public function eliminar($id) {
        
    }

}
