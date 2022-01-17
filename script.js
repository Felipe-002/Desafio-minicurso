const botao = document.querySelector('button');

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    for (personagem = 1; personagem <= 3; personagem = personagem + 1) {
        const imagem = document.querySelector(`#imagem${personagem}`);
        const nomeDoPersonagem =document.querySelector(`#nome${personagem}`);
        const especie = document.querySelector(`#especie${personagem}`);
        const condicao = document.querySelector(`#status${personagem}`);
    let numeroAleatorio = gerarValorAletorio();
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    });
}
}
