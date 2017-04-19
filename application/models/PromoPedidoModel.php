<?php

class PromoPedidoModel extends CI_Model {

    public function getAll() {
        return RestApi::call(
                        RestApiMethod::GET, "promopedido/listar"
        );
    }
    //id pedido
     public function getAllPed($id) {
        return RestApi::call(
                        RestApiMethod::GET, "promopedido/listarPed/$id"
        );
    }
    //id promo
     public function getAllProd($id) {
        return RestApi::call(
                        RestApiMethod::GET, "promopedido/listarprod/$id"
        );
    }

    public function obtener($id) {
        return RestApi::call(
                        RestApiMethod::GET, "promopedido/obtener/$id"
        );
    }

 
   

}