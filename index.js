// Primero escribimos una function con la sintaxis tradicional
function concatenar(text, text2) {
    console.log(`${text} ${text2}`);
};

//Escribimos la misma function con arrow function
const concatenar2 = (text, text2) => console.log(`${text} ${text2}`);

// Ahora creamos una funcion usando un objeto a traves de destructuracion

// Definimos el objeto con las características del animal
const animal = {
    nombre: "Tigre",
    especie: "Panthera tigris",
    edad: 5,
    habitat: "Selva",
    peso: "200 kg"
};

// Función que toma un objeto como parámetro y usa destructuring y template literals
function describirAnimal({ nombre, especie, edad, habitat, peso }) {
    return `El ${nombre} es un animal de la especie ${especie}. Tiene ${edad} años, vive en la ${habitat} y pesa alrededor de ${peso}.`;
}

// Llamada a la función y mostramos el resultado
console.log(describirAnimal(animal));

// Ahora creamos un copia del objeto animal, actualizando dos porpiedades y agregando dos mas

const animal2 = {
    ...animal,
    edad: 6,
    peso: "210 kg",
    raza: "Bengala",
    color: "Rojizo"
};
console.log('---- Objeto animal actualizado: ----');
console.log(animal2);



// Obtenemos los valores del objeto en un array
const valoresAnimal2 = Object.values(animal2);

// Recorremos el array e imprimimos cada valor
for (const valor of valoresAnimal2) {
    console.log(valor);
};