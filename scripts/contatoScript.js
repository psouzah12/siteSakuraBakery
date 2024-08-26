document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add('fade-in');
});
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const motivo = document.getElementById("motivo").value;
    const mensagem = document.getElementById("mensagem").value;
    const preferencia = document.querySelector('input[name="contato"]:checked').value;
    document.getElementById("saida").innerHTML = `
        <h2>Dados Inseridos:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Motivo:</strong> ${motivo}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
        <p><strong>Preferência de Contato:</strong> ${preferencia}</p>
    `;
    saida.style.display = "block";
});
