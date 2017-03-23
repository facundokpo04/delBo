<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Producto extends CI_Controller {

    private $user;

    public function __CONSTRUCT() {
        parent::__construct();

//        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
//        if($this->user['user'] === null) redirect('');
//
        $this->load->model('ProductoModel', 'pm');
        $this->load->model('VariedadModel', 'vm');
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        $this->load->view('producto/index.php');
        //footer
        $this->load->view('layout/footer');
    }

    public function get_Productos($idSucursal = 4) {

        $data = [];
        $data = new stdClass();
        try {
            $result = $this->pm->getAllSuc($idSucursal);
            $total = $result->total;
            $data->data = $result->data;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_productoById($idProducto) {

        try {
            $result = $this->pm->obtener($idProducto);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_ComponentesById($idProducto) {

        try {
            $result = $this->pm->getAllComp($idProducto);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_NotComponentesById($idProducto) {

        try {
            $result = $this->pm->getAllNotComp($idProducto);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_Categorias() {

        try {
            $result = $this->pm->getAllCate();
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function get_VariedadesById($idProducto) {

        try {
            $result = $this->pm->getAllVar($idProducto);
            $data = $result;
        } catch (Exception $e) {
            var_dump($e);
        }
        echo json_encode($data);
    }

    public function updImagen() {


        $id = $this->input->post('prod_id');

        $config = [
            "upload_path" => "./assets/imagenes/promo",
            "allowed_types" => "png|jpg"          
        ];
        
       
        
        $errors = array();

        $this->load->library("upload", $config);

        if ($this->upload->do_upload('prod_imagen')) {
            $archivo = array("upload_data" => $this->upload->data());
            $imagen = $archivo['upload_data']['file_name'];
            $data = [
                'prod_Imagen' => $imagen
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

    public function updVariedad() {
//         $errors = array();
        $errors = array();
        $id = $this->input->post('var_id');


        $data = [
            'var_nombre' => $this->input->post('var_nombre'),
            'var_descripcion' => $this->input->post('var_descripcion'),
            'var_tipo' => $this->input->post('var_tipo'),
            'var_precio' => $this->input->post('var_precio'),
            'var_idProducto' => $this->input->post('var_idProducto')
        ];
        try {

            if (empty($id)) {
                $this->vm->registrar($data);
            } else {
                $this->vm->actualizar($data, $id);
            }
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
            }
        }

        echo json_encode($errors);
    }

    public function updComponente() {
        $errors = array();

        $data = [
            'cp_idProducto' => $this->input->post('cp_idProducto'),
            'cp_idComponente' => $this->input->post('cp_idComponente')
        ];
//
//
//
        try {

            $response = $this->pm->registrarComp($data);
            $respuesta = ($response->result);
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
            }
        }
    }

    public function updProducto() {

        $errors = array();

        $id = $this->input->post('prod_id');
        $respuesta;



        $data = [
            'prod_nombre' => $this->input->post('prod_nombre'),
            'prod_descripcionProducto' => $this->input->post('prod_descripcionProducto'),
            'prod_codigoProducto' => $this->input->post('prod_codigoProducto'),
            'prod_precioBase' => $this->input->post('prod_precioBase'),
            'prod_maxComponente' => $this->input->post('prod_maxComponente'),
            'prod_minComponente' => $this->input->post('prod_minComponente'),
            'prod_idEstado' => $this->input->post('prod_idEstado'),
            'prod_idCategoria' => $this->input->post('prod_idCategoria'),
            'prod_idEstadoVisible' => $this->input->post('prod_idEstadoVisible'),
            'prod_idSucursal' => '4'
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
            $this->load->view('producto/validation', [
                'errors' => $errors
            ]);
            $this->load->view('layout/footer');
        }
    }

    public function eliminarComponente() {

        $idProducto = $this->input->post('idProducto');
        $idComponente = $this->input->post('idComponente');

        try {
            $respuesta = $this->pm->eliminarComp($idProducto, $idComponente);
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

    public function eliminar($idProducto) {


        try {
            $respuesta = $this->pm->eliminar($idProducto);
        } catch (Exception $e) {
            if ($e->getMessage() === RestApiErrorCode::UNPROCESSABLE_ENTITY) {
                $errors = RestApi::getEntityValidationFieldsError();
            }
        }
//           

        echo json_encode($respuesta);
    }

}
