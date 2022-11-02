const pokemonsDB = require('../db/pokemonsDB');

const createNewPokemon = (pokemon) => {
    if (!pokemon.name) {
        throw new Error('name is required');
    }
    let lastId = -1;

    // Check the pokemon does not exist
    for (let i = 0; i < pokemonsDB.length; i++) {
        if (pokemonsDB[i].name === pokemon.name) {
            throw new Error('pokemon already exists');
        }
        lastId = pokemonsDB[i].id;
    }

    // Push the new pokemon into the database
    pokemonsDB.push({
        id: lastId + 1,
        name: pokemon.name
    });
};

module.exports = {
    createNewPokemon
}