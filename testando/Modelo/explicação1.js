let test = [0]

test[1] = 2 // Acrescentamos no indice 1 daquela variavel o numero 2
test.push(3) // .push irá sempre acrescentar o numero informado em () na última posição
test.length // Informa a quantidade de indices que a variavel possui
test.sort() // Irá ordenar os números em Ordem Crescente 

/*for(test2 = 0 ; test2 <= test.length ; test2++){
    console.log(test[test2])
}
*/

for(test2 in test){
    console.log(test[test2])
}

test.indexOf(2) 
/* indexOf busca dentro daquela variavel o valor entre "()" 
e retorna o indice daquele número
Caso não tenha aquele valor ele irá retornar -1
*/