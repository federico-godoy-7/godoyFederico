// Ejercicio 4: Manejo de errores

async function buscarSimpson(id) {
  try {
    // 1. Hacer el fetch
    const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}`)
    }

    const personaje = await response.json()
    console.log(personaje.name)

  } catch (error) {
    console.log('No se pudo encontrar el personaje')
  }
}

buscarSimpson(1);     // 
buscarSimpson(99999); // 