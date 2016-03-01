angular.module('workgames').controller('ImagesController', function ($scope,$http) {
    $scope.images = [];
    
    $http.get('v1/fotos')
            .success(function(images){
                $scope.images = images;
                
    })
 
});

// vamos entender esse codigo para amanhã = eu tenho um modulo que é o main. e eu tenho um controle que é referente ao modulo
//chamei meu controler de ImagesCotroller (controle sempre tem que começar com letra Maiscula e ter o nome Controller depois
// todo controler tem um nome e uma função. e dentro da função acontece algo. como o angular permite injeção de dependencia eju to passando
// o scope como uma depencia a algo do controle e digo que a img dessa dependencia a variavel name = ao watch dogos e a url dela é tal.
// e o que ocorre na minha view quando eu referencia esse image.name eu to referenciando o que meu controller controla.



// relembrando o exericicio 2 que nós utilizamos o array.
// aqui nós aprendemos além do scope o http que serve para fazer requisições ajax. com ele nós podemos ir no nosso servidor pegar dados via json
// voltar e fazer uma especie de iff se tiver sucesso o scope.images = ao images que eu chamei a minha response.