<?php
class AderezoModel extends CI_Model{
    
    public function getAll(){
        return RestApi::call(
            RestApiMethod::GET,
            "aderezo/listar1"
        );
    }
    public function obtener($id){
        return RestApi::call(
            RestApiMethod::GET,
            "aderezo/obtener/$id"
        );
    }
    
    public function registrar($data){
        
      
        return RestApi::call(
            RestApiMethod::POST,
            'aderezo/insertar',
            $data
        );
    }
    public function actualizar($data, $id){
        return RestApi::call(
            RestApiMethod::PUT,
            "aderezo/actualizar/$id" , $data
        );
    }
     public function eliminar($id){
        return RestApi::call(
            RestApiMethod::DELETE,
            "aderezo/eliminar/$id"
        );
    }
}