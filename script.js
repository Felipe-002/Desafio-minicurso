const botao = document.querySelector('button');

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'N�o sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'N�o. Est� morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}
