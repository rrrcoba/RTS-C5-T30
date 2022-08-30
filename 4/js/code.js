var valores = [true, 5, false, "hola", "adios", 2];

console.log("Primera parte: Operaciones con cadenas de carácteres:")
if (valores[3].localeCompare(valores[4])==0) {
    console.log("\"hola\" es igual que \"adios\"");
} else if (valores[3].localeCompare(valores[4])==1) {
    console.log("\"hola\" es mayor que \"adios\"");
} else {
    console.log("\"hola\" es menor que \"adios\"");
}

console.log("Segunda parte: Operaciones aritméticas:")
console.log(valores[0] || valores[2]);
console.log(valores[0] && valores[2]);

console.log("Tercera parte: Operaciones matemáticas:")
console.log(valores[1]+valores[5]);
console.log(valores[1]-valores[5]);
console.log(valores[1]*valores[5]);
console.log(valores[1]/valores[5]);
console.log(valores[1]%valores[5]);