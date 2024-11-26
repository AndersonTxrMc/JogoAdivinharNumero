let listaDeNumerosSorteados = [];
let limite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
 function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
 }
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(numeroSecreto == chute){
       exibirTextoNaTela('h1', 'Acertou');
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
       exibirTextoNaTela('p',mensagemTentativas); 
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero é menor');
        }else{
            exibirTextoNaTela('p', 'o numero é maior');
        }
        tentativas++;
        limparCampo();
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumero(){
    let numeroEscolhido =  parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if(quantidadeDeElementos == 10 ){
        listaDeNumerosSorteados = [];

    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;

    }

}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
