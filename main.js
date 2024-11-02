function login() {
    const username = document.getElementById('username').value.toLowerCase(); // converte para letra minúscula
    const password = document.getElementById('password').value;

    // Define o nome de usuário correto em minúsculas
    const correctUsername = "mimosa"; // Ajustado para "correctUsername"
    const correctPassword = "123"; // Ajustado para "correctPassword"

    if (username === correctUsername && password === correctPassword) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('sorteio-section').style.display = 'block';
    } else {
        document.getElementById('login-message').textContent = 'Usuário ou senha incorretos';
    }
}

function focusOnPassword(event) {
    if (event.key === "Enter") { // Verifica se a tecla pressionada foi Enter
        event.preventDefault(); // Impede o comportamento padrão do Enter
        document.getElementById("password").focus(); // Move o foco para o campo de senha
    }
}

//Essa função verifica se a tecla Enter foi pressionada e, se sim, move o foco para o próximo campo especificado
function goToNextField(event, nextFieldId) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede o comportamento padrão do Enter
        document.getElementById(nextFieldId).focus(); // Move o foco para o próximo campo
    }
}


function sortear() {
    // Lista de participantes com @username, nome e foto
    const participantes = [
        { username: "@leiasantos33", nome: "Leia Santos", foto: "images/leiasantos.jpg" },
        { username: "@joosyf", nome: "Josy Ferreira", foto: "images/josy.jpg" },
        { username: "@simariaccruz", nome: "Simaria Cruz", foto: "images/simaria.jpg" },
    ];

    const randomIndex = Math.floor(Math.random() * participantes.length);
    const vencedor = participantes[randomIndex];

    // Exibir a contagem regressiva
    document.getElementById('contagem-regressiva').style.display = 'block';
    let contador = 20; // Ajustado para 20 segundos
    document.getElementById('contador').textContent = contador;

    // Iniciar a contagem regressiva
    const interval = setInterval(() => {
        contador--;
        document.getElementById('contador').textContent = contador;

        if (contador <= 0) {
            clearInterval(interval);
            document.getElementById('contagem-regressiva').style.display = 'none';

            // Exibir resultado do sorteio
            document.getElementById('vencedor-username').textContent = vencedor.username;
            document.getElementById('vencedor-nome').textContent = vencedor.nome;
            document.getElementById('vencedor-foto').src = vencedor.foto;
            document.getElementById('resultado').style.display = 'block';
        }
    }, 1000); // Atualiza a cada segundo
}

// Função para mostrar a tela de agradecimento
function mostrarAgradecimento() {
    document.getElementById('sorteio-section').style.display = 'none';
    document.getElementById('agradecimento-section').style.display = 'block';

    // Exibe o nome do vencedor na tela de agradecimento
    document.getElementById('nome-vencedor').textContent = document.getElementById('vencedor-nome').textContent;
}
