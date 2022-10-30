var testeprimerio = false;
var testesegundo = false;
var votonmr = "";


function ColocarVoto(numero){
    if(testeprimerio == false){
        document.querySelector('#n1').innerHTML = numero;
        testeprimerio = true;
        votonmr = "" + numero;
        const audio = new Audio('clique.mp3');
audio.play();
    } else if(testesegundo == false) {
        document.querySelector('#n2').innerHTML = numero;
        testesegundo = true;
        votonmr = votonmr + "" + numero;
        console.log(votonmr);
        votoint = parseInt(votonmr);
        const audio = new Audio('clique.mp3');
audio.play();
        
        if (votoint == 67){
            const stylesheet = new CSSStyleSheet();
        stylesheet.insertRule('#foto {background-image: url("ogas.jpg"); background-size: cover; }');
        document.adoptedStyleSheets = [stylesheet];
        document.querySelector('#nomecand').innerHTML = "Mc Vitão (Olha o gás)";

        } else if(votoint == 33){
            const stylesheet = new CSSStyleSheet();
            stylesheet.insertRule('#foto {background-image: url("bele.jpg"); background-size: cover; }');
            document.adoptedStyleSheets = [stylesheet];
            document.querySelector('#nomecand').innerHTML = "Bele Belinha";
        }



    }

    
}

function Confirma(){
    votoint = parseInt(votonmr);
    if(votoint == 67){
        const audio = new Audio('confirma.mp3');
audio.play();
Resetar();


    } else if(votoint == 33){
        const audio = new Audio('confirma.mp3');
audio.play();
Resetar();
    } else{
        Resetar();
        
    }
}

function Resetar(){
    document.querySelector('#n1').innerHTML = "";
    document.querySelector('#n2').innerHTML = "";
    testeprimerio = false;
testesegundo = false;
votonmr = "";
const stylesheet = new CSSStyleSheet();
            stylesheet.replace('#foto {top: 57; left: 848px; width: 313px; height: 313px; background:rgba(217,217,217,1);}');
            document.adoptedStyleSheets = [stylesheet];

            document.querySelector('#nomecand').innerHTML = "";


}