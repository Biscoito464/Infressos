function comprar(){
    let lugar = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementsById('qtd').value

    if (lugar.value == 'Pista'){
        comprarPista(quantidade.value);
    }

}

function comprarPista(qtd){
    
}
