<?php

class PedidoDetalleModel extends CI_Model {

    public function getAll($l = 5, $p = 0) {
        return RestApi::call(
                        RestApiMethod::GET, "detallepedido/listar"
        );
    }

    public function obtener($id) {
        return RestApi::call(
                        RestApiMethod::GET, "detallepedido/obtener/$id"
        );
    }

  public function obtenerPed($id) {
        return RestApi::call(
                        RestApiMethod::GET, "detallepedido/listarPed/$id"
        );
    }

}