var time = new Date()
var hora = time.getHours()
var img = document.getElementById('im')
var msg = document.getElementById('hora')
var cont = document.getElementById('container')
horario()

function horario(){

    if(hora>= 6 && hora<=11){
        img.src = 'dias/manha.jpg'
        msg.innerHTML = `BOM DIA!<br> São ${hora} horas da manhã.`
        cont.style.background = 'rgba(255, 255, 0, 0.503)'

        

    if(hora>= 12 && hora<=17){
        img.src = 'dias/tarde.jpg'
        msg.innerHTM = `BOA TARDE!<br> São ${hora} horas da tarde.`
        cont.style.background = 'rgba(135, 207, 235, 0.614)'
    }

    if(hora==18){
        img.src = 'dias/escurecendo.jpg'
        msg.innerHTML = `ATENCAO!<br> São ${hora} horas da tarde.`
        cont.style.background = 'rgba(167, 64, 12, 0.515)'
    }

    if(hora>18 && hora<6) {
        img.src = 'dias/noite.jpg'
        msg.innerHTML = `BOA NOITE!<br> São ${hora} horas da noite.`


    }
}
}

    

