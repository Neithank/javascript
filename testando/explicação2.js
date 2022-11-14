function parimp(n){
    if(n%2 == 0){
        return "par"
    }else{
        return "impar"
    }
}

let numero = parimp(11) 
/* Estou dando um parametro para "n", no qual será o valor 11
    Caso não exista essa chamada:
    variavel chamando a função e distribuindo o valor do parametro
    Não terá retorno nenhum
*/
console.log(numero)

function fatorial(n){
    if (n == 1){
        return 1
    } else
        return n * fatorial(n-1)
}
console.log(fatorial(5))