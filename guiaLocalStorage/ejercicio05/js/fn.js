// Ejercicio 5: Búsqueda segura con validaciones

async function busquedaSegura(id) {
  try {

      await fetch (`https://rickandmortyapi.com/api/character/${id}`)

      .then (response => response.json())
      .then (data => {

      if (data.status === "Alive ") {
          console.log("Este personaje esta vivo")
        }
        else {
          console.log("⚠️ Este personaje está muerto")
        }

      if (data.location.name === "unknown") {
          console.log("Ubicacion desconocida")
        }
        else {
          console.log(`Ubicacion: ${data.location.name}`)
        }
      
      console.log(`${data.name}
        ${data.status}
        ${data.species}
        ${data.type}
        ${data.gender}`)
    })
  
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

busquedaSegura(1);
busquedaSegura(8);