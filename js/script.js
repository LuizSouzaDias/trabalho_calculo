function habilitarBtn(){

    var funcao = document.querySelector('#funcao').value;
    var limite_inferior = document.querySelector('#limite_inferior').value;
    var limite_superior = document.querySelector('#limite_superior').value;
    var h = document.querySelector('#h').value;

    if(funcao && limite_inferior && limite_superior && h) document.getElementById("btn_calcular").disabled = false;
    else document.getElementById("btn_calcular").disabled = true;
}


//calcular 
function calcular(){
    
    var limite_inferior = document.querySelector('#limite_inferior').value;
    var limite_superior = document.querySelector('#limite_superior').value;
    var h = document.querySelector('#h').value;
    var resultado = document.querySelector('#resultado').value;
    var explicacao = document.querySelector('#explicacao').value;
    var metodo = "";

    var subdivisoes = (( limite_superior - limite_inferior) / h).toFixed(2);

    var multiplo = (subdivisoes/3);

    if (parseInt(subdivisoes) % 2 == 0){       //verificar se subdivisao e par
        var num = PrimeiraRegraSimpsom(parseFloat(subdivisoes));
        metodo = "Primeira Regra Simpsom";
    }else if(Number.isInteger(multiplo)){     //verificar se subdivisao é multiplo de 3
        var num = SegundaRegraSimpsom(parseFloat(subdivisoes));
        metodo = "Segunda Regra Simpsom";
    }else{
        var num = RegraTrapezio((subdivisoes));
        metodo = "Regra Trapezio";
    }

    if(num){
        document.querySelector('#resultado').innerHTML = num;
        document.querySelector('#explicacao').innerHTML = metodo;
    }

}

function PrimeiraRegraSimpsom(subdivisoes){
    console.log("Primeira Regra Simpsom");

    var funcao = document.querySelector('#funcao').value;
    var limite_inferior = document.querySelector('#limite_inferior').value;
    var limite_superior = document.querySelector('#limite_superior').value;
    var h = document.querySelector('#h').value;

    var sum = f(funcao,parseFloat(limite_inferior)) + f(funcao,parseFloat(limite_superior));

    for (var i = 1; i < subdivisoes; i++) {
        var x = parseFloat(limite_inferior) + i * h;
        if (i % 2 === 0) {
            sum += 2 * f(funcao,x);
        } else {
            sum += 4 * f(funcao,x);
        }
    }

    sum *= h / 3;
    return parseFloat(sum.toFixed(4));
}

function SegundaRegraSimpsom(subdivisoes){
    console.log("Segunda Regra Simpsom");

    var funcao = document.querySelector('#funcao').value;
    var limite_inferior = document.querySelector('#limite_inferior').value;
    var limite_superior = document.querySelector('#limite_superior').value;
    var h = document.querySelector('#h').value;

    var sum = f(funcao,parseFloat(limite_inferior)) + f(funcao,parseFloat(limite_superior));

    alert(sum);

    alert(subdivisoes);

    for (var i = 1; i < subdivisoes; i++){
        var x = parseFloat(limite_inferior) + i * h;
        sum += 3 * f(funcao,x);
    }

    alert(sum);
    
    sum = ((3 * h ) / 8) * sum;

    alert(sum);
    return parseFloat(sum.toFixed(4));
}

function RegraTrapezio(subdivisoes){
    console.log("Regra Trapezio");
    
    var funcao = document.querySelector('#funcao').value;
    var limite_inferior = document.querySelector('#limite_inferior').value;
    var limite_superior = document.querySelector('#limite_superior').value;
    var h = document.querySelector('#h').value;

    var sum = 0.5 * (f(funcao,parseFloat(limite_inferior)) + f(funcao,parseFloat(limite_superior)));
    for (var i = 1; i < subdivisoes; i++) {
        var x = parseFloat(limite_inferior) + i * h;
        sum += f(funcao, x);
    }
    sum *= h;
    console.log(sum);
    return parseFloat(sum.toFixed(4));
}

// Função para integrar
function f(funcao,x) {

    let formulaComX = funcao.toString().replace(/x/g, x);
    console.log(formulaComX);
    try {
        // Avaliar a fórmula usando eval()
        let resultado = eval(formulaComX);
        return resultado;
    } catch (error) {
        // Se ocorrer um erro na avaliação da fórmula, retornar NaN
        console.error("Erro ao avaliar a fórmula:", error);
        return NaN;
    }
}

function limparCampos(){
    document.getElementById('limite_superior').value = "";
    document.getElementById('limite_inferior').value = ""; 
    document.getElementById('h').value = ""; 
    document.getElementById('btn_calcular').disabled = true;
}
