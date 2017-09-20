app.controller("IndexController", ["$scope", function($scope){


    /**
     * Controla Exibição dos Módulos
     * @type {boolean}
     */
    $scope.showModuloHome = true;
    $scope.showModuloAluno = true;
    $scope.showModuloOrientador = true;
    $scope.showModuloPublicacao = true;
    $scope.showModuloCurso = true;
    $scope.showModuloInstituicao = true;


    /**
     * $viewContentLoaded
     * Acionado quando o conteúdo é carregado
     */
    $scope.$watch('$viewContentLoaded', function(){
        $scope.loadView =  'view/indicadorView.html';
    });

    /**
     * Abrir Módulo - Home
     */
    $scope.onClickShowHome = function(){
        $scope.loadView =  'view/indicadorView.html';
    }

    /**
     * Abrir Módulo - Aluno
     */
    $scope.onClickShowAluno = function(){
        //Desenvolver...
    }
    
    /**
     * Abrir Módulo - Orientador
     */
    $scope.onClickShowOrientador = function(){
        //Desenvolver...
    }

    /**
     * Abrir Módulo - Orientador
     */
    $scope.onClickShowOrientador = function(){
        //Desenvolver...
    }

    /**
     * Abrir Módulo - Publicação
     */
    $scope.onClickShowPublicacao = function(){
        //Desenvolver...
    }

    /**
     * Abrir Módulo - Curso
     */
    $scope.onClickShowCurso = function(){
        //Desenvolver...
    }

    /**
     * Abrir Módulo - Instituição
     */
    $scope.onClickShowInstituicao = function(){
        $scope.loadView =  'view/instituicaoView.html';
    }
}]);