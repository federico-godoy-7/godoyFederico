// EJERCICIO 07

let resultado = document.getElementById("id_resultado") 

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(response => response.json())
        .then(data => {
            personajes = data.results

            personajes.every(element => {
                if (element.image === true) {
                    resultado.innerHTML = `✅ Todos los personajes tienen imagen`
                }
                else {
                    resultado.innerHTML = `⚠️ Hay personajes sin imagen`
                }
            })
        })