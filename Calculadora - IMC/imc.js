const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let clssificacao = "";

        // A classificação do IMC
        if(valorIMC < 18.5){
            clssificacao = 'Abaixo do peso.';
        }else if(valorIMC < 25){
            clssificacao = 'Com peso ideal. Parabéns!!!';
        }else if(valorIMC < 30){
            clssificacao = 'levemente acima do peso.';
        }else if(valorIMC < 35){
            clssificacao = 'Com obesidade grau I.'
        }else if(valorIMC < 40){
            clssificacao = 'Com obseidade grau II.'
        }else{
            clssificacao = 'Com obesidade grau III. Cuidado!!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${clssificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}

calcular.addEventListener('click', imc);