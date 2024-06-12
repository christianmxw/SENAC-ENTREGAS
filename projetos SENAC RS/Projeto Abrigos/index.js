
// Definições básicas
let continuar = true
const dados = []


// Função para cadastro
function cadastrar() {
	const cadastro = {
		nome: prompt("Qual O Nome Do Abrigo?"),
		endereco: prompt("Qual O Endereço"),
		telefone: prompt("Numero de Telefone?"),
		capacidade: prompt("Qual a Capacidade de Lotação?")
	}
	console.log(`Nome:${cadastro.nome}, Endereço:${cadastro.endereco}, Telefone:${cadastro.telefone}, Capacidade:${cadastro.capacidade}`)
	dados.push(cadastro)
}

// Função para listar
function listar() {
	for (const objeto of dados)
		console.log(`Lista de Abrigos: ${objeto.nome}`)
}



// Função para buscar
function buscar() {
	const busca = {
	cidade: prompt("Qual sua cidade?")
	}
		console.log(`Cidade de Busca: ${busca.cidade}`)
	for (const casa of dados)
			console.log(`Abrigos Procurados:
		Nome: ${casa.nome}, Endereço: ${casa.endereco}, Telefone: ${casa.telefone}
		Capacidade do Abrigo: ${casa.capacidade}`)

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
		pergunta += "1. Cadastrar abrigo\n"
		pergunta += "2. Listar abrigos\n"
		pergunta += "3. Procurar abrigo\n"
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
		case 0:
			sair()
			break
	}
}