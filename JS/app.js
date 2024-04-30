function verificacaoIdade(){
    var idade = prompt('Qual sua idade? ')
    if (parseInt(idade) < 18){
        location.href = './pagina2.html'
    }else{
        alert(`Por ter ${idade} anos, voce e permitido nesse site`)
    }
}

function login(){
    var usuario = prompt('Digite seu nome de usuario')
    var senha = prompt('Digite sua senha')
    if (usuario == 1234 && senha ==1234){
        alert('Login feito com sucesso')
    }else{
        alert('Nome de usuario ou senha estao incorretos. Tente novamente')
        login()
    }
}

var precoTotal = 0
function calculadora() {

    var quantidadeBucci = parseInt(document.getElementById("quantidadeBucci").value)
    var precoUnitarioBucci = 174.99
    var totalBucci = quantidadeBucci * precoUnitarioBucci

    var quantidadeAmarone = parseInt(document.getElementById("quantidadeAmarone").value)
    var precoUnitarioAmarone = 791.00
    var totalAmarone = quantidadeAmarone * precoUnitarioAmarone

    var quantidadePerini = parseInt(document.getElementById("quantidadePerini").value)
    var precoUnitarioPerini = 49.99
    var totalPerini = quantidadePerini * precoUnitarioPerini

    

    precoTotal += totalBucci + totalAmarone + totalPerini

    document.getElementById("precoTotal").innerText = `Preco total do carrinho: R$${precoTotal.toFixed(2)}`
    alert('Adicionado ao carrinho com sucesso');
    
    document.getElementById("quantidadeBucci").value = "0"
    document.getElementById("quantidadeAmarone").value = "0"
    document.getElementById("quantidadePerini").value = "0"
}

function aplicarDesconto(){
    var compra = parseFloat(document.getElementById("precoTotal").innerText.replace("Preco total do carrinho: R$",""))
    var cupom = document.getElementById("cupomDesconto").value
    
    if (cupom == 'FIAP2024'){
        var porcentagem = compra * 0.10
        var desconto = compra - porcentagem
        document.getElementById("precoTotal").innerText = `Preco total do carrinho com 10% de desconto: R$${desconto.toFixed(2)}`
    }else{
        alert('Voce digitou o codigo errado!')
    }
}

function enviarFormulario(){
    var campoEmail = document.getElementById("email").value
    var campoCelular = document.getElementById("celular").value
    alert(`Enviaremos novidades para voce pelo email ${campoEmail} ou pelo numero de celular ${campoCelular}`)
    document.getElementById("email").value = ""
    document.getElementById("celular").value = ""
}



// verificacaoIdade()


