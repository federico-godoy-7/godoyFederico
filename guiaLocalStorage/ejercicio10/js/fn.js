// Ejercicio 10: Historial de búsquedas

const APIS = {
  rick: "https://rickandmortyapi.com/api/character/",
  simpsons: "https://thesimpsonsapi.com/api/characters/"
};

async function buscarYRegistrar(api, id) {
  try {
    // 1. Armar la URL según la API elegida
    const url = APIS[api] + id;

    // 2. Fetch con await

    // 3. Validar respuesta

    // 4. Recuperar historial actual de localStorage
    //    (si no existe, usar un array vacío [])

    // 5. Crear el registro de búsqueda:
    //    { nombre: data.name, api: api, fecha: new Date().toLocaleString() }

    // 6. Agregar al array con push()

    // 7. Si el array tiene más de 5 elementos, eliminar el primero
    //    (investigar: array.shift())

    // 8. Guardar el historial actualizado en localStorage

    console.log(`✅ Encontrado: ${data.name}`);

  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

function verHistorial() {
  // Recuperar historial de localStorage
  // Si no hay, mostrar "No hay búsquedas registradas"
  // Si hay, recorrer el array y mostrar cada registro
}

// Probá así:
// buscarYRegistrar("rick", 1);     // Rick Sanchez
// buscarYRegistrar("simpsons", 3); // Bart Simpson
// buscarYRegistrar("rick", 2);     // Morty Smith
// verHistorial();