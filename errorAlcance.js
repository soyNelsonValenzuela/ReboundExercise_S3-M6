// Creamos tres variables, cada una con una palabra reservada distinta y luego forzamos errores 

// Ejemplo 1: Error con 'var' en el ámbito de función
function testVar() {
    var mensaje = "Hola desde dentro de testVar";
}
console.log(mensaje); // Error: mensaje is not defined (fuera de la función)

// Ejemplo 2: Error con 'let' en el ámbito de bloque
if (true) {
    let numero = 10;
}
console.log(numero); // Error: numero is not defined (let solo es accesible dentro del bloque if)

// Ejemplo 3: Error con 'const' en el ámbito de bloque
for (const i = 0; i < 5; i++) {
    console.log(i); // Error: Assignment to constant variable (intento de reasignar valor en cada iteración)
}