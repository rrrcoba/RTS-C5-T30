function palindrom() {
    // Obtenemos el texto a comprobar por pantalla
    let text = prompt("Introduce un texto a revertir y comprobar si es palíndrono:")

    // Lo cambiamos a minúsculas
    text = text.toLowerCase();

    // Eliminamos carácteres innecesarios como los espacios y las comas
    let re = /[\W_]/g;
    let cleanText = text.toLowerCase().replace(re, "");

    // Lo separamos, lo revertimos y lo volvemos a juntar
    let revertedText = cleanText.split("").reverse().join("");

    // Comprobamos si el texto revertido es igual o no al texto limpio y en minúsculas
    if (cleanText == revertedText) {
        alert("El texto es palíndrono.");
    } else {
        alert("El texto no es palíndrono.");
    }
}