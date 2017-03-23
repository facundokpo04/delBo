<?php

class PersonaModel extends CI_Model {

    public function getAll($l = 5, $p = 0) {
        return RestApi::call(
                        RestApiMethod::GET, "persona/listar/$l/$p"
        );
    }

    public function obtener($id) {
        return RestApi::call(
                        RestApiMethod::GET, "persona/obtener/$id"
        );
    }

    public function registrar($data) {


        return RestApi::call(
                        RestApiMethod::POST, 'persona/insertar', $data
        );
    }

    public function actualizar($data, $id) {
        return RestApi::call(
                        RestApiMethod::PUT, "persona/actualizar/$id", $data
        );
    }

    public function eliminar($id) {
        return RestApi::call(
                        RestApiMethod::DELETE, "persona/eliminar/$id"
        );
    }

}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

