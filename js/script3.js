function habilitarOperacao(){
    var numero1 = document.getElementById('numero1').value, numero2 = document.getElementById('numero2').value;

    if(numero1 && numero2 ) document.getElementById("btn_operar").disabled = false;
    else document.getElementById("btn_operar").disabled = true;
}

function operar() {
    var numero1 = document.getElementById('numero1').value, numero2 = document.getElementById('numero2').value;

    var result = 0, resto, text="";
    var dividendo = numero1, divisor = numero2;

    while(resto != 0){
        resto = dividendo % divisor;
        quociente = Math.floor(dividendo/divisor);
        text = text + dividendo +" = "+divisor+" * "+quociente+" + "+resto+" <br> ";

        if(resto!=0){
            dividendo = divisor;
            divisor = resto;
        }

    }

    text = text + "Quando resto foi nulo, o divisor era: "+divisor+" <br> ";

    //estendido
    var a = numero1, b = numero2;
    if (a < b) [a,b] = [b, a];
    let s = 0, old_s = 1;
    let t = 1, old_t = 0;
    let r = b, old_r = a;
    while (r != 0) {
        let q = Math.floor(old_r/r);
        [r, old_r] = [old_r - q*r, r];
        [s, old_s] = [old_s - q*s, s];
        [t, old_t] = [old_t - q*t, t];
    }


    
    document.getElementById('resultado').innerHTML = "MDC("+numero1+","+numero2+") = "+divisor;

    if(numero1 > numero2){
        text = text +" <br> " + " s: " + old_s + "<br> t: " + old_t;
    }else{
        text = text +" <br> " + " s: " + old_t + "<br> t: " + old_s;
    }

    document.getElementById('explicacao').innerHTML = text; 
}

function limparCampos(){
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('explicacao').innerHTML = "";
    document.getElementById('numero1').value = ""; 
    document.getElementById('numero2').value = ""; 
    document.getElementById("btn_operar").disabled = true;
}