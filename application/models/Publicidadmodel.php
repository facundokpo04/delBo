<?php
class PublicidadModel extends CI_Model{
    
    public function getAll(){
        return RestApi::call(
            RestApiMethod::GET,
            "publicidad/listar"
        );
    }

    public function obtener($id){
        return RestApi::call(
            RestApiMethod::GET,
            "publicidad/obtener/$id"
        );
    }
    
    public function registrar($data){
        
      
        return RestApi::call(
            RestApiMethod::POST,
            'publicidad/insertar',
            $data
        );
    }

    public function actualizar($data, $id){
        return RestApi::call(
            RestApiMethod::PUT,
            "publicidad/actualizar/$id", $data
        );
    }

     public function eliminar($id){
        return RestApi::call(
            RestApiMethod::DELETE,
            "publicidad/eliminar/$id"
        );
    }
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

