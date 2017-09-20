app.controller("IndicadorController", ["$scope","$http", function($scope,$http){

    /**
     * Indicador 5 - Valores
     * @type {number}
     */
    $scope.indicadorTotalAlunos = 5000;
    $scope.indicadorTotalOrientadores = 500;
    $scope.indicadorTotalCursos = 100;
    $scope.indicadorTotalPublicacoes = 1000;


    /**
     * $viewContentLoaded
     * Acionado quando o conteúdo é carregado
     */
    $scope.$watch('$viewContentLoaded', function(){
        $scope.createChartRankAlunosPublicacao();
        $scope.createChartRankOrientadoresPublicacao();
        $scope.createChartComparativoAlunos();
        $scope.createChartComparativoOrientadores();
        $scope.loadIndicadorTotalizador();
    });

    $scope.loadIndicadorTotalizador = function(){

        $http({
            method: 'GET',
            url: API_URL + "api/instituicao/indicador?idInstituicao=" + Sessao.instituicao.idInstituicao
        }).then(function successCallback(response) {

            var data = response.data;
            $scope.indicadorTotalCursos = data.totalCursos;
            $scope.indicadorTotalAlunos = data.totalAlunos;
            $scope.indicadorTotalOrientadores = data.totalOrientadores;
            $scope.indicadorTotalPublicacoes = data.totalPublicacoes;

        }, function errorCallback(response) {
            alert("Ocorreu um erro");
        });

    };

    /**
     * Gráfico - createChartRankAlunosPublicacao
     */
    $scope.createChartRankAlunosPublicacao = function(){
        Highcharts.chart('chartRankAlunosPublicacao', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            plotOptions: {
                column: {
                    depth: 25,
                    borderWidth: 0
                }
            },
            xAxis: {
                categories: ['Robson Fernandes', 'David Fernandes', 'Cléia Fernandes', 'Rodrigo de Abreu', 'Lauro Castilho']
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            series: [{
                name: 'Publicações',
                data: [50,20,30,100,80]
            }]
        });
    };

    /**
     * Gráfico - createChartRankOrientadoresPublicacao
     */
    $scope.createChartRankOrientadoresPublicacao = function(){
        Highcharts.chart('chartRankOrientadoresPublicacao', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            plotOptions: {
                column: {
                    depth: 25,
                    borderWidth: 0
                }
            },
            xAxis: {
                categories: ['Alneu Andrade', 'João Paulo', 'Nilceu Marana', 'Roberta Spolon', 'Francisco Louzada']
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            series: [{
                name: 'Publicações',
                data: [100,200,350,100,150]
            }]
        });
    };

    /**
     * Gráfico - Comparativo Alunos Ativos e Inativos
     */
    $scope.createChartComparativoAlunos = function(){

        Highcharts.chart('chartComparativoAlunos', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Alunos',
                data: [
                    ['Ativos', 60],
                    ['Inativos', 40]
                ]
            }]
        });
    }

    /**
     * Gráfico - Comparativo Alunos Ativos e Inativos
     */
    $scope.createChartComparativoAlunos = function(){

        Highcharts.chart('chartComparativoAlunos', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Alunos',
                data: [
                    ['Ativos', 60],
                    ['Inativos', 40]
                ]
            }]
        });
    }

    /**
     * Gráfico - Comparativo Orientadores Ativos e Inativos
     */
    $scope.createChartComparativoOrientadores = function(){

        Highcharts.chart('chartComparativoOrientadores', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Orientadores',
                data: [
                    ['Ativos', 60],
                    ['Inativos', 40]
                ]
            }]
        });
    }
}]);