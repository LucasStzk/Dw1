function calcular(){

    let tarifa = 0;
    let horas = parseInt(document.getElementById("inputhoras").value);
    let tipo = document.getElementById("inputtipo").checked;
    let frequencia = document.getElementById("inputfrequente").checked;

    if(horas <= 0){
        alert("As horas devem ser maior que 0");
        return;
    }

    if(horas <= 24){
        tarifa = horas * 2.5;
    } 

    else {
        let dias = Math.floor(horas / 24);
        let resto = horas % 24;

        tarifa = dias * 60;
        tarifa += resto * 2.5; 
    }

    if(tipo){
        tarifa *= 1.25;
    }

    if(frequencia){
        tarifa *= 0.95;
    }

    document.getElementById("saida").innerHTML =
        "O valor é igual R$ " + tarifa.toFixed(2);
}








