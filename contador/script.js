let inicio = document.getElementById("n_inicial")
let fim = document.getElementById("n_final")
let inter = document.getElementById("n_intervalos")
let res = document.getElementById("res")

function verificar(){
    let inicial = Number(inicio.value)
    let final = Number(fim.value)
    let intervalos = Number(inter.value)
    
    if (inicial == 0 || final == 0 || intervalos == 0 || inicial > 100 || final > 100 || intervalos > 100){
        window.alert("Não seja cuzão, preencha os campos necessários de acordo com as informações cedidas!")
        res.innerHTML = " "
    }else
        res.innerHTML = `Corre Berg!!` //\u{1F3C3} ${inicial}`

        /*
        if (inicial < final){
            while(inicial < final){
                inicial = inicial + intervalos
                    res.innerHTML += ` \u{1F3C3} ${inicial}`
            }
        } else (inicial > final)
            while(inicial > final){
                inicial= inicial - intervalos
                    res.innerHTML +=`\u{1F3C3} ${inicial}`
            }

        
        if (inicial < final){
            do{ inicial = inicial + intervalos
               res.innerHTML += `\u{1F3C3} ${inicial}`
            } while(inicial < final)

        }else //(inicial > final)
            do{ inicial = inicial - intervalos
                res.innerHTML += `\u{1F3C3} ${inicial}`
            }while(inicial > final)
        */    

        if(inicial < final){
            for (; inicial <= final; inicial = inicial + intervalos){
                res.innerHTML += `\u{1F3C3} ${inicial}`
            }   
        } else
            for(; inicial >= final; inicial = inicial - intervalos){
                res.innerHTML += `\u{1F3C3} ${inicial}`
            }
        
}