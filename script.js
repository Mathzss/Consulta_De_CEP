function buscarCEP() {
    const cep = document.getElementById('cep').value.trim();
    const resultado = document.getElementById('resultado');
  
    if (!/^\d{8}$/.test(cep)) {
      resultado.innerHTML = '<p style="color:red;">CEP inválido. Digite no maximo 8 números.</p>';
      return;
    }
  
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          resultado.innerHTML = '<p style="color:red;">CEP não encontrado.</p>';
        } else {
          resultado.innerHTML = `
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.localidade}</p>
            <p><strong>UF:</strong> ${data.uf}</p>
          `;
        }
      })
      .catch(() => {
        resultado.innerHTML = '<p style="color:red;">Erro ao buscar o CEP. Tente novamente.</p>';
      });
  }
  