<?php
class SucursalModel extends CI_Model{
    
    public function getAll($idEmpresa){
        return RestApi::call(
            RestApiMethod::GET,
            "sucursal/listar/$idEmpresa"
        );
    }

    public function obtener($id){
        return RestApi::call(
            RestApiMethod::GET,
            "sucursal/obtener/$id"
        );
    }
    
    public function registrar($data){
          return RestApi::call(
            RestApiMethod::POST,
            'sucursal/insertar',
            $data
        );
    }

    public function actualizar($data, $id){
        return RestApi::call(
            RestApiMethod::PUT,
            "sucursal/actualizar/$id" , $data
        );
    }

     public function eliminar( $id){
        return RestApi::call(
            RestApiMethod::DELETE,
            "sucursal/eliminar/$id"
        );
    }
    
        public function getAllDh($idSucursal){
        return RestApi::call(
            RestApiMethod::GET,
            "diahorario/listar/$idSucursal"
        );
    }

    
     public function registrarDh($data){
          return RestApi::call(
            RestApiMethod::POST,
            'diahorario/insertar',
            $data
        );
    }
       public function actualizarDh($data, $id){
        return RestApi::call(
            RestApiMethod::PUT,
            "diahorario/actualizar/$id" , $data
        );
    }
    public function eliminardh( $id){
        return RestApi::call(
            RestApiMethod::DELETE,
            "diahorario/eliminar/$id"
        );
    }
    
     
        public function getPar($idSucursal){
        return RestApi::call(
            RestApiMethod::GET,
            "parametros/obtener/$idSucursal"
        );
        
    }
      public function registrarPar($data){
          return RestApi::call(
            RestApiMethod::POST,
            'parametros/insertar',
            $data
        );
          
       
    }
    
       public function actualizarPar($data, $idSucursal){
        return RestApi::call(
            RestApiMethod::PUT,
            "parametros/actualizar/$idSucursal",$data
        );
    }
    
     public function eliminarPar( $idSucursal){
        return RestApi::call(
            RestApiMethod::DELETE,
            "parametros/eliminar/$idSucursal"
        );
    }
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



