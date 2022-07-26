const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const remEspaco = minhaString.trim()

console.log(`A frase ${minhaString} possui ${minhaString.length} caracteres \nJá a frase ${remEspaco} possui ${remEspaco.length} caracteres`)

const tirarTracos = remEspaco.replaceAll("________", "sticioso")

console.log(tirarTracos)