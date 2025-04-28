function enviarWhatsApp() {
    // Tu número ya fijo con el código de país 52 (México)
    let numero = "527296803218"; 

    let mensaje = document.getElementById('mensaje').value.trim();

    if (!mensaje) {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }

    let mensajeCodificado = encodeURIComponent(mensaje);

    let url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(url, '_blank');
}
