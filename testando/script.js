let num = document.getElementById("visor")
let lista = document.getElementById("lista")
let res = document.getElementById("res")
let valores = []

function analise(num){
    if(Number(num) >= 1 && Number(num) <= 500){
        return true
    } else
        window.alert("Número Invalido!")
}

function rept(num, valores){
    if(valores.indexOf(Number(num)) == -1){
        return true
    } else
        window.alert("Número já informado")
}

function adicionar(){
    if(analise(num.value) && rept(num.value, valores)){
        valores.push(Number(num.value))
        let add = document.createElement("option")
        add.text = `Número ${num.value} adicionado.`
        lista.appendChild(add)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function finalizar(){

    if(valores.length == 0 || valores.length == 1){
        window.alert("Adicione mais de um valor válido antes de finalizar!")
    } else{
        let todo = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / todo
        res.innerHTML +=` <p>Tivemos ao total ${todo} números informados.</p>`
        res.innerHTML +=` <p>O maior número informado foi o ${maior}.</p>`
        res.innerHTML +=` <p>O menor número informado foi o ${menor}.</p>`
        res.innerHTML +=` <p>A Soma de todos os números é de: ${soma}.</p>`
        res.innerHTML +=` <p>A média dos valores informado é de: ${media}.</p>`
    }

}
