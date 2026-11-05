document.getElementById('discountForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que a página recarregue

        // Captura dos valores do formulário
        const product = document.getElementById('productName').value;
        const originalValue = parseFloat(document.getElementById('productValue').value);
        const discountPercentage = parseInt(document.getElementById('discountPercentage').value);

        // Validação simples
        if (isNaN(originalValue) || originalValue < 0) {
            alert('Por favor, insira um valor válido para o produto.');
            return;
        }

        // Cálculos matemáticos
        const discountAmount = (originalValue * discountPercentage) / 100;
        const totalWithDiscount = originalValue - discountAmount;

        // Formatação de moeda (Padrão R$ Real Brasileiro)
        const formatCurrency = (val) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // Alimentação dos campos de resposta no HTML
        document.getElementById('resProduct').innerText = product;
        document.getElementById('resOriginalValue').innerText = formatCurrency(originalValue);
        document.getElementById('resDiscountApplied').innerText = `${formatCurrency(discountAmount)} (${discountPercentage}%)`;
        document.getElementById('resTotalValue').innerText = formatCurrency(totalWithDiscount);

        // Torna a caixa de resultado visível
        document.getElementById('resultBox').style.display = 'block';
    });