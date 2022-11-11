
    var img = document.getElementById('imgs')

    var lstProdutos = new Array()

    var lstCarrinho = new Array()




    var carrinho = document.getElementById('valorcarrinho')

    let valorCarrinho = 0
    
    
        $(document).ready(function(){
        $("#entrar").click(function(){
            alert(`ui`)
        });
        $("#imglupa").click(function(){
            var text = $('#pesquisar').val()
            for(var i = 0; i< lstProdutos.length; i++){
                if(text.toUpperCase().trim() == lstProdutos[i].descricao.toUpperCase().trim() ){
                    img.innerHTML = ''

                    var strprod = ` <div>  <div class="card" style="width: 18rem;">  <img class="card-img-top" src="${lstProdutos[i].imagem}" alt="Imagem de capa do card"> <div class="card-body"> <h5 class="list-group-item">${lstProdutos[i].descricao}</h5> <ul class="list-group list-group-flush"> <li class="list-group-item">R$ ${lstProdutos[i].valor}</li>   <li class="list-group-item">${lstProdutos[i].estoque} itens no estoque</li><li class="btn btn-light">Adicionar ao carrinho</li></ul></div>`

                    img.innerHTML += strprod
                }
            }
        });
        $("#menorpmaior").click(function(){
            img.innerHTML = ''

            lstProdutos.sort((a,b) => a.valor - b.valor);

            for(let i = 0; i<lstProdutos.length; i++){

                if(lstProdutos[i].vitrine){
        
                    var strprod = ` <div>  <div class="card" style="width: 18rem;">  <img class="card-img-top" src="${lstProdutos[i].imagem}" alt="Imagem de capa do card"> <div class="card-body"> <h5 class="list-group-item">${lstProdutos[i].descricao}</h5> <ul class="list-group list-group-flush"> <li class="list-group-item">R$ ${lstProdutos[i].valor}</li>   <li class="list-group-item">${lstProdutos[i].estoque} itens no estoque</li><li class="btn btn-light">Adicionar ao carrinho</li></ul></div>`
        
                    img.innerHTML += strprod
                }
               }
        });
        $("#maiorpmenor").click(function(){
            img.innerHTML = ''

           lstProdutos.sort((a,b) => b.valor - a.valor);

            for(let i = 0; i<lstProdutos.length; i++){

                if(lstProdutos[i].vitrine){
        
                    var strprod = ` <div>  <div class="card" style="width: 18rem;">  <img class="card-img-top" src="${lstProdutos[i].imagem}" alt="Imagem de capa do card"> <div class="card-body"> <h5 class="list-group-item">${lstProdutos[i].descricao}</h5> <ul class="list-group list-group-flush"> <li class="list-group-item">R$ ${lstProdutos[i].valor}</li>   <li class="list-group-item">${lstProdutos[i].estoque} itens no estoque</li><li class="btn btn-light">Adicionar ao carrinho</li></ul></div>`
        
                    img.innerHTML += strprod
                }
               }
        });
        $('#btcarrinho').click(function(){
           if(lstCarrinho.length == 0){
            alert('Seu carrinho esta vazio!')
           }else{
           }
        });
        });

        
function carregaProd(){
   
        gerarProd()

       for(let i = 0; i<lstProdutos.length; i++){

        if(lstProdutos[i].vitrine){

            var strprod = ` <div>  <div class="card" style="width: 18rem;">  <img class="card-img-top" src="${lstProdutos[i].imagem}" alt="Imagem de capa do card"> <div class="card-body"> <h5 class="list-group-item">${lstProdutos[i].descricao}</h5> <ul class="list-group list-group-flush"> <li class="list-group-item">R$ ${lstProdutos[i].valor}</li>   <li class="list-group-item">${lstProdutos[i].estoque} itens no estoque</li><li class="btn btn-light" 
            onclick="adicionacarrinho(${lstProdutos[i].codigo})">Adicionar ao carrinho</li></ul></div>`

            img.innerHTML += strprod
        }
       }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


function gerarProd(){
    for(let i = 1; i <7;i++){

        let produto = new Produto(i, 'Almofada '+i, parseFloat(500 + i), 'imgs/almofada'+i+ '.jpeg', 2, true)
        let produto1 = new Produto(i, 'Almofada '+i, parseFloat(300 + i), 'imgs/almofada'+i+ '.jpeg', 2, true)

        
        lstProdutos.push(produto)
        lstProdutos.push(produto1)

    }
}

function adicionacarrinho(pro){

    achou=false;
    i=0;
    while(achou===false && i<lstProdutos.length){
        if(lstProdutos[i].codigo === pro){
            lstCarrinho.push(lstProdutos[i]);
            achou=true;
        }
        else{
            i++;
        }
    }

    valorCarrinho++

    carrinho.innerHTML = valorCarrinho
    
}

class Produto{
    constructor(codigo, descricao, valor, imagem, estoque, vitrine){
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.imagem = imagem;
        this.estoque = estoque;
        this.vitrine = vitrine;
    }

    
}
