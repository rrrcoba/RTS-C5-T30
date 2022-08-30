let n = prompt("Introduce un número entero para calcular su factorial: ")
let result = 1;
for (let i = 1; i <= n; i++) {
    result = result * i;
}

alert("El factorial de " + n + " es " + result);