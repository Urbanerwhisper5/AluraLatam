document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.button1').addEventListener('click', encriptar);
    document.querySelector('.button2').addEventListener('click', desencriptar);
});

function encriptar() {
    let textPrompt = document.getElementById('texto-prompt');
    let textToEncrypt = textPrompt.value;

    let image2 = document.getElementById('imagen2');
    let message1 = document.getElementById('mensaje1');
    let message2 = document.getElementById('mensaje2');
    let message3 = document.getElementById('mensaje3');
    let button3 = document.getElementById('button3');

    if (image2) image2.style.display = 'none';
    if (message1) message1.style.display = 'none';
    if (message2) message2.style.display = 'none';
    if (message3) message3.style.display ='block';
          
    if (button3) {
        button3.style.display = 'block'; // Asegúrate de que 'block' o el valor adecuado
        console.log('Botón 3 mostrado');
    }

    let encryptedText = textToEncrypt
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    if (message3) {
        message3.textContent = encryptedText;
        message3.style.display = 'block'; 
    }

}

function desencriptar() {
    let textPrompt = document.getElementById('texto-prompt');
    let textToEncrypt = textPrompt.value;

    let image2 = document.getElementById('imagen2');
    let message1 = document.getElementById('mensaje1');
    let message2 = document.getElementById('mensaje2');
    let message3 = document.getElementById('mensaje3');
   
    if (image2) image2.style.display = 'none';
    if (message1) message1.style.display = 'none';
    if (message2) message2.style.display = 'none';
    if (message3) message3.style.display ='block';
       
        let encryptedText = textToEncrypt
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if (message3) {
        message3.textContent = encryptedText;
        message3.style.display = 'block'; 
    }
    
}

function copiar(){
    let copiarTexto = document.getElementById('mensaje3')
    copiarTexto.select();
    document.execCommand('copy')
}
