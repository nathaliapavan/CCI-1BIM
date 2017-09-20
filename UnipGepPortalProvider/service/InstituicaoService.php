<?php
		require_once("business/InstituicaoBusiness.php");
		// Camada de serialização
		/**
		 * @author Robson
		 *
		 */
		class InstituicaoService
		{
		
			var $instituicaoBusiness;
			public function __construct()
			{
			   $this->instituicaoBusiness = new InstituicaoBusiness();
			}
			
			/**
			 * Pesquisa todas as instituições
			 * @return string
			 */
			public function findAll($attributes)
			{
				$instituicaoBusiness = new InstituicaoBusiness();
				$collection = $instituicaoBusiness->findAll($attributes);
				return json_encode($collection);
			}	

			public function insert($attributes){
				$instituicaoBusiness = new InstituicaoBusiness();
				$instituicaoBusiness->sigla = $attributes['sigla'];
				$instituicaoBusiness->descricao = $attributes['descricao'];
				$instituicaoBusiness->ativo = $attributes['ativo'];

				return $instituicaoBusiness->save();
			}

			public function delete($attributes){
				$instituicaoBusiness = new InstituicaoBusiness();
				$instituicaoBusiness->idInstituicao = $attributes['idInstituicao'];

				return $instituicaoBusiness->delete();
			}

		}

?>