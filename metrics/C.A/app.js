function calcular() {
    if (nome.value == "") {
        window.alert("Digite seu nome!");
    } else if (peso.value == "") {
        window.alert("Digite o seu peso!");
    } else if (nome.value == "" && peso.value == "") {
        window.alert("Complete todos os campos!");
    } else {
        let resultado = document.getElementById("res");
        let nome = document.getElementById("nome").value;
        let n1 = (document.getElementById('peso')).value;
        let n2 = (Number(35));
        let soma = (n1 * n2);
        soma = soma.toLocaleString(2, 'pt-BR').toString() + " MiliLitros ";
        resultado.innerHTML = `${nome} voce precisa de ${soma}  de agua por dia!`;
        resultado.style.fontFamily = "Arial";
    }
}

function apagar() {
    let resultado = document.querySelector("#res");
    nome = (document.querySelector("#nome").value = "");
    peso = (document.querySelector("#peso").value = "");
    resultado.innerHTML = "";
}