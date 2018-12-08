<?php

class PedidoModel extends CI_Model {

    public function getAll() {
        return RestApi::call(
                        RestApiMethod::GET, "pedidoencabezado/listar"
        );
    }

    public function getAllfecha($id) {
        return RestApi::call(
                        RestApiMethod::GET, "pedidoencabezado/listarfecha/$id"
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
                        RestApiMethod::GET, "pedidoencabezado/obtenercli2/$id"
        );
    }

    public function obtenerEmpleado($id) {
        return RestApi::call(
                        RestApiMethod::GET, "pedidoencabezado/obteneremp/$id"
        );
    }

    public function getAllfechaPedPe($id) {
        return RestApi::call(
                        RestApiMethod::GET, "pedidoencabezado/listarfechatotpe/$id"
        );
    }

    public function getAllfechaPedEn($id) {
        return RestApi::call(
                        RestApiMethod::GET, "pedidoencabezado/listarfechatoten/$id"
        );
    }
    
    public function getAllfechaPedPre($id) {
        return RestApi::call(
                        RestApiMethod::GET, "pedidoencabezado/listarfechatotpre/$id"
        );
    }

}
