function calcular(){

    let tarifa = 0;
    let checkinValue = document.getElementById("inputcheckin").value;
    let checkoutValor = document.getElementById("inputcheckout").value;
    let tipo = document.getElementById("inputtipo").checked;
    let frequencia = document.getElementById("inputfrequente").checked;

    if(!checkinValue || !checkoutValor){
        alert("Informe data e hora de entrada e saída.");
        return;
    }

    let checkin = new Date(checkinValue);
    let checkout = new Date(checkoutValor);

    if(checkout <= checkin){
        alert("A data e hora de saída devem ser posteriores à entrada.");
        return;
    }

    let diffMs = checkout - checkin;
    let horas = Math.ceil(diffMs / (1000 * 60 * 60));

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
        "Tempo: " + horas + " hora(s) | Valor: R$ " + tarifa.toFixed(2);
}








