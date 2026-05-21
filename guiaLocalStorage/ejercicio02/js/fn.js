// EJERCICIO 02

async function compararOcupaciones() {

    const homer = await fetch(`https://thesimpsonsapi.com/api/characters/${1}`).then(r => r.json());
    const bart = await fetch(`https://thesimpsonsapi.com/api/characters/${3}`).then(r => r.json());
    
    console.log(`${homer.name} es ${homer.occupation} y ${bart.name} es ${bart.occupation}`)
}

compararOcupaciones()