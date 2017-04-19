<?php

class PromoModel extends CI_Model {

    public function getAll() {
        return RestApi::call(
                        RestApiMethod::GET, "promo/listar"
        );
    }
    
      public function getAllProd($idPromo){
        return RestApi::call(
            RestApiMethod::GET,
            "promo/listarprod/$idPromo"
        );   
        }


    public function obtener($id) {
        return RestApi::call(
                        RestApiMethod::GET, "promo/obtener/$id"
        );
    }

    public function registrar($data) {


        return RestApi::call(
                        RestApiMethod::POST, 'promo/insertar', $data
        );
    }

    public function actualizar($data, $id) {
        return RestApi::call(
                        RestApiMethod::PUT, "promo/actualizar/$id", $data
        );
    }

    public function eliminar($id) {
        return RestApi::call(
                        RestApiMethod::DELETE, "promo/eliminar/$id"
        );
    }

    public function registrarProd($data) {
        return RestApi::call(
                        RestApiMethod::POST, "promo/insertarprod", $data
        );
    }

    public function eliminarProd($idppro) {
        return RestApi::call(
                        RestApiMethod::DELETE, "promo/eliminarprodid/$idppro"
        );
    }

}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

