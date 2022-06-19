var time = new Date()

var hora = time.getHours()
horario()

function horario(){

    if(hora>= 6 && hora<=11){

        var img = document.getElementById('manha')
        img.style.display = block

    }

    if(hora>= 12 && hora<=17){

        var img = document.getElementById('tarde')
        img.style.display = block



    }

    if(hora==18){

        var img = document.getElementById('escurecendo')
        img.style.display = block


    }

    if(hora>18 && hora<6) {

        var img = document.getElementById('noite')
        img.style.display = block


    }

    console.log(hora)
    

}