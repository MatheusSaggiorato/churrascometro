/*

Churrasco de até 3 horas:

Carvão: 1,2kg por kg de assados
Carne de entrada: 150g por pessoa.
Carne principal: 350g por pessoa.
Acompanhamentos: 150g por pessoa.
Refrigerantes: 750ml por pessoa por hora.
Bebidas alcoólicas: 1L por pessoa por hora.



Churrasco de mais de 4 horas:

Carne de entrada: 200g por pessoa.
Carne principal: 450g por pessoa.
Acompanhamentos: 200g por pessoa.
Refrigerantes: 1500ml por pessoa.

crianças metade de tudo

*/

function validarCampos(...campos) {
    for (const campo of campos) {
        if (!campo.value || campo.value <= 0) {
            alert('Por favor, preencha todos os campos');
            return true;
        }
    }
    return false;
};


function calcular() {

    const inputHomens = document.getElementById("homens");
    const inputMulheres = document.getElementById("mulheres");
    const inputCrianças = document.getElementById("criancas");
    const inputBebemAlcool = document.getElementById("bebem-alcool");
    const inputDuracao = document.getElementById("duracao");

    const homens = inputHomens.value;
    const mulheres = inputMulheres.value;
    const criancas = inputCrianças.value;
    const bebemAlcool = inputBebemAlcool.value;
    const duracao = inputDuracao.value;

    if (validarCampos(inputHomens, inputMulheres, inputCrianças, inputBebemAlcool, inputDuracao)) {
    } else {

        let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas)
        let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos
        let qtdTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas)


        resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 1000)} Litros de Refrigerante</p>`

        document.querySelector("#entrada").textContent = `${qtdTotalEntrada.replace('.', ',')}gramas`;
        document.querySelector("#principal").textContent = `${qtdTotalPrincipal.replace('.', ',')}gramas`;
        document.querySelector("#acompanhamento").textContent = `${qtdTotalAcompanhamento}gramas`;
        document.querySelector("#refrigerante").textContent = `${qtdTotalRefrigerante}ml = ${Math.ceil(qtdTotalRefrigerante / 2000)} litros de 2 litros`;
        document.querySelector("#bebidas").textContent = `${qtdTotalBebidas}ml = ${Math.ceil(qtdTotalBebida/ 350)} latas de 350ml`;
        document.querySelector("#carvao").textContent = `${qtdTotalCarvao}kg`;
    }

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

function clearInputs() {
    location.reload();
}