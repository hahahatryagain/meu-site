function verificarResposta() {
    const resposta = document
        .getElementById("resposta")
        .value
        .trim()
        .toLowerCase();

    const respostaCorreta = "confiar no que parece belo pode ser o primeiro passo para se perder no que é obscuro.";

    if (resposta === respostaCorreta) {
        document.getElementById("conteudo").style.display = "block";
    } else {
        alert("Resposta incorreta.");
    }
}
