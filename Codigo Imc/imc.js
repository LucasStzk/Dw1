function calcularIMC() {
    const peso = parseFloat(document.getElementById("inputpeso").value);
    const altura = parseFloat(document.getElementById("inputaltura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        return { imc: "-", classificacao: "Valores inválidos" };
    }

    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    return { imc: imc.toFixed(2), classificacao };
}

document.getElementById("calcularBtn").addEventListener("click", function () {
    const resultado = calcularIMC();
    document.getElementById("resp").textContent = resultado.imc;
    document.getElementById("classificacao").textContent = resultado.classificacao;
});