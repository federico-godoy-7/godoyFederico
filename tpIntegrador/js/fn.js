// TRABAJO INTEGRADOR 

let boton = document.getElementById("boton")
let personaje = document.getElementById("cardPersonaje")
let estadisticas = document.getElementById("stats")
let favoritos = document.getElementById("favorites")

let select = document.getElementById("id_select")

boton.addEventListener('click', async () => {

let name = document.getElementById("id_input").value

    if (select.value === "rick") {
            try {

                let url = name

                if (name) {
                    url = `https://rickandmortyapi.com/api/character/?name=${name}`   
                } else {
                    url = `https://rickandmortyapi.com/api/character`;
                }
                    const response = await fetch(url)
                    if (!response.ok) throw new Error(`Error: ${response.status}`)
                        const data = await response.json()
                    
                    console.log(data)

                        const arrayPjRickAndMorty = data.results.map(p => ({
                                                    id: p.id,
                                                    nombre: p.name,
                                                    imagen: p.image,
                                                    estado: p.status,
                                                    genero: p.gender,
                                                    detalle: p.species,
                                                    origen: "rickandmorty"
                                                    }));

                        console.log(arrayPjRickAndMorty)

            } catch (error) {
                console.log("Error atrapado.", error)
            }
    }

        /* if (select.value === "simpson") {
            try {

                let url = name
                    
                if (name) {
                    url = `https://thesimpsonsapi.com/api/characters?name=${name}`
                } else {
                    url = `https://thesimpsonsapi.com/api/characters`
                }
                    
                    const response = await fetch(url)
                    if (!response.ok) throw new Error(`Error: ${response.status}`)
                    const data = await response.json()
            } catch (error) {
                console.log("Error atrapado.", error)
            }
            
        } */
})

