
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
   
    gerarProdDefault()

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


function gerarProdDefault(){

        let produto = new Produto(1, "Almofada elfa +18", 500, 'imgs/almofada1.jpeg', 3, true, "+18")
        let produto1 = new Produto(2, "Almofada garota +18", 500, 'imgs/almofada2.jpeg', 2, true, "+18")
        let produto2 = new Produto(3, "Almofada empregadas", 300, 'imgs/almofada3.jpeg', 5, true, "normal")
        let produto3 = new Produto(4, "Almofada garota demonio 1", 250, 'imgs/almofada4.jpeg', 4, true, "normal")
        let produto4 = new Produto(5, "Almofada Hatsune Miku 1", 300, 'imgs/almofada5.jpeg', 4, true, "normal")
        let produto5 = new Produto(6, "Almofada Hatsune Miku 2", 300, 'imgs/almofada6.jpeg', 2, true, "normal")
        let produto6 = new Produto(7, "Almofada garota demonio 2", 300, 'imgs/almofada7.jpeg', 2, true, "normal")
        let produto7 = new Produto(8, "Almofada deusa azul", 320, 'imgs/almofada8.jpeg', 2, true, "normal")
        let produto8 = new Produto(8, "Almofada garota borboleta", 400, 'imgs/almofada9.jpeg', 3, true, "+18")


        lstProdutos.push(produto)
        lstProdutos.push(produto1)
        lstProdutos.push(produto2)
        lstProdutos.push(produto3)
        lstProdutos.push(produto4)
        lstProdutos.push(produto5)
        lstProdutos.push(produto6)
        lstProdutos.push(produto7)
        lstProdutos.push(produto8)


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
    constructor(codigo, descricao, valor, imagem, estoque, vitrine, tipo){
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.imagem = imagem;
        this.estoque = estoque;
        this.vitrine = vitrine;
        this.tipo = tipo;
    }

    
}
