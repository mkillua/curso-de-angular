angular.module('minhaDiretiva',[])
        .directive('meuPainel', function(){
  
  var ddo={};
  ddo.restrict = "AE";
   ddo.transclude = true;
  ddo.scope = {
      titulo:'@titulo'
  };
   
  ddo.template = 
          + '<div class ="panel-default">'
          + '<div class ="panel-heading">'
                        + '<h3 class="panel-title">{{titulo}}</h3>'   
                    + '</div>'
                    + '<div class="panel-body" ng-transclude>'
            + '</div>'
                + '</div>';
    return ddo;
});



// var DDO = directive definition object
// e eu to definindo como eu posso acessar esse objeto ddo como AE (ATRIBUITO E ELEMENTO)
// ATRIBUTE <div painelTest> </div> ELEMENT <painelTest> </painelTest>
// se você usar letra maiscula nas com nome de directiva o angular quebra com - exemplo painelTest = painel-test
//  Angular altera aquele fragmento do DOM substituindo por um novo que representa a marcação da nossa diretiva, nesse processo, perdemos todos os seus elementos filhos. Para que o Angular preserve o conteúdo original da diretiva, precisamos usar o mecanismo de transclusão.
