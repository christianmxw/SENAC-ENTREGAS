
// Definições básicas
let continuar = true
const dados = []


// Função para cadastro
function cadastrar() {
	const cadastro = {
		nome: prompt("Qual seu nome?"),
		idade: prompt("Qual sua idade?"),
		peso: prompt("Qual seu peso?"),
		tipoS: prompt("Qual o tipo sanguíneo?"),
		ultimaD: prompt("Ultima Doação?"),
	}
	console.log("⬇ CADASTRO DO USUARIO ⬇"),	
	console.log(`NOME:${cadastro.nome}, IDADE::${cadastro.idade}, PESO:${cadastro.peso}, TIPO SANGUÍNEO:${cadastro.tipoS}, ULTIMA DOAÇÃO:${cadastro.ultimaD}`)
	dados.push(cadastro)
}

// Função para listar
function listar() {
	for (const objeto of dados){
	console.log("⬇ LISTA E DADOS DO USUARIO ⬇")
	console.log(`NOME:${objeto.nome}, IDADE:${objeto.idade}, PESO:${objeto.peso}, TIPO SANGUÍNEO:${objeto.tipoS}, ULTIMA DATA DE DOAÇÃO:${objeto.ultimaD}`)
}
}



// Função para buscar o tipo sanguíneo
function buscar() {
	console.log("⬇ BUSCAR TIPO SANGUÍNEO ⬇")
	const busca = prompt("QUAL O TIPO SANGUÍNEO?")

	for (let i = 0; i < dados.length; i++ ){
		const item = dados[i]
		if (item.tipoS === busca){
	console.log(`${i + 1} | ${item.nome} | ${item.idade} | ${item.peso} | ${item.tipoS} | ${item.ultimaD}`)
		}

	}
}
			

// funçãom para buscar data da ultima doação de sangue
function buscarDT(){
	console.log("⬇ BUSCAR ULTIMA DATA ⬇")
	const buscaDT = prompt("DATA PESQUISADA")

	for(let i = 0; i < dados.length; i++ ){
		const item = dados[i]
		if(item.ultimaD === buscaDT){
		console.log(`${i + 1} | ${item.nome} | ${item.idade} | ${item.peso} | ${item.tipoS} | ${item.ultimaD}`)
		}
	}
}


// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "ABRIGOS TEMPORÁRIOS\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar doador\n"
		pergunta += "2. Listar doadores\n"
		pergunta += "3. Buscar doador por tipo sanguíneo\n"
		pergunta += "4. Buscar doador por data da última doação\n"	
		pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 4:
	buscarDT()
		break
		case 0:
			sair()
			break
	}
}