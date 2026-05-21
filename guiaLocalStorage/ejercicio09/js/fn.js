// Ejercicio 9: Caché de personajes

async function obtenerConCache(id) {
  const clave = `personaje_${id}`;
  
  const guardado = localStorage.getItem(clave);

  if (guardado !== null) {
    
    console.log("📦 Recuperado del caché");
    
    const personajeCache = JSON.parse(guardado)

    return personajeCache;
  }

  
  try {
    console.log("🌐 Buscando en la API...");
    
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

    if (!response.ok) throw new Error("Personaje no encontrado");
    
    const personaje = await response.json()
    
    localStorage.setItem(clave, JSON.stringify(personaje))
    
    return personaje;

  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

obtenerConCache(1);