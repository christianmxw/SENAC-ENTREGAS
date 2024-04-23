//Contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.//
const comidasPreferidas = ["lasanha", "arroz,feijao e ovo", "carne assada", "massa", "arroz"]
//Imprima no console o array completo.//
console.log(comidasPreferidas)
// Imprima no console a mensagem "Essas são as minhas comidas preferidas:" seguida por cada uma das comidas, uma embaixo da outra.//
console.log("essa sao minhas comidas preferidas:")
console.log(`0.`, comidasPreferidas[0])
console.log(`1.`, comidasPreferidas[1])
console.log(`2.`, comidasPreferidas[2])
console.log(`3.`, comidasPreferidas[3])
console.log(`4.`, comidasPreferidas[4])
//pergunte ao usuário uma comida preferida//
const comidaPreferida = prompt("Qual Sua Comida Preferida?")
console.log(`Sua Comida Favorita é: ${comidaPreferida}`)
//Troque a segunda comida da sua lista pela resposta do usuário e imprima no console a nova lista.//
comidasPreferidas[1] = comidaPreferida
console.log(comidasPreferidas)