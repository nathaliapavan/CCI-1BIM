<?php
		class Factory
		{
				var $user;
				var $password;
				var $database;
				var $server;
				

				public function __construct() 
				{
						$this->user		  = "unipgep";
						$this->password   = "Unip123#";
						$this->database   = "unipgep";
						$this->server     = "unipgep.mysql.dbaas.com.br";
				}
				
				public function getConnection()
				{
					 $con = new PDO("mysql:host=$this->server;dbname=$this->database;charset=UTF8", 
					 				$this->user, 
									$this->password);
	
					return $con; 
				}
								
		}

?>