function enviarWhatsApp() {
   
    let numero = document.getElementById('numero').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    if (!numero || !mensaje) {
        alert("Por favor, llena ambos campos: número y mensaje.");
        return;
    }

    numero = numero.replace(/\s+/g, ''); 

    if (numero.length !== 10 || isNaN(numero)) {
        alert("Por favor, ingresa un número de teléfono válido (10 dígitos).");
        return;
    }

    numero = "+52" + numero;

    let mensajeCodificado = encodeURIComponent(mensaje);

    let url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensajeCodificado}`;

    window.open(url, '_blank');
}
