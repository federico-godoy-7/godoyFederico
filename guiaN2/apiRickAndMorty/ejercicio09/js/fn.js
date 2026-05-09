// EJERCICIO 09

let resultado = document.getElementById('id_resultado')

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {

        let especies = data.results.reduce((acumulador, personaje) => {

            if (!acumulador[personaje.species]) {
                acumulador[personaje.species] = 0
            }
            acumulador[personaje.species]++

            return acumulador
        }, {})

        Object.entries(especies).forEach(([especie, cantidad]) => {
            resultado.innerHTML += `<div>${especie}: ${cantidad}</div>`
        })  
    })