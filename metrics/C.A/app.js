function calcular() {
    if (nome.value == "") {
        window.alert("Digite seu nome!");
    } else if (peso.value == "") {
        window.alert("Digite o seu peso!");
    } else if (nome.value == "" && peso.value == "") {
        window.alert("Complete todos os campos!");
    } else {
        const agua = 35;
        let div = document.getElementById("res");
        let nome = document.getElementById("nome").value;
        let peso = document.getElementById("peso").value;
        let soma = (peso * agua).toLocaleString(2);
        div.innerHTML = `${nome} voce precisa de ${soma} litros de agua por dia!`;
    }
}

function apagar() {
    let div = document.querySelector("#res");
    let nome = (document.querySelector("#nome").value = "");
    let peso = (document.querySelector("#peso").value = "");
    div.innerHTML = "";
}