
function comprar() {
    let acento = document.getElementById('tipo-ingresso').value; 
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    if(acento =='pista' ){
        comprarPista(quantidade);
    }else if (acento == 'superior'){
        comprarSuperior(quantidade)
    }else{
        comprarInferior(quantidade)
    }
}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > qtdPista){
        alert('Quantidade indisponivel para o tipo pista')
    }else{
        qtdPista = qtdPista -  quantidade
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso')
    }
}

function comprarSuperior(quantidade){
    let qtdsSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > qtdsSuperior){
        alert('Quantidade indisponivel para o tipo superior')
    }else{
        qtdsSuperior = qtdsSuperior -  quantidade
        document.getElementById('qtd-superior').textContent = qtdsSuperior
        alert('Compra realizada com sucesso')
    }
}
function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > qtdInferior){
        alert('Quantidade indisponivel para o tipo inferior')
    }else{
        qtdInferior = qtdInferior -  quantidade
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Compra realizada com sucesso')
    }
}


