function calc_restaurante() {
        const valorConta = parseFloat(document.getElementById('valor').value);
        const numPessoas = parseInt(document.getElementById('pessoa').value);
        const porcentagemGorjeta = parseInt(document.getElementById('gorjeta').value);

        if (isNaN(valorConta) || valorConta <= 0 || isNaN(numPessoas) || numPessoas < 1) {
            alert("Por favor, insira valores válidos.");
            return;
        }

        const valorGorjeta = (valorConta * porcentagemGorjeta) / 100;
        const totalGeral = valorConta + valorGorjeta;
        const valorPorPessoa = totalGeral / numPessoas;

        const formatarMoeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        document.getElementById('resultado1').innerHTML = `<span>Valor consumo:</span> <strong>${formatarMoeda(valorConta)}</strong>`;
        document.getElementById('resultado2').innerHTML = `<span>Taxa/Gorjeta (${porcentagemGorjeta}%):</span> <span style="color: #dc3545; font-weight: 600;">${formatarMoeda(valorGorjeta)}</span>`;
        document.getElementById('resultado3').innerHTML = `<span>Total Geral:</span> <strong>${formatarMoeda(totalGeral)}</strong>`;
        document.getElementById('resultado4').innerHTML = `<span>Valor por Pessoa (${numPessoas}):</span> <span style="color: #28a745;">${formatarMoeda(valorPorPessoa)}</span>`;

        document.getElementById('resultBox').style.display = 'block';
    }

    function limpar_resultados() {
        document.getElementById('resultBox').style.display = 'none';
        document.getElementById('resultado1').innerText = "";
        document.getElementById('resultado2').innerText = "";
        document.getElementById('resultado3').innerText = "";
        document.getElementById('resultado4').innerText = "";
    }