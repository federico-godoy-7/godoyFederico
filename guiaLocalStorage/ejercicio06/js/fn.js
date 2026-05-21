async function compararUniversos(rickId, simpsonsId) {
  try {
    const [res1, res2] = await Promise.all ([
        fetch(`https://rickandmortyapi.com/api/character/${rickId}`),
        fetch(`https://thesimpsonsapi.com/api/characters/${simpsonsId}`)
    ]);

    const [rick, simp] = await Promise.all ([
        res1.json(),
        res2.json()
    ])

    console.log(`${rick.name} (${rick.species}, ${rick.status})`)
    console.log (`${simp.name} (${simp.occupation}, ${simp.status})`)
    console.log ('---------------')

  } catch (error) {
    console.log("❌ Error al comparar:", error.message);
  }
}

compararUniversos(1, 1);
compararUniversos(2, 3);