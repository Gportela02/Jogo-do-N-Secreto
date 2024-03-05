let listaNumeros = []
let possibilidade = 100;
let numeroSecreto = gerarNumeros ();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    }
    function exibirMensagemInicial(){
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'Escolha um número entre 1 e 100');

    }
    
    exibirMensagemInicial();

    function verificarChute(){
        let chute = document.querySelector('input').value; 
        if (chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Acertou!');
            let palabraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagem = `Você descobriu o número secreto com ${tentativas} ${palabraTentativa}!`;
            exibirTextoNaTela('p', mensagem);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if ( chute > numeroSecreto){
            exibirTextoNaTela('p', `O número Secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número Secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}


    function gerarNumeros() {
        let numeroEscolhido = parseInt(Math.random() * possibilidade + 1); 
        let quantidadeElementos = listaNumeros.length;

        if (quantidadeElementos == possibilidade){
            listaNumeros = []
        }

        if (listaNumeros.includes(numeroEscolhido)){
            return gerarNumeros();
        }else {
            listaNumeros.push(numeroEscolhido);
            return numeroEscolhido;
        }
        
    }
    function limparCampo(){
        chute = document.querySelector('input');
        chute.value = ' ';
    }

    function reiniciarJogo(){
        numeroSecreto = gerarNumeros();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled',true);
        
    }