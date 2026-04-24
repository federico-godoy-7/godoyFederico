// EJERCICIO 8

let resultado = document.getElementById("resultado")

let personajes = []

    fetch('https://thesimpsonsapi.com/api/characters')
    .then (Response => Response.json())
    .then (data => {
        personajes = data.results
    })

    function comparar() {
        personajes.sort((a, b) => a.age - b.age)
        personajes.slice(0, 5)
        personajes.forEach(personajes => {
            resultado.innerHTML += `<p> Nombre: ${personajes.name} - ${personajes.age} años`
    )}
    comparar()