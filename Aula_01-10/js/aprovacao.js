function verificarAprovacao() {
    let nome = document.getElementById("nome").value;

    let media = Number(document.getElementById("media").value);

   if (media >= 7.0) {
    resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }

    document.getElementById("nomeEstudante").textContent = nome;
    document.getElementById("resultado").textContent = resultado;
}