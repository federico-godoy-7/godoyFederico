// Ejercicio 7: Mi primer localStorage

localStorage.setItem("nombre", "Federico");
localStorage.setItem("edad", "19");

const nombre = localStorage.getItem("nombre");
const edad = localStorage.getItem("edad");
console.log(nombre, edad);

console.log(typeof edad);

localStorage.removeItem("edad")

const verificar = localStorage.getItem("edad")
console.log(verificar)

localStorage.clear()