// Protótipo inicial de interação. Ainda não está conectado a uma tela de missões.
function comecarMissao() {
    const mission = document.getElementById("mission");
    if (mission) mission.style.display = "block";
}

function iniciarFoco() {
    const atividadeInput = document.getElementById("atividade");
    if (!atividadeInput) {
        alert("A tela de foco ainda está em desenvolvimento. 💜");
        return;
    }

    const atividade = atividadeInput.value.trim();
    if (!atividade) {
        alert("Digite uma atividade para começar sua missão 💜");
        return;
    }

    alert("Missão iniciada! ✨\\n\\n" + atividade);
}
