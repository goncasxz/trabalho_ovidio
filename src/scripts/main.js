

function cadastrar(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    let dataNascimento = document.getElementById("dataNascimento").value;

    if (senha != confirmarSenha) {
        alert("As senhas não conferem");
    } else {
        console.log(`INSERT INTO usuario (nome, email, senha, data_nascimento)`);
        console.log(`VALUES (${nome}, ${email}, ${senha}, ${dataNascimento})`);
        alert("Cadastro concluido");
        window.location.href = "index2.html";
    }
}
