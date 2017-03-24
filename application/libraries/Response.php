<?php

class Response
{
	public $result     = null;
	public $response   = false;
	public $message    = 'Ocurrio un error inesperado.';
        public $errors     = [];
	
	public static function SetResponse($response, $m='',$result=-1)
	{
		$this->response = $response;
		$this->message = $m;
                $this->result = $result;

		if(!$response && $m = '') $this->response = 'Ocurrio un error inesperado';
        
        return $this;
	}
}