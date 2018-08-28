$.getJSON("database.json");
    var integrantes  = data.integrantes;
    var saida;
    for (i = 0; i < integrantes.length; i++) {
        saida = integrantes[i].foto + integrantes[i].nome + integrantes[i].matricula + integrantes[i].CPF;
        
        
    }

    document.getElementById('tela').innerHTML = saida;