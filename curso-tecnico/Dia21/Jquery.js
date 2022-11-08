

var lista = new Array()



var confirm = false


$(document).ready(function(){
    $("#btAdd").click(function(){
            if($("#valor").val() == "" || $("#equipamento").val() == "" || $("#potencia").val() == "" || $("#horas").val() == "" ){
                alert('Preencha todos os campos!')
            }else{
                var equipamento = $("#equipamento").val()
                var potencia = $("#potencia").val()
                var horas = $("#horas").val()
                var valor = $("#valor").val()
                var calc = Number(((potencia * horas)/1000)*valor)
                let energia = new Energia(equipamento, potencia, horas, calc);
                lista.push(energia)
                alert(`O valor é ${calc}`)

                

                const tabela = document.createElement("table");
                 const tbody = document.createElement("tbody");

                const row  = document.createElement('tr')

                const cell1 = document.createElement("td");
                const cell2 = document.createElement("td");
                const cell3 = document.createElement("td");
                const cell4 = document.createElement("td");


                const text1 = document.createTextNode(equipamento);
                const text2 = document.createTextNode(potencia);
                const text3 = document.createTextNode(horas);
                const text4 = document.createTextNode(calc);

                if(confirm == false){
                    add()
                    confirm = true
                }


                cell1.appendChild(text1);
                row.appendChild(cell1);

                cell2.appendChild(text2);
                row.appendChild(cell2);

                cell3.appendChild(text3);
                row.appendChild(cell3);

                cell4.appendChild(text4);
                row.appendChild(cell4);

                tbody.appendChild(row);
                tabela.appendChild(tbody);
                document.body.appendChild(tabela);
                tabela.setAttribute("border", "2");



                tabela.className = "table table-dark";


            }
        });


    });


    
class Energia{
    constructor(equipamento, potencia, horas, valor){
        this.equipamento = equipamento
        this.potencia = potencia
        this.horas = horas
        this.valor = valor
    }
}


function add(){

    const rowcab  = document.createElement('tr')
    const cabecalho1 = document.createElement("td");
    const cabecalho2 = document.createElement("td");
    const cabecalho3 = document.createElement("td");
    const cabecalho4 = document.createElement("td");
    const cab1 = document.createTextNode("Aparelho");
    const cab2 = document.createTextNode("Potência");
    const cab3 = document.createTextNode("Horas");
    const cab4 = document.createTextNode("Custo");

    cabecalho1.appendChild(cab1);
    rowcab.appendChild(cabecalho1);
    cabecalho2.appendChild(cab2);
    rowcab.appendChild(cabecalho2);
    cabecalho3.appendChild(cab3);
    rowcab.appendChild(cabecalho3);
    cabecalho4.appendChild(cab4);
    rowcab.appendChild(cabecalho4);

}