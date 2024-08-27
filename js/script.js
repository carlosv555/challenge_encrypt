// script.js

document.getElementById('btn-encrypt').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const result = encrypt(textInput);
    document.getElementById('result').value = result;
});

document.getElementById('btn-decrypt').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const result = decrypt(textInput);
    document.getElementById('result').value = result;
});

document.getElementById('btn-copy').addEventListener('click', function() {
    const resultField = document.getElementById('result');
    resultField.select();
    document.execCommand('copy');
    alert('¡Texto copiado al portapapeles, que nadie se entere del secreto!');
});

function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
