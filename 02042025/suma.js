document.getElementById('sumaform').addEventListener('submit',
    function(event){
        event.preventDefault;
        let nume1 = parseFloat(document.getElementById('n1').value);
        let nume2 = parseFloat(document.getElementById('n2').value);
        let resultado = nume1+nume2;

        console.log(resultado);
        document.getElementById('resultado').innerText='La suma es :' + resultado;
    }
);