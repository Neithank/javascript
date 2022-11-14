function verificar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var hor = document.getElementById("visor")
    var hora = Number(hor.value)

    if (hora == 01){
        img.src = `../horario/imagens/BomDia1.png`
        msg.innerHTML = `Está amanhecendo. <br/> Atualmente é ${hora} hora da manhã.`
    } else if (hora >= 02 && hora < 07){
        img.src = `../horario/imagens/BomDia1.png`
        msg.innerHTML = `Está amanhecendo. <br/> Atualmente são ${hora} horas da manhã.`
    } else if (hora >= 07 && hora < 12){
        img.src = `../horario/imagens/Amanhecer1.png`
        msg.innerHTML = `Bom dia! <br/> Atualmente são ${hora} horas da manhã.`
    } else if (hora == 12){
        img.src = `../horario/imagens/Amanhecer1.png`
        msg.innerHTML = `Aoba. <br/> Agora é Meio Dia!`
    }else if (hora >= 13 && hora <19){
        img.src = `../horario/imagens/Tarde1.png`
        msg.innerHTML = `Boa tarde! <br/> Atualmente são ${hora} horas da tarde.`  
    } else if (hora >= 19 && hora < 21){
        img.src = `../horario/imagens/Anoitecendo1.png`
        msg.innerHTML = `Boa noite! <br/> Atualmente são ${hora} horas da noite.`  
    } else if (hora >= 21 && hora <= 23){
        img.src = `../horario/imagens/Noite1.png`
        msg.innerHTML = `Boa noite! <br/> Atualmente são ${hora} horas da noite.`  
    } else if (hora == 24 || hora == 00){
        img.src = `../horario/imagens/Madrugada1.png`
        msg.innerHTML = `Aoba. <br/> Agora é Meia Noite! <br/> Podemos chamar de madrugada?`  
    } else {
        img.src = `../horario/imagens/Error.png`
        msg.innerHTML = "ERROR!"
    }
}
        
