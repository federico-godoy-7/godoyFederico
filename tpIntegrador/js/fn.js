// TRABAJO INTEGRADOR 

let boton = document.getElementById("boton")
let botonOrdenarAlfabeticamente = document.getElementById("ordenarAlfabeticamente")

let tarjeta = document.getElementById("cardPersonaje")
let estadisticas = document.getElementById("stats")
let favoritos = document.getElementById("favorites")

let select = document.getElementById("id_select")
let filtro = document.getElementById("filtrado")

let arrayEstadoRick = []
let arrayEstadoSimpson = []
let arrayFavoritos = []

let urlRick = null
let urlSimpson = null

    const favoritosGuardados = localStorage.getItem("favoritos")
    if (favoritosGuardados !== null) {
        arrayFavoritos = JSON.parse(favoritosGuardados)
        actualizarFav()
    }

        function agregarFavoritos(nombre) {

            const personaje = [...arrayEstadoRick, ...arrayEstadoSimpson].find(p => p.nombre === nombre)
        
            const yaExiste = arrayFavoritos.find(p => p.nombre === nombre)
            if (yaExiste) {
                alert(`${personaje.nombre} ya está en favoritos`)
                return
            }
        
            arrayFavoritos.push(personaje)
            localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos))
        
            actualizarFav()
        }
 
        function actualizarFav() {
            favoritos.innerHTML = ""
        
            if (arrayFavoritos.length === 0) {
                favoritos.innerHTML = "<p>No hay personajes en favoritos</p>"
            }
            
                arrayFavoritos.forEach(p => {
                    favoritos.innerHTML += `
                        <p><img src=${p.imagen}></p>
                        <p>Nombre: ${p.nombre}</p>
                        <p>Estado: ${p.estado}</p>
                        <p>Origen: ${p.origen}</p>
                        <button onclick="quitarFavorito('${p.nombre}')">Sacar de favoritos</button>
                        <p>--------------------------------</p>`
            })
        }
            function quitarFavorito(nombre) {
                arrayFavoritos = arrayFavoritos.filter(p => p.nombre !== nombre)
                localStorage.setItem("favoritos", JSON.stringify(arrayFavoritos))
                actualizarFav()
    }

