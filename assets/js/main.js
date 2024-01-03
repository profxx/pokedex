const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const selectedPokemon = document.getElementById('loadSelectedPokemon')

const maxRecords = 15
const limit = 5
let offset = 0

function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) =>
            `<a href="pokemon.html">
                <li class="pokemon ${pokemon.type}">
                    <span class="number ${pokemon.type}">${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(' ')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            </a>`)
            .join('')
        })
}


loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    if (offset >= 10){
        loadPokemonItems(offset, limit)
        loadMoreButton.parentElement.removeChild('loadMoreButton')
    }else{
    loadPokemonItems(offset, limit)
    }
})

loadSelectedPokemon.addEventListener('click', () => {
    loadSelectedPokemonDetails()
})


