function habilitarOperacao(){
    var operacao = document.getElementById('operacao').value, base = document.getElementById('base').value,
    numero1 = document.getElementById('numero1').value, numero2 = document.getElementById('numero2').value;

    if(operacao && base && numero1 && numero2 ) document.getElementById("btn_operar").disabled = false;
    else document.getElementById("btn_operar").disabled = true;
}

function operar(){
    var operacao = document.getElementById('operacao').value, base = document.getElementById('base').value,
    numero1 = document.getElementById('numero1').value, numero2 = document.getElementById('numero2').value;

    if(base == 'bi') binario(operacao,numero1,numero2);
    else if(base == 'dec') dec(operacao,numero1,numero2);
    else if(base == 'hexa') hexa(operacao,numero1,numero2);

}

function binario(op, n1, n2) {
    const numero1 = parseInt(n1, 2);
    const numero2 = parseInt(n2, 2);
    var result = 0;
    switch (op) {
    case '+':
        result = numero1 + numero2;
        break;
    case '-':
        result = numero1 - numero2;
        break;
    case '*':
        result = numero1 * numero2;
        break;
    }
    document.getElementById('resultado').innerHTML = "Resultado: "+Number(result).toString(2);

}

function dec(op, n1, n2) {
    const numero1 = parseInt(n1, 10);
    const numero2 = parseInt(n2, 10);
    var result = 0;
    switch (op) {
    case '+':
        result = numero1 + numero2;
        break;
    case '-':
        result = numero1 - numero2;
        break;
    case '*':
        result = numero1 * numero2;
        break;
    }
    document.getElementById('resultado').innerHTML = "Resultado: "+result;    

}

function hexa(op, n1, n2) {
    const numero1_hexa = "0x" + n1;
    const numero2_hexa = "0x" + n2;
    var numero1, numero2;

    //convertendo para decimal
    numero1 = Number(numero1_hexa).toString(10); 
    numero2 = Number(numero2_hexa).toString(10);

    //convertendo para int
    numero1 = parseInt(n1,16);
    numero2 = parseInt(n2,16);

    console.log(numero1, numero2);
    var result = 0;
    switch (op) {
    case '+':
        result = numero1 + numero2;
        break;
    case '-':
        result = numero1 - numero2;
        break;
    case '*':
        result = numero1 * numero2;
        break;
    }
    console.log(result);
    
    document.getElementById('resultado').innerHTML = "Resultado: "+Number(result).toString(16);

}

function limparCampos(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('explicacao').innerHTML = "";
    document.getElementById('numero1').value = ""; 
    document.getElementById('numero2').value = ""; 
    document.getElementById('operacao').value = ""; 
    document.getElementById('base').value = ""; 
    document.getElementById("btn_operar").disabled = true;
}