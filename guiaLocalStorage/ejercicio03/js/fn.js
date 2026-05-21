// EJERCICIO 03

async function personajeYOrigen(id) {

    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then (response => response.json())
    .then (data => {

        const url = data.origin.url
        const personaje = data.name

       fetch(`${data.origin.url}`)
       .then (response => response.json())
       .then (data => {
        
        console.log(`${personaje} es originario de ${data.name}, que es de tipo ${data.type} con dimension ${data.dimension}`)

       }) 
    }) 
}

personajeYOrigen(1);