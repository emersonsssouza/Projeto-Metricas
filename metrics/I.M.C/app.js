function Calcular() {
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("res");
    let risco = document.getElementById("risco");

    let soma = (peso / (altura * altura)).toFixed(1);

    if (nome == "" && peso == "" && altura == "") {
        console.log("Insira os dados");
        resultado.innerHTML = "Complete os campos acima por favor!";
    } else if (soma < 18.5) {
        resultado.innerHTML = `${nome} seu IMC é ${soma} e voce esta abaixo do peso`;
        risco.innerHTML = "<strong>Abaixo do Peso 1</strong> - Anorexia, bulimia, osteoporose e alto consumo de massa muscular"
    } else if (soma >= 18.5 && soma < 24.9) {
        resultado.innerHTML = `${nome} seu IMC é ${soma} e voce está com peso ideal. Parabens!!!`;
        risco.innerHTML = "<strong>Peso Normal</strong> - em bom estado geral,boa vitalidade e boa aparencia fisica"
    } else if (soma >= 25 && soma < 29.9) {
        resultado.innerHTML = `${nome} seu IMC é ${soma} e voce está com Sobrepeso`;
        risco.innerHTML = "<strong>Sobrepeso</strong> - Fadiga, problemas digestivos, problemas circulatorios, má circulação e varizes"
    } else if (soma >= 30 && soma < 34.9) {
        resultado.innerHTML = `${nome} seu IMC é ${soma} e voce está com Obesidade grau 1`;
        risco.innerHTML = "<strong>Obesidade grau 1</strong> - Fadiga, problemas digestivos, problemas circulatorios, má circulação e varizes";
    } else if (soma >= 35 && soma < 39.9) {
        resultado.innerHTML = `${nome} seu IMC é ${soma} e voce está com Obesidade grau 2 (severa)`;
        risco.innerHTML = "<strong>Obesidade grau 2</strong> - Diabetes, angina de peito, enfarto, trombo flebites, arterosclerose, embolias, alterações mentruais";

    } else {
        resultado.innerHTML = `${nome} seu IMC é ${soma} e voce está com Obesidade grau 3 (Morbida)`;
        risco.innerHTML = "<strong>Obesidade grau 3</strong> - Falta de ar, apneia, sonolencia, trombose pulmonar, úlceras varicosas, cancro do colon, refluxo esofágico, discriminação social, laboral e sexual";
        risco.style.color = "red";
    }
    console.log(soma);
}

function limpar() {
    document.querySelector("#nome").value = "";
    document.querySelector("#altura").value = "";
    document.querySelector("#peso").value = "";
}