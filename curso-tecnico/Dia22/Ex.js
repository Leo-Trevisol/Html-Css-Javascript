$(document).ready(function(){
    $("#entrar").click(function(){
        alert(`ui`)
    });
});

var lstProdutos = new Array()

function carregaProd(){
    for(let i = 1; i <7;i++){
        let produto = new Produto(i, 'Almofada '+i, parseFloat(500,00), 'imgs/almofada'+i+ '.jpeg', 2, true)
        
        lstProdutos.push(produto)
    }
   
       var img = document.getElementById('imgs')

       for(let i = 0; i<lstProdutos.length; i++){

        if(lstProdutos[i].vitrine){

            var strprod = ` <div>  <div class="card" style="width: 18rem;">  <img class="card-img-top" src="${lstProdutos[i].imagem}" alt="Imagem de capa do card"> <div class="card-body"> <h5 class="list-group-item">${lstProdutos[i].descricao}</h5> <ul class="list-group list-group-flush"> <li class="list-group-item">R$ ${lstProdutos[i].valor}</li>   <li class="list-group-item">${lstProdutos[i].estoque} itens no estoque</li><li class="btn btn-light">Adicionar ao carrinho</li></ul></div>`

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