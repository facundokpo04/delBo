<?php

class PedidoModel extends CI_Model {

    public function getAll($l = 5, $p = 0) {
        return RestApi::call(
                        RestApiMethod::GET, "pedidoencabezado/listar"
        );
    }

    public function obtener($id) {
        return RestApi::call(
                        RestApiMethod::GET, "pedidoencabezado/obtener/$id"
        );
    }

 
    public function actualizar($data, $id) {
        return RestApi::call(
                        RestApiMethod::PUT, "pedidoencabezado/actualizar/$id", $data
        );
    }

    public function eliminar($id) {
        return RestApi::call(
                        RestApiMethod::DELETE, "pedidoencabezado/eliminar/$id"
        );
    }
    
     public function obtenerCliente($id) {
        return RestApi::call(
                        RestApiMethod::GET, "pedidoencabezado/obtenercli/$id"
        );
     }

}