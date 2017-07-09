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
    
      public function getParTot($idSucursal){
        return RestApi::call(
            RestApiMethod::GET,
            "parametros/obtenerTotal/$idSucursal"
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
    // 
       public function getDatoC($idSucursal){
        return RestApi::call(
            RestApiMethod::GET,
            "datocontacto/obtenersuc/$idSucursal"
        );
        
    }
      public function registrarDatoC($data){
          return RestApi::call(
            RestApiMethod::POST,
            'datocontacto/insertar',
            $data
        );
              
    } 
       public function actualizarDatoC($data, $id){
        return RestApi::call(
            RestApiMethod::PUT,
            "datocontacto/actualizar/$id",$data
        );
    }
    
     public function eliminarDatoC($id){
        return RestApi::call(
            RestApiMethod::DELETE,
            "datocontacto/eliminar/$id"
        );
    }
    
        
    
     public function registrarTel($data){
          return RestApi::call(
            RestApiMethod::POST,
            'datocontacto/insertartel',
            $data
        );
              
    } 
       public function actualizarTel($data, $id){
        return RestApi::call(
            RestApiMethod::PUT,
            "datocontacto/actualizartel/$id",$data
        );
    }
    
     public function eliminarTel($id){
        return RestApi::call(
            RestApiMethod::DELETE,
            "datocontacto/eliminartel/$id"
        );
    }
    
      public function getAllTel($idSucursal){
        return RestApi::call(
            RestApiMethod::GET,
            "datocontacto/listartelsuc/$idSucursal"
        );
    }
    
     public function obtenerTel($idtel){
        return RestApi::call(
            RestApiMethod::GET,
            "datocontacto/obtenertel/$idtel"
        );
    }
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



