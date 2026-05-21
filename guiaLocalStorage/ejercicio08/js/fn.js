// Ejercicio 8: Guardar y recuperar objetos con JSON

const personaje = {
  nombre: "Homer Simpson",
  edad: 39,
  ocupacion: "Safety Inspector",
  frases: ["D'oh!", "Woo-hoo!"]
};

// 2. Guardar en localStorage (¿cómo convierto el objeto a string?)
localStorage.setItem("Homero", JSON.stringify(personaje))

// 3. Recuperar de localStorage (¿cómo convierto el string a objeto?)
const recuperar = JSON.parse(localStorage.getItem("Homero"))

// 4. Mostrar nombre y frases por consola
console.log(recuperar.nombre)
console.log(`${recuperar.frases}`)

// 5. Agregar una frase nueva: "Mmm... donuts"
personaje.frases.push("Mmm... donuts")

// 6. Volver a guardar el objeto actualizado
localStorage.setItem("HOMERO", JSON.stringify(personaje))

// 7. Verificar: recuperar de nuevo y mostrar las frases
const recuperacion = JSON.parse(localStorage.getItem("HOMERO"))
console.log(recuperacion.nombre)
console.log(`${recuperacion.frases}`)