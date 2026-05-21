// EJERCICIO 01

async function obtenerPersonaje(id) {
  
const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
const personaje = await respuesta.json();

    console.log("Nombre:", personaje.name);
    console.log("Especie:", personaje.species);
    console.log("Estado:", personaje.status);
    console.log("------------------------");
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(5);
