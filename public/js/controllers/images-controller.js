angular.module('workgames').controller('FotosController', function ($scope,$http) {
    $scope.images = [];
    $scope.filtro = '';
    
    
    $http.get('v1/fotos')
            .success(function(images){
                $scope.fotos = images
                
    })
   
        
   
})

// vamos entender esse codigo para amanhã = eu tenho um modulo que é o main. e eu tenho um controle que é referente ao modulo
//chamei meu controler de ImagesCotroller (controle sempre tem que começar com letra Maiscula e ter o nome Controller depois
// todo controler tem um nome e uma função. e dentro da função acontece algo. como o angular permite injeção de dependencia eju to passando
// o scope como uma depencia a algo do controle e digo que a img dessa dependencia a variavel name = ao watch dogos e a url dela é tal.
// e o que ocorre na minha view quando eu referencia esse image.name eu to referenciando o que meu controller controla.