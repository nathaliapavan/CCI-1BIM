app.controller("InstituicaoController", ["$scope","$http", function($scope,$http){

    /**
     * Collection Instituição
     * @type {Array}
     */
    $scope.collectionInstituicao = [];
    $scope.instituicaoDescricao = "";


    /**
     * $viewContentLoaded
     * Acionado quando o conteúdo é carregado
     */
    $scope.$watch('$viewContentLoaded', function(){
        $scope.findInstituicao();
    });

    /**
     * Find Instituição
     */
    $scope.findInstituicao = function(){

        var url = "";
        if ($scope.instituicaoDescricao != "")
            url = API_URL + "api/instituicao?descricao=" + $scope.instituicaoDescricao;
        else
            url = API_URL + "api/instituicao";

        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {

            var data = response.data;
            $scope.collectionInstituicao = data;

        }, function errorCallback(response) {
            alert("Ocorreu um erro");
        });

    };


    /**
     * Abrir Modal
     */
    $scope.openWindow = function(instituicao){
        $('#modalInstituicao').modal()
    };

    $scope.incluir = function(){
        $('#modalInstituicao').modal()
    };

}]);