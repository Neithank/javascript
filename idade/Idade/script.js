var dian = document.getElementById("txtdia")
var mesn = document.getElementById("txtmes")
var anon = document.getElementById("txtano")

let d = new Date()
let ano_atual = d.getFullYear()
let mes_atual = d.getMonth() + 1
let dia_atual = d.getDate()

var res = document.getElementById("res")
var sex = document.getElementsByName("radsex")
var sexo = " "


function verificar(){
var dia_nasc = Number(dian.value)
var mes_nasc = Number(mesn.value)
var ano_nasc = Number(anon.value)
var idade = ano_atual - ano_nasc
var idade1 = idade - 1

if (dia_nasc <  1 || mes_nasc < 1 || ano_nasc < 1 || dia_nasc >= 32 || mes_nasc >= 13 || ano_nasc > ano_atual){
    window.alert("O valor informado é invalido, por favor digite um valor Valido")
}
    if(sex[0].checked){
        sexo = "Masculino" 
    } else
        sexo = "Feminino" 

    if (sexo == "Masculino"){
        if(mes_atual > mes_nasc ||mes_atual == mes_nasc && dia_atual >= dia_nasc){
            res.innerHTML = `Atualmente você possui ${idade} e é do gênero ${sexo}`
        }else
            res.innerHTML = `Atualmente você possui ${idade1} e é do gênero ${sexo}`    
    } else
        if(mes_atual > mes_nasc ||mes_atual == mes_nasc && dia_atual >= dia_nasc){
            res.innerHTML = `Atualmente você possui ${idade} e é do gênero ${sexo}`
        }else
            res.innerHTML = `Atualmente você possui ${idade1} e é do gênero ${sexo}` 
            
}

/*
function CalcIdade(){
    let d = new Date()
    let ano_atual = d.getFullYear()
    let mes_atual = d.getMonth() + 1
    let dia_atual = d.getDate()
    //    let split =  data.split('/')
    //    let hoje = split [1] + "/" + split [0] + "/" split[2]
    let ano_nasc = nasc [0]
    let mes_nasc = nasc [2]
    let dia_nasc = nasc [3]
    let atual_idade = ano_atual - ano_nasc
    if(mes_atual <  mes_nasc || mes_atual == mes_nasc && dia_atual < dia_nasc){
        res.innerHTML = `Atualmente você possui ${idade}`
    }
    return idade < 0 ? 0 : atual_idade
}
*/