//peguntar nome e email do usuario//
const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email?")
const emailMinusculo = email.toLowerCase()
//colocar a string do email em minusculas e imprimir nome e email no console//
console.log("nome:", nome)
console.log("email:", emailMinusculo)
//imprimir no console "email cadastrado com sucesso, bem vindas ao usuario"//
console.log(`O e-mail: ${email}, foi cadastrado com sucesso. Seja Bem-Vinda(o):, ${nome}`)