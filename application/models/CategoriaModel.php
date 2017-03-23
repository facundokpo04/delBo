<?php
class CategoriaModel extends CI_Model{
    
    public function getAll($l = 5, $p = 0){
        return RestApi::call(
            RestApiMethod::GET,
            "categoria/listar/$l/$p"
        );
    }

    public function obtener($id){
        return RestApi::call(
            RestApiMethod::GET,
            "categoria/obtener/$id"
        );
    }
    
    public function registrar($data){
        
      
        return RestApi::call(
            RestApiMethod::POST,
            'categoria/insertar',
            $data
        );
    }

    public function actualizar($data, $id){
        return RestApi::call(
            RestApiMethod::PUT,
            "categoria/actualizar/$id" , $data
        );
    }

     public function eliminar( $id){
        return RestApi::call(
            RestApiMethod::DELETE,
            "categoria/eliminar/$id"
        );
    }
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

