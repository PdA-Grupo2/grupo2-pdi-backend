 const {exibirTela, multiplicaValor} = require('../lib/funcoescomuns')
 const {produtos} = require('../model/dados')
 
 function listarProdutos(){
     let valorTotal=0;
     for(let i=0; i<produtos.length; i++){
         valorTotal += multiplicaValor(produtos[i].quantidade, produtos[i].valor)
         exibirT
        exibirTela('${produtos[i].id} -${produtos[i].nome} -${prdutos[i].quantidade}') 
     }
     exibeTela('---> Total R$: ' + valorTotal)
}

exports.principal = () => {
  exibeTela('----------- Top Acessórios de Celular ----------')

  exibeTela('----- Lista Produtos - '  )
  
  listarProdutos()
}
 