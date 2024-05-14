function habilitarOperacao(){
    var numero = document.getElementById('numero').value;

    if(numero) document.getElementById("btn_operar").disabled = false;
    else document.getElementById("btn_operar").disabled = true;
}

function operar(){
    var numero = document.getElementById('numero').value, x = 2, text = '';
    let array_numero = [], numeros = [],n_escolhido;

    console.log(numero);

    for(var i = 0; i < numero-1; i++){ //de 2 ate o numero
        array_numero[i] = x;
        x++;
    }

    console.log(array_numero);

    for(var i = 0; i < array_numero.length; i++){ //cria um loop para selecionar o primeiro numero daarray e comparar com os demais, e assim por diante

        for(var j = i + 1; j < array_numero.length; j++){
            console.log(array_numero[i], array_numero[j]);
            if(array_numero[j] % array_numero[i] == 0) array_numero[j] = array_numero[j] + "x"; //se for divisivel, adicionar um 'x' no final, para eliminar o elemento como numero
        }

    }

    console.log(array_numero);

    for(var i = 0; i < array_numero.length; i++){ //conferir quais numeros nao contem o x
        var numero_ = array_numero[i];
        if(isNumber(numero_)) text = text + numero_ + ' ';
    }

    document.getElementById('resultado').innerHTML = text;
    
}

function limparCampos(){
    document.getElementById('numero').value = "";  
    document.getElementById("btn_operar").disabled = true;
}

function isNumber(val){
    return typeof val === "number"
}