function checkDni() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


    let n = prompt("Introduce tu número de DNI sin letra: ");
    let len = n.length;
    if (len != 8 || n < 0 || n > 99999999) {
        alert("El dni introducido no es válido.");
    }

    let letter = prompt("Introduce la letra de tu DNI en mayúsculas: ");
    letter.toUpperCase();
    let rest = n % 23;
    let calculatedLetter = letras[rest];
    if (calculatedLetter != letter) {
        alert("La letra que has introducido no es correcta.");
    } else {
        alert("DNI Validado correctamente.");
    }
}