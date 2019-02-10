<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Email extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function sendMailGmail() {
        //cargamos la libreria email de ci
        $this->load->library("email");
        $email = $this->input->post('email');
        $estado = $this->input->post('estado');
        $nrPedido = $this->input->post('idPedido');

        //configuracion para gmail
        $configGmail = array(
            'protocol' => 'smtp',
            'smtp_host' => 'ssl://smtp.googlemail.com',
            'smtp_port' => '465',
            'smtp_user' => 'deliveryiguazu@gmail.com',
            'smtp_pass' => '34060319Fa',
            'mailtype' => 'html',
            'charset' => 'utf-8',
            'newline' => "\r\n"
        );

        //cargamos la configuración para enviar con gmail
        $this->email->initialize($configGmail);

        $this->email->from('pizzacolordelivery-express@brunohnos.com','www.brunohnos.com');
        $this->email->to($email);
        $this->email->message("
            <p>Hola estimado cliente</p>
            <p>            
              Gracias por elegir Pizza Color Delivery! Queriamos Avisarle que su pedido esta siendo  <b>\"$estado\".</b>
            </p>   <p>
            Si tiene alguna pregunta sobre este correo electrónico, puede contactarnos en pizzacolordelivery-express@brunohnos.com.
            </p>
            <p>
            Saludos,
            <br>
            El equipo de Pizza Color Delivery 
            </p>");
        $this->email->subject("Su pedido \"$nrPedido\" de Pizza Color Delivery esta siendo \"$estado\"  ");

        $this->email->send();
        //con esto podemos ver el resultado
        echo json_encode($this->email->print_debugger());
    }

}
