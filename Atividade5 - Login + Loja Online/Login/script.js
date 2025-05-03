let tentativas = 0;
        const senhaCorreta = "12345";

        function verificarLogin() {
            let usuario = document.getElementById("usu").value;
            let senha = document.getElementById("sen").value;

            if (usuario === "" || senha === "") {
                alert("Os campos não podem estar vazios.");
                return;
            }

            if (senha === senhaCorreta) {
                alert(`Bem-vindo, ${usuario}!`);
                tentativas = 0; // Reinicia as tentativas
            } else {
                tentativas++;
                if (tentativas >= 3) {
                    alert("Número máximo de tentativas atingido. Usuário bloqueado.");
                    document.getElementById("sen").disabled = true;
                    document.querySelector("input[type=button]").disabled = true;
                } else {
                    alert("Senha incorreta. Tente novamente.");
                }
            }
        }

        function mostrarSenha() {
            let senhaInput = document.getElementById("sen");
            senhaInput.type = senhaInput.type === "password" ? "text" : "password";
        }