const pokemonsDB = require('./db/pokemonsDB');
const express = require('express');
const { createNewPokemon } = require('./services/PokemonService');

const port = 7000;
const app = express();
app.use(express.json());

app.get('/pokemons', (request, response) => {
    response.send(pokemonsDB);
});


app.post('/pokemons', (request, response) => {
    try {
        createNewPokemon(request.body);
        response.status(200).send(pokemonsDB);
    } catch (error) {
        console.log(error);
        response.status(400).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server ready on port ${port}`);
});