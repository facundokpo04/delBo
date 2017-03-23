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

    public function get_promoById($idPromo) {

        try {
            $result = $this->pm->obtener($idPromo);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function updImagen() {


        $id = $this->input->post('pro_id');

        $config = [
            "upload_path" => "./assets/imagenes/promo",
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
                echo json_encode($data);
            } catch (Exception $e) {
                if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                    $errors = RestApi::getEntityValidationFieldsError();
                }
            }
        } else {
            //echo  json_encode($this->upload->display_errors());
            //$imagen = $this->cm->obtener($id)->cat_imagen;
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
            'pro_FechaInicio' => $FI,
            'pro_FechaFin' => $FF
        ];



        try {
            if (empty($id)) {
                $response = $this->pm->registrar($data);
                $respuesta = ($response->result);
            } else {
                $this->pm->actualizar($data, $id);
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
            $this->load->view('promo/validation', [
                'errors' => $errors
            ]);
            $this->load->view('layout/footer');
        }
    }

    public function eliminarComponente() {

        $idPromo = $this->input->post('idPromo');
        $idComponente = $this->input->post('idComponente');

        try {
            $respuesta = $this->pm->eliminarComp($idPromo, $idComponente);
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
            }
        }
//           

        echo json_encode($respuesta);
    }

    public function eliminarVariedad($idVariedad) {

        try {
            $respuesta = $this->vm->eliminar($idVariedad);
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
            }
        }
//           

        echo json_encode($respuesta);
    }

    public function eliminar($idPromo) {


        try {
            $respuesta = $this->pm->eliminar($idPromo);
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
            }
        }
//           

        echo json_encode($respuesta);
    }

}
