// API POKEMON
// hacer un juego con HTML y js api de pokemon
//se usa fetch
//localstorage
//arrays o JSON
//cuando abra la pantalla aparezca aleatoriamente dos pokemones 
//ataque y defensa datos numéricos cada pokemon tiene su propio ataque
//botón en cada pokemon disable y enable true o false 
//habrá turnos uno ataca primero y el otro ataca hasta que alguno muera
//cuando uno muere automáticamente mediante fetch pedimos otro personaje para que continue la batalla
//guardar datos del que perdió



let pokemon1 = null;
let pokemon2 = null;

let historialPerdedores = JSON.parse(localStorage.getItem('historialPerdedores')) || [];

// PARA LOS TURNOS 
const button = document.getElementById("boton")
const button2 = document.getElementById("boton2")
button.disabled = true
button2.disabled = false

// DONDE SE MUESTRAN LOS POKEMONS
let resultado = document.getElementById("id_resultado")
let resultado2 = document.getElementById("id_resultado2")


  // SE CARGA POKEMON 1
async function cargarPokemon1() {
    const id = Math.floor(Math.random() * 1025) + 1 

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    pokemon1 = await response.json();

        resultado.innerHTML = 
        `<div>
            <h1>${pokemon1.name}</h1>
            <img src="${pokemon1.sprites.front_default}">
            <p>Ataque: ${pokemon1.stats[1].base_stat}</p>
            <p>Defensa (HP): <span id="defensa1">${pokemon1.stats[2].base_stat}</span></p>
        </div>`


        pokemon1.attack = pokemon1.stats[1].base_stat;
        pokemon1.current_hp = pokemon1.stats[2].base_stat;
    }

    // ATAQUE 1
    function atacar() {
        const daño = pokemon1.attack
        pokemon2.current_hp -= daño;

        document.getElementById("defensa2").innerText = pokemon2.current_hp;

        console.log(`${pokemon2.name} perdió ${daño} de vida`);
        console.log(`Vida restante: ${pokemon2.current_hp}`);
        
        if (pokemon2.current_hp <= 0) {
            console.log(`${pokemon2.name} murió`);
            console.log('--------------------')

            guardarPerdedor(pokemon2);
            
            resultado2.innerHTML = ""
            cargarPokemon2();
        }
    }

    // SE CARGA POKEMON 2
async function cargarPokemon2() {
    const id2 = Math.floor(Math.random() * 1025) + 1 // se pone +1 porque el metodo empieza desde 0

    const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`);
    pokemon2 = await response2.json();

        resultado2.innerHTML = 
        `<div>
            <h2>${pokemon2.name}</h2>
            <img src="${pokemon2.sprites.front_default}">
            <p>Ataque: ${pokemon2.stats[1].base_stat}</p>
            <p>Defensa (HP): <span id="defensa2">${pokemon2.stats[2].base_stat}</span></p>
        </div>`

        pokemon2.attack = pokemon2.stats[1].base_stat;
        pokemon2.current_hp = pokemon2.stats[2].base_stat;
    }

    // ATAQUE 2
    function atacar2() {

        const daño = pokemon2.attack
        pokemon1.current_hp -= daño;

        document.getElementById("defensa1").innerText = pokemon1.current_hp;

        console.log(`${pokemon1.name} perdió ${daño} de vida`);
        console.log(`Vida restante: ${pokemon1.current_hp}`);

        if (pokemon1.current_hp <= 0) {
            console.log(`${pokemon1.name} murió`);
            console.log('--------------------')

            guardarPerdedor(pokemon1);
            
            resultado.innerHTML = ""
            cargarPokemon1();
        }
}

function guardarPerdedor(pokemonMuerto) {
    
    const perdedor = {
        nombre: pokemonMuerto.name,
        ataque: pokemonMuerto.attack,
        defensa_hp: pokemonMuerto.stats[2].base_stat,
    };

    historialPerdedores.push(perdedor);

    localStorage.setItem('historialPerdedores', JSON.stringify(historialPerdedores)); // se convierte a string porque si no se rompe
}

button.addEventListener('click', () => {
  button.disabled = true;  
  button2.disabled = false;  
});

button2.addEventListener('click', () => {
  button2.disabled = true;
  button.disabled = false; 
})

    cargarPokemon1();
    cargarPokemon2();