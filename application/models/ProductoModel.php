<?php
class ProductoModel extends CI_Model{
    
    public function getAll(){
        return RestApi::call(
            RestApiMethod::GET,
            "producto/listar"
        );
    }

     public function getAllCat($idCategoria){
        return RestApi::call(
            RestApiMethod::GET,
            "producto/listarCat/$idCategoria"
        );
    }
    
     public function getAllCate(){
        return RestApi::call(
            RestApiMethod::GET,
            "producto/listarCate"
        );
    }   
        public function getAllComp($idProducto){
        return RestApi::call(
            RestApiMethod::GET,
            "producto/listarComp/$idProducto"
        );
    }    public function getAllNotComp($idProducto){
        return RestApi::call(
            RestApiMethod::GET,
            "producto/listarNotComp/$idProducto"
        );
    }
            public function getAllVar($idProducto){
        return RestApi::call(
            RestApiMethod::GET,
            "producto/listarVar/$idProducto"
        );
    }
    
       public function getAllSuc($idSucursal){
        return RestApi::call(
            RestApiMethod::GET,
            "producto/listarSuc/$idSucursal"
        );
    }
    
    
    public function obtener($id){
        return RestApi::call(
            RestApiMethod::GET,
            "producto/obtener/$id"
        );
    }
    
    public function registrar($data){
        
      
        return RestApi::call(
            RestApiMethod::POST,
            'producto/insertar',$data
        );
    }

    public function actualizar($data, $id){
        return RestApi::call(
            RestApiMethod::PUT,
            "producto/actualizar/$id" , $data
        );
    }
     public function eliminar( $id){
        return RestApi::call(
            RestApiMethod::DELETE,
            "producto/eliminar/$id"
        );
    }   
     public function registrarComp( $data){
        return RestApi::call(
            RestApiMethod::POST,
            "producto/insertarcomp", $data
        );
    }
     public function eliminarComp($idprod,$idcomp){
        return RestApi::call(
            RestApiMethod::DELETE,
            "producto/eliminarcomp/{$idprod}/{$idcomp}"
        );
    }
    
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

