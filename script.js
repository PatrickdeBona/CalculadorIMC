function dados() {
    //Local selecionado:
    const form = document.querySelector('.form');

    //Monitorando e usando o evento:
    function eventForm (e) {
        //Prevenção para não recarregar a página
        e.preventDefault();

        //Pegando as informaçoes que serão usadas
        const iPeso = e.target.querySelector('#peso');
        const iAltura = e.target.querySelector('#altura');

        //Transformando as informações em Number
        const peso = Number(iPeso.value);
        const altura = Number(iAltura.value);

        //Prevenção de erro!
        if(!peso){
            setResultado('Peso Inválido', false);
            return;
        }
        if (!altura){
            setResultado('Altura Inválida', false);
            return;
        }
        //Calculando o IMC e seu Nivel
        const imc = Imc(peso, altura);
        const nivelImc = NivelImc(imc);

        //Formando a mensagem que será entrege ao usuario
        const msg = `Seu IMC é ${imc} (${nivelImc}).`;

        //Mandando Os resultados para a função
        setResultado(msg, true);
    };

    form.addEventListener('submit', eventForm);


    //Obtendo os niveis de IMC
    function NivelImc (imc) {
        const nivel = ['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3' ];

        if (imc >= 39.9) {
            return nivel[5];
        }else if(imc >= 34.9){
            return nivel[4];
        }else if(imc >= 29.9){
            return nivel[3];
        }else if(imc >= 24.9){
            return nivel[2];
        }else if(imc >= 18.5){
            return nivel[1];
        }else if(imc < 18.5){
            return nivel[0];
        }
    }
    //Calculando o IMC
    function Imc (peso, altura) {
        const imc = peso /altura ** 2;
        return imc.toFixed(2);
    }
    //Crinado um paragrafo para exibir a resposta
    function criaP () {
        const p = document.createElement('p');
        return p;
    }

    //Criando e mandando o Resultado:
    function setResultado (msg, isValid){
        //Selecionando o lugar onde será exibido o resultado
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';

        //Criando um paragrafo
        const p = criaP();

        //Colocando a cor do paragrafo
        if (isValid) {
         p.classList.add('paragrafo-resultado');
        }else {
            p.classList.add('bad');
        }
        //Adicionando a mensagem ao Paragrafo e mandando para o HTML
        p.innerHTML = msg;
        resultado.appendChild(p);
    }
}
//Chamando a função principal
dados();
