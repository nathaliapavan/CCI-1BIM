<?php
// Estrutura usada para dar permissao aos acessos do servico
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE');
header('X-Requested-With: *');
    
require 'vendor/autoload.php';
require_once 'service/InstituicaoService.php';

//instancie o objeto
$app = new \Slim\Slim(); // Framework

//defina a rota
$app->get('/api/instituicao', function () { 
  $instituicaoService = new InstituicaoService();
  echo $instituicaoService->findAll($_REQUEST);
}); 

$app->post('/api/instituicao', function (){
	$instituicaoService = new InstituicaoService();
	echo $instituicaoService->insert($_REQUEST);
});

$app->delete('/api/instituicao', function (){
	$instituicaoService = new InstituicaoService();
	echo $instituicaoService->delete($_REQUEST);
});
//rode a aplicação Slim 
$app->run();

?>