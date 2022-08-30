function mayuMinu() {
    // Pedimos la cadena de texto por pantalla
    let text = prompt("Introduce una cadena de texto que comprobar si tiene solo mayúsculas o solo minúsculas o una mezcla de ambas:")

    // Creamos variables booleanas para más tarde
    let minu = false; mayu = false;

    // Separamos el texto
    let textArray = text.split("");

    // Iteramos cada letra de la cadena de texto comprobando si es minúscula o mayúscula
    // Solamente con 1 letra de cada tipo ya cambia el booleano correspondiente
    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] == textArray[i].toUpperCase()) {
            mayu = true;
        }
        if (textArray[i] == textArray[i].toLowerCase()) {
            minu = true;
        }
    }

    // Si solamente es cierta la variable booleana de las minúsculas
    if (!mayu && minu) {
        alert("El texto solamente contiene minúsculas.");

    } else if (mayu && !minu) {
        alert("El texto solamente contiene mayúsculas.");
    } else {
        alert("El texto contiene mayúsculas y minúsculas");
    }
}