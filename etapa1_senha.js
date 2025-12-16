function verificarSenha() {
    const senhaDigitada = document.getElementById("senha").value;
    const senhaCorreta = "NotSafe";

    if (senhaDigitada === senhaCorreta) {
        document.getElementById("conteudo").style.display = "block";
    } else {
        alert("Senha incorreta!");
    }
}