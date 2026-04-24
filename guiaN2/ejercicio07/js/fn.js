//EJERCICIO 7

let resultado = document.getElementById("resultado")

let personajes = []

    fetch('https://thesimpsonsapi.com/api/characters')
    .then (Response => Response.json())
    .then (data => {
        personajes = data.results
    })

    function validar() {
        let texto = document.getElementById("id_input").value

        personaje = personajes.some(elemento => elemento.occupation.toLowerCase() === texto.toLowerCase())

        if (personaje) {
            resultado.innerHTML = `<p>✅ Sí, existe un personaje con esa ocupación</p>`
        }
        else {
            resultado.innerHTML = `<p>❌ No se encontró ninguno</p>`
        }
    }