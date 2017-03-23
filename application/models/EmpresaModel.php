<?php
class EmpresaModel extends CI_Model{
    
  

    public function obtener($id){
        return RestApi::call(
            RestApiMethod::GET,
            "empresa/obtener/$id"
        );
    }
    
    public function registrar($data){
        return RestApi::call(
            RestApiMethod::POST,
            'empresa/insertar',
            $data
        );
    }

    public function actualizar($data, $id){
        return RestApi::call(
            RestApiMethod::PUT,
            "empresa/actualizar/$id" , $data
        );
    }

   
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


