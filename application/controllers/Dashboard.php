<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

  
    private $user;

    public function __CONSTRUCT() {
        parent::__construct();
        $this->user = ['user' => RestApi::getUserData()];
        // Valida que exista el usuario obtenido del token, del caso contrario lo regresa a la pagina de inicio que es nuestro controlador auth
        if ($this->user['user'] === null)
            redirect('');
//
    }

    public function index($p = 0) {
        //header
        $this->load->view('layout/header');
        $this->load->view('layout/menu');
        $this->load->view('dashboard/index.php');
        //footer
        $this->load->view('layout/footer');
    }

   

 

}
