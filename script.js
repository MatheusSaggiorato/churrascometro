function validarCampos(...campos) {
    for (const campo of campos) {
        if (!campo.value) {
            alert('Por favor, preencha todos os campos');
            return true;
        }
    }
    return false;
};

function calcular() {
    const inputs = {
        homens: document.getElementById("homens"),
        mulheres: document.getElementById("mulheres"),
        criancas: document.getElementById("criancas"),
        bebemAlcool: document.getElementById("bebem-alcool"),
        duracao: document.getElementById("duracao")
    };

    if (validarCampos(inputs.homens, inputs.mulheres, inputs.criancas, inputs.bebemAlcool, inputs.duracao)) {
    } else {

        const consumo = {
            carneEntrada: 120,
            carnePrincipal: inputs.duracao.value <= 3 ? 350 : inputs.duracao.value > 10 ? 1200 : 450,
            acompanhamentos: inputs.duracao.value <= 3 ? 120 : inputs.duracao.value > 10 ? 400 : 180,
            refrigerantes: 750,
            bebidas: 900,
            carvao: 1.5,
            mulheres: 0.75,
            criancas: 0.5,
            percentualDescontoRefrigerante: 0.7
        };

        const calcularQuantidadeTotal = (consumoUnitario, perda) => {
            const { homens, mulheres, criancas } = inputs;
            return ((consumoUnitario * parseFloat(homens.value)) + (consumoUnitario * parseFloat(mulheres.value) * consumo.mulheres) + (consumoUnitario * parseFloat(criancas.value) * consumo.criancas)) * perda;
        };

        const qtdTotalEntrada = calcularQuantidadeTotal(consumo.carneEntrada, 1.15);
        const qtdTotalPrincipal = calcularQuantidadeTotal(consumo.carnePrincipal, 1.15);
        const qtdTotalAcompanhamento = calcularQuantidadeTotal(consumo.acompanhamentos, 1);
        const qtdTotalBebidas = parseFloat(inputs.duracao.value) * consumo.bebidas * parseFloat(inputs.bebemAlcool.value);
        const qtdTotalRefrigerante = (parseFloat(inputs.duracao.value) * calcularQuantidadeTotal(consumo.refrigerantes, 1)) - (qtdTotalBebidas * consumo.percentualDescontoRefrigerante);
        const qtdTotalCarvao = (qtdTotalEntrada + qtdTotalPrincipal) * consumo.carvao;

        document.querySelector("#entrada").textContent = `${Math.ceil(qtdTotalEntrada)} gramas`;
        document.querySelector("#principal").textContent = `${Math.ceil(qtdTotalPrincipal)} gramas`;
        document.querySelector("#acompanhamento").textContent = `${Math.ceil(qtdTotalAcompanhamento)} gramas`;
        document.querySelector("#refrigerante").textContent = `${Math.ceil(qtdTotalRefrigerante)}ml ≈ ${Math.ceil(qtdTotalRefrigerante / 2000)} litros de 2 litros`;
        document.querySelector("#bebidas").textContent = `${Math.ceil(qtdTotalBebidas)}ml ≈ ${Math.ceil(qtdTotalBebidas / 473)} latões de 473ml`;
        document.querySelector("#carvao").textContent = `${Math.ceil(qtdTotalCarvao)}kg`;
    }
}
