const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types
  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  //   Contribuição

  pokemon.altura = pokeDetail.height
  pokemon.peso = pokeDetail.weight
  pokemon.habilidades = pokeDetail.abilities.map((hab) => hab.ability.name)

  const status = pokeDetail.stats.map((status) => status)

  pokemon.hp = status[0].base_stat
  pokemon.ataque = status[1].base_stat
  pokemon.defesa = status[2].base_stat
  pokemon.spAtaque = status[3].base_stat
  pokemon.spDefesa = status[4].base_stat
  pokemon.velocidade = status[5].base_stat

  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
}