boton.addEventListener('click', async () => {

let name = document.getElementById("id_input").value
    
    tarjeta.innerHTML = ""

    if (select.value === "rick") {
            try {

                if (name) {
                    urlRick = `https://rickandmortyapi.com/api/character/?name=${name}`   
                } else {
                    urlRick = `https://rickandmortyapi.com/api/character`;
                }
                    const response = await fetch(urlRick)
                        if (response.status === 404) {
                            tarjeta.innerHTML = "No se encontraron personajes"
                            return
                        }
                    if (!response.ok) throw new Error(`Error: ${response.status}`)
                        const data = await response.json()
                    
                                arrayEstadoRick = data.results.map(p => ({
                                                    id: p.id,
                                                    nombre: p.name,
                                                    imagen: p.image,
                                                    estado: p.status,
                                                    genero: p.gender,
                                                    detalle: p.species,
                                                    origen: "Rick And Morty"
                                                    }));

                                                                if (name) {
                                                                    arrayEstadoRick = arrayEstadoRick.filter(p =>
                                                                        p.nombre.toLowerCase().includes(name.toLowerCase())
                                                                    );
                                                                }


                        if (filtro.value==="alive") {
                            arrayEstadoRick = arrayEstadoRick.filter(p => p.estado === "Alive")
                        }
                            else if (filtro.value==="dead") {
                                arrayEstadoRick = arrayEstadoRick.filter(p => p.estado === "Dead")
                            }
                                else if (filtro.value==="unknown") {
                                    arrayEstadoRick = arrayEstadoRick.filter(p => p.estado === "unknown")   
                                }
                                
                                    arrayEstadoRick.forEach(p => {
                                        tarjeta.innerHTML += `<p><img src=${p.imagen}></p>
                                        <p>Nombre: ${p.nombre}</p>
                                        <p>Estado: ${p.estado}</p>
                                        <p>Genero: ${p.genero}</p>
                                        <p>Detalle: ${p.detalle}</p>
                                        <p style="color: blue;"> Origen: ${p.origen}</p>
                                        <button onclick="agregarFavoritos('${p.nombre}')">Favorito</button>
                                        <p>--------------------------------</p>`
                                    })
                                
                                            botonOrdenarAlfabeticamente.addEventListener('click', () => {

                                                arrayEstadoRick.sort((a, b) => a.nombre.localeCompare(b.nombre))

                                                    tarjeta.innerHTML = ""

                                                        arrayEstadoRick.forEach(p => {
                                                                tarjeta.innerHTML += `<p><img src=${p.imagen}></p>
                                                                <p>Nombre: ${p.nombre}</p>
                                                                <p>Estado: ${p.estado}</p>
                                                                <p>Genero: ${p.genero}</p>
                                                                <p>Detalle: ${p.detalle}</p>
                                                                <p style="color: blue;"> Origen: ${p.origen}</p>
                                                                <button onclick="agregarFavoritos('${p.nombre}')">Favorito</button>
                                                                <p>--------------------------------</p>`
                                                        })
                                            }) 

                                        const cantidadPjCargados = arrayEstadoRick.length

                                                    const porGenero = arrayEstadoRick.reduce((acc, p) => {
                                                        acc[p.genero] = (acc[p.genero] || 0) + 1       // se construye un objeto y luego busca si la clave existe, sino existe la crea y le suma 1
                                                        return acc
                                                    }, {})

                                                        const porEstado = arrayEstadoRick.reduce((acc, p) => {
                                                            acc[p.estado] = (acc[p.estado] || 0) + 1
                                                            return acc
                                                        }, {})

                                                            const porUniverso = arrayEstadoRick.reduce((acc, p) => {
                                                                acc[p.origen] = (acc[p.origen] || 0) + 1
                                                                return acc
                                                            }, {})
                                                        
                                                estadisticas.innerHTML = `<p>La cantidad de personajes cargados es: ${cantidadPjCargados} </p>
                                                                        <p>Clasificados por genero: ${JSON.stringify(porGenero)}</p>
                                                                        <p>Clasificados por estado: ${JSON.stringify(porEstado)}</p>
                                                                        <p>Clasificados por universo: ${JSON.stringify(porUniverso)}</p>`
                    
            } catch (error) {
                console.log("Error atrapado.", error)
            }
    }

    if (select.value === "simpson") {
            try {
                    
                if (name) {
                    urlSimpson = `https://thesimpsonsapi.com/api/characters?name=${name}`
                } else {
                    urlSimpson = `https://thesimpsonsapi.com/api/characters`
                }

                    const response = await fetch(urlSimpson)
                        if (response.status === 404) {
                                tarjeta.innerHTML = "No se encontraron personajes"
                                return
                        }
                    if (!response.ok) throw new Error(`Error: ${response.status}`)
                    const data = await response.json()

                                arrayEstadoSimpson = data.results.map(p => ({
                                                        id: p.id,
                                                        nombre: p.name,
                                                        imagen: `https://cdn.thesimpsonsapi.com/200${p.portrait_path}`,
                                                        estado: p.status,
                                                        genero: p.gender,
                                                        detalle: p.occupation,
                                                        origen: "Simpson"
                                                        }));

                                                                if (name) {
                                                                    arrayEstadoSimpson = arrayEstadoSimpson.filter(p =>
                                                                        p.nombre.toLowerCase().includes(name.toLowerCase())
                                                                    );
                                                                }

                        if (filtro.value==="alive") {
                            arrayEstadoSimpson = arrayEstadoSimpson.filter(p => p.estado === "Alive")
                        }
                            else if (filtro.value==="dead") {
                                arrayEstadoSimpson = arrayEstadoSimpson.filter(p => p.estado === "Deceased")
                            }
                                else if (filtro.value==="unknown") {
                                    arrayEstadoSimpson = arrayEstadoSimpson.filter(p => p.estado === "Unknown")   
                                }
                    
                                    arrayEstadoSimpson.forEach(p => {
                                        tarjeta.innerHTML += `<p><img src=${p.imagen}></p>
                                        <p>Nombre: ${p.nombre}</p>
                                        <p>Estado: ${p.estado}</p>
                                        <p>Genero: ${p.genero}</p>
                                        <p>Detalle: ${p.detalle}</p>
                                        <p style="color: orange;"> Origen: ${p.origen}</p>
                                        <button onclick="agregarFavoritos('${p.nombre}')">Favorito</button>
                                        <p>--------------------------------</p>`
                                    })

                                            botonOrdenarAlfabeticamente.addEventListener('click', () => {

                                                arrayEstadoSimpson.sort((a, b) => a.nombre.localeCompare(b.nombre))

                                                    tarjeta.innerHTML = ""

                                                        arrayEstadoSimpson.forEach(p => {
                                                                tarjeta.innerHTML += `<p><img src=${p.imagen}></p>
                                                                <p>Nombre: ${p.nombre}</p>
                                                                <p>Estado: ${p.estado}</p>
                                                                <p>Genero: ${p.genero}</p>
                                                                <p>Detalle: ${p.detalle}</p>
                                                                <p style="color: orange;"> Origen: ${p.origen}</p>
                                                                <button onclick="agregarFavoritos('${p.nombre}')">Favorito</button>
                                                                <p>--------------------------------</p>`
                                                        })
                                            }) 

                                            const cantidadPjCargados = arrayEstadoSimpson.length

                                                    const porGenero = arrayEstadoSimpson.reduce((acc, p) => {
                                                        acc[p.genero] = (acc[p.genero] || 0) + 1       // se construye un objeto y luego busca si la clave existe, sino existe la crea y le suma 1
                                                        return acc
                                                    }, {})

                                                        const porEstado = arrayEstadoSimpson.reduce((acc, p) => {
                                                            acc[p.estado] = (acc[p.estado] || 0) + 1
                                                            return acc
                                                        }, {})

                                                            const porUniverso = arrayEstadoSimpson.reduce((acc, p) => {
                                                                acc[p.origen] = (acc[p.origen] || 0) + 1
                                                                return acc
                                                            }, {})
                                                        
                                                estadisticas.innerHTML = `<p>La cantidad de personajes cargados es: ${cantidadPjCargados} </p>
                                                                        <p>Clasificados por genero: ${JSON.stringify(porGenero)}</p>
                                                                        <p>Clasificados por estado: ${JSON.stringify(porEstado)}</p>
                                                                        <p>Clasificados por universo: ${JSON.stringify(porUniverso)}</p>`

            } catch (error) {
                console.log("Error atrapado.", error)
            }
            
    }

    if (select.value === "ambos") {
        try {

                if (name) {
                    urlRick = `https://rickandmortyapi.com/api/character/?name=${name}`
                    urlSimpson = `https://thesimpsonsapi.com/api/characters?name=${name}`
                      
                } else {
                    urlRick = `https://rickandmortyapi.com/api/character`;
                    urlSimpson = `https://thesimpsonsapi.com/api/characters`
                }

                const [responseRick, responseSimpson] = await Promise.all([
                    fetch(urlRick),
                    fetch(urlSimpson)
                ])

                    if (!responseRick.ok && responseRick.status !== 404) throw new Error(`Error Rick: ${responseRick.status}`)
                    if (!responseSimpson.ok && responseSimpson.status !== 404) throw new Error(`Error Simpson: ${responseSimpson.status}`)

                        const dataRick = responseRick.ok ? await responseRick.json() : { results: [] }
                        const dataSimpson = responseSimpson.ok ? await responseSimpson.json() : { results: [] }


                    // ARRAY DE LOS PERSONAJES DE RICK AND MORTY
                            arrayEstadoRick = dataRick.results.map(p => ({
                                                id: p.id,
                                                nombre: p.name,
                                                imagen: p.image,
                                                estado: p.status,
                                                genero: p.gender,
                                                detalle: p.species,
                                                origen: "Rick And Morty"
                                                }));

                                                    if (name) {
                                                        arrayEstadoRick = arrayEstadoRick.filter(p =>
                                                            p.nombre.toLowerCase().includes(name.toLowerCase())
                                                        );
                                                    }
                                                                    


                            // ARRAY DE LOS PERSONAJES DE LOS SIMPSON
                                        arrayEstadoSimpson = dataSimpson.results.map(p => ({
                                                            id: p.id,
                                                            nombre: p.name,
                                                            imagen: `https://cdn.thesimpsonsapi.com/200${p.portrait_path}`,
                                                            estado: p.status,
                                                            genero: p.gender,
                                                            detalle: p.occupation,
                                                            origen: "Simpson"
                                                            }));

                                                                if (name) {
                                                                    arrayEstadoSimpson = arrayEstadoSimpson.filter(p =>
                                                                        p.nombre.toLowerCase().includes(name.toLowerCase())
                                                                    );
                                                                }
                                                                

                        if (filtro.value==="alive") {
                            arrayEstadoRick = arrayEstadoRick.filter(p => p.estado === "Alive")
                            arrayEstadoSimpson = arrayEstadoSimpson.filter(p => p.estado === "Alive")
                        }
                            else if (filtro.value==="dead") {
                                arrayEstadoRick = arrayEstadoRick.filter(p => p.estado === "Dead")
                                arrayEstadoSimpson = arrayEstadoSimpson.filter(p => p.estado === "Deceased")
                            }
                                else if (filtro.value==="unknown") {
                                    arrayEstadoRick = arrayEstadoRick.filter(p => p.estado === "unknown") 
                                    arrayEstadoSimpson = arrayEstadoSimpson.filter(p => p.estado === "Unknown")
                                }
                    
                                    arrayEstadoRick.forEach(p => {
                                        tarjeta.innerHTML += `<p><img src=${p.imagen}></p>
                                        <p>Nombre: ${p.nombre}</p>
                                        <p>Estado: ${p.estado}</p>
                                        <p>Genero: ${p.genero}</p>
                                        <p>Detalle: ${p.detalle}</p>
                                        <p style="color: blue;"> Origen: ${p.origen}</p>
                                        <button onclick="agregarFavoritos('${p.nombre}')">Favorito</button>
                                        <p>--------------------------------</p>`
                                    })
                                                    
                                                arrayEstadoSimpson.forEach(p => {
                                                    tarjeta.innerHTML += `<p><img src=${p.imagen}></p>
                                                    <p>Nombre: ${p.nombre}</p>
                                                    <p>Estado: ${p.estado}</p>
                                                    <p>Genero: ${p.genero}</p>
                                                    <p>Detalle: ${p.detalle}</p>
                                                    <p style="color: orange;"> Origen: ${p.origen}</p>
                                                    <button onclick="agregarFavoritos('${p.nombre}')">Favorito</button>
                                                    <p>--------------------------------</p>`
                                                })
                                                
                                                
                                                botonOrdenarAlfabeticamente.addEventListener('click', () => {

                                                        let arrayEstado = [...arrayEstadoRick, ...arrayEstadoSimpson]
                                                        
                                                        arrayEstado.sort((a, b) => a.nombre.localeCompare(b.nombre))

                                                        tarjeta.innerHTML = ""

                                                        arrayEstado.forEach(p => {
                                                            tarjeta.innerHTML += `<p><img src=${p.imagen}></p>
                                                            <p>Nombre: ${p.nombre}</p>
                                                            <p>Estado: ${p.estado}</p>
                                                            <p>Genero: ${p.genero}</p>
                                                            <p>Detalle: ${p.detalle}</p>
                                                            <p style="color: ${p.origen === "Rick And Morty" ? "blue" : "orange"};"> Origen: ${p.origen}</p>
                                                            <button onclick="agregarFavoritos('${p.nombre}')">Favorito</button>
                                                            <p>--------------------------------</p>`
                                                        })
                                                }) 
                                                
                                            const arrayEstado = [...arrayEstadoRick, ...arrayEstadoSimpson]

                                                const cantidadPjCargados = arrayEstado.length

                                                    const porGenero = arrayEstado.reduce((acc, p) => {
                                                        acc[p.genero] = (acc[p.genero] || 0) + 1       // se construye un objeto y luego busca si la clave existe, sino existe la crea y le suma 1
                                                        return acc
                                                    }, {})

                                                        const porEstado = arrayEstado.reduce((acc, p) => {
                                                            acc[p.estado] = (acc[p.estado] || 0) + 1
                                                            return acc
                                                        }, {})

                                                            const porUniverso = arrayEstado.reduce((acc, p) => {
                                                                acc[p.origen] = (acc[p.origen] || 0) + 1
                                                                return acc
                                                            }, {})
                                                        
                                                estadisticas.innerHTML = `<p>La cantidad de personajes cargados es: ${cantidadPjCargados} </p>
                                                                        <p>Clasificados por genero: ${JSON.stringify(porGenero)}</p>
                                                                        <p>Clasificados por estado: ${JSON.stringify(porEstado)}</p>
                                                                        <p>Clasificados por universo: ${JSON.stringify(porUniverso)}</p>`


                                                    if (arrayEstadoRick.length === 0) {
                                                        tarjeta.innerHTML += "No se encontraron personajes de RICK AND MORTY"
                                                    }
                                                        if (arrayEstadoSimpson.length === 0) {
                                                            tarjeta.innerHTML += "No se encontraron personajes de SIMPSONS"
                                                        }                                                        

        } catch (error) {
            console.log("Error atrapado.", error)
        }
    }
})

