 const {exibirTela, multiplicaValor} = require('../lib/funcoescomuns')
 const {produtos} = require('../model/dados')
 
 function listarProdutos(){
     let valorTotal=0;
     for(let i=0; i<produtos.length; i++){
         valorTotal += multiplicaValor(produtos[i].quantidade, produtos[i].valor)
         
        exibirTela(`${produtos[i].id} - ${produtos[i].nome} - ${produtos[i].quantidade}`) 
     }
     exibirTela('---> Total R$: ' + valorTotal)
}

exports.principal = () => {
  exibirTela('----------- Top Acessórios de Celular ----------')

  exibirTela('----- Lista Produtos - '  )
  
  listarProdutos()
}
 