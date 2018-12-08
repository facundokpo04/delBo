<?php
class HotelModel  extends CI_Model{
    
    public function getAll(){
        return RestApi::call(
            RestApiMethod::GET,
            "hotel/listar1"
        );
    }
    public function obtener($id){
        return RestApi::call(
            RestApiMethod::GET,
            "hotel/obtener/$id"
        );
    }
    
    public function registrar($data){
        
      
        return RestApi::call(
            RestApiMethod::POST,
            'hotel/insertar',
            $data
        );
    }
    public function actualizar($data, $id){
        return RestApi::call(
            RestApiMethod::PUT,
            "hotel/actualizar/$id" , $data
        );
    }
     public function eliminar($id){
        return RestApi::call(
            RestApiMethod::DELETE,
            "hotel/eliminar/$id"
        );
    }
}