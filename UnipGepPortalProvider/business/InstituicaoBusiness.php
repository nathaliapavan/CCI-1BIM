<?php

		require_once("util/Factory.php");
		// Camada de negocio
		/**
		 * @author Robson
		 *
		 */
		class InstituicaoBusiness
		{
				public $sigla;
				public $descricao;
				public $ativo;
				public $idInstituicao;

				public $con;
				public function __construct()
				{
				   $this->con = new Factory();
				}
				
				/**
				 * Pesquisa todas as instituições
				 * @return string
				 */
				public function findAll($attributes)
				{

					$query = "select * from Instituicao";

					$where = array();

					if(!empty($attributes)){
						foreach ($attributes as $coluna => $valor) {
							$where[] = "$coluna = '$valor'";
						}

						if(!empty($where))
							$query .= " WHERE ".implode(' AND ', $where);
					}

					$rs = $this->con->getConnection()->query($query);

					$collection = $rs->fetchAll( PDO::FETCH_OBJ );
					return $collection;
				}

				public function save(){
					$query = "
						INSERT INTO Instituicao 
							(sigla, descricao, ativo) 
						VALUES 
							('$this->sigla', '$this->descricao', '$this->ativo')";
					if($this->con->getConnection()->query($query))
						return true;
					else
						return false;
				}
				
				public function delete(){
					$query = "
						DELETE FROM Instituicao 
						WHERE idInstituicao = '$this->idInstituicao'";

					if($this->con->getConnection()->query($query))
						return true;
					else
						return false;
				}

		}

?>