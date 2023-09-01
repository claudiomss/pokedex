const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonListDetails = document.getElementById('pokemonDetails')

const maxRecords = 151
const limit = 3
let offset = 0
let bg = 'red'

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types
                      .map((type) => `<li class="type ${type}">${type}</li>`)
                      .join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function convertPokemonToLiDetails(pokemon) {
  return `

  
   <div class="${pokemon.type} + container">


  <div class="title">${pokemon.name}  <span>#${pokemon.number}</span></div>
  <ol class="types">
  ${pokemon.types
    .map((type) => `<li class="type ${type}">${type}</li>`)
    .join('')}
  </ol>
  <img src="${pokemon.photo}" alt="${pokemon.name}">
 
  <div class="containerStatus">

        <li>Altura : <span>${pokemon.altura} cm </span><li/>
        <li>Peso : <span>${pokemon.peso} g</span><li/>
        <li class="skills">Habilidades : 
        ${pokemon.habilidades.map((hab) => `<span>${hab}</span>`).join(' - ')}
        <li/>

        <hr/>

        <li class="status">Vida : <span>${pokemon.hp}  <progress value=${
          pokemon.hp
        } max="150">70 %</progress> </span><li/>
        <li class="status">Ataque : <span>${pokemon.ataque} <progress value=${
          pokemon.ataque
        } max="150">70 %</progress></span><li/>
        <li class="status">Defesa : <span>${pokemon.defesa} <progress value=${
          pokemon.defesa
        } max="150">70 %</progress></span><li/>
        <li class="status">Especial Ataque : <span>${
          pokemon.spAtaque
        } <progress class="progressLow" value=${
          pokemon.spAtaque
        } max="150">70 %</progress></span><li/>
        <li class="status">Especial Defesa : <span>${
          pokemon.spDefesa
        } <progress value=${
          pokemon.spDefesa
        } max="150">70 %</progress></span><li/>
        <li class="status">Velocidade : <span>${
          pokemon.velocidade
        } <progress value=${
          pokemon.velocidade
        } max="150">70 %</progress></span><li/>
       
</div>


</div>
    `
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    const newHtml2 = pokemons.map(convertPokemonToLiDetails).join('')
    pokemonList.innerHTML += newHtml
    pokemonListDetails.innerHTML += newHtml2
  })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit
  const qtdRecordsWithNexPage = offset + limit

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
    loadPokemonItens(offset, limit)
  }
})
