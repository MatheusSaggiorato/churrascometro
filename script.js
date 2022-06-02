// Carne - 600g por homem e 400g por mulher + de 6 horas - 700g
// Cerveja - 1100ml por pessoa + de 6 horas - 1500ml
// Refrigerante/agua - 600ml por pessoa + 6 horas - 1200ml

let inputAdultos = document.getElementById("adultos")
let inputCrianças = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCrianças.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas)
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos
    let qtdTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas)

    
    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 1000)} Litros de Refrigerante</p>`

    function carnePorPessoa(duracao) {
        if (duracao >= 6) {
            return 700;
        }
        else {
            return 600
        }
    }

    function cervejaPorPessoa(duracao) {
        if (duracao >= 6) {
            return 1500;
        }
        else {
            return 1100
        }
    }
    function bebidasPorPessoa(duracao) {
        if (duracao >= 6) {
            return 1200;
        }
        else {
            return 600
        }
    }

}