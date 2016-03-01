angular.module('workgames', ['minhaDiretiva','ngRoute'])
        .config(function ($routeProvider){
            
    $routeProvider.when('/index', {
        templateUrl: 'pages/principal.html',
        controller: 'FotosController'
      });
    $routeProvider.otherwise({redirectTo: '/index'
        
      });
});
