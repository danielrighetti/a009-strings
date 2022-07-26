//Exercício A

const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

//Exercício B
const frase2 = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja")

console.log(frase2)

//Exercicio C
console.log(`A nova string possui \"verde\"?\n 
${frase2.includes("verde")}\n
E \"laranja\"?\n
${frase2.includes("laranja")}`)

//Extra
const msgMaiuscula = frase2.toUpperCase("mas não deixe o gato sair")
console.log(msgMaiuscula)

// // outro exemplo 
// const frase1 = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

// const fraseTroca = frase1.replaceAll("verde","rosa").replaceAll("azul","laranja")
// const temVerde = fraseTroca.includes("verde")
// const temLaranja = fraseTroca.includes("laranja")



// console.log(fraseTroca)
// console.log(`A frase acima contém a palavra "verde"? ${temVerde}`)
// console.log(`A frase acima contém a palavra "laranja"? ${temLaranja}`)