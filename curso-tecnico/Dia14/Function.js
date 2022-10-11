casamento("leozin", "Egirl")

var md = mediaFc(30, 45, 60)
document.write(md)

if(2 > 4){
    alert ("oiiii")
}else{
    alert ("aiiiiii")
}

escolha(3)





function escolha(dia){
    switch(dia){
        case 1: 
        alert("Dia 1: mamar")
        break;
        case 2:
            alert("Dia 2: beijar")
            break;
        case 3:
            alert("Dia 3: rezar")
            break
    }
}
function casamento(homem,mulher){
    alert (homem + " é casado com " + mulher)
}
function mediaFc(vl1, vl2, vl3){
    var media = (vl1 + vl2 + vl3)/3
    return media
}



