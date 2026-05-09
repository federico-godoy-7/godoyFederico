// EJERCICIO 08 

let resultado = document.getElementById("id_resultado") 

let boton = document.getElementById("id_boton")

    boton.addEventListener('click', () => { 
    const texto = document.getElementById("id_input").value
    
    fetch(`https://rickandmortyapi.com/api/character?name=${texto}`)
        .then(response => response.json())
        .then(data => {
            
            data.results.forEach(personajes => {
                resultado.innerHTML += `
                <div>Nombre: ${personajes.name}</div>
                <div>Estado: ${personajes.status}</div>
                <img src="${personajes.image}">
                ------------------------------------`;
            })
            })
        });