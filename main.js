const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
const pokemonsInfo = [];

const inputSearch$$ = document.querySelector('.search__input')
const buttonSearch$$ = document.querySelector('.search__button')

const showCase$$ = document.createElement('div')


    const search = () => {
        
        const pokemonsFiltered = pokemonsInfo.filter((pokemon) => {
            return pokemon.name
            .toLowerCase()
            .includes(inputSearch$$.value.toLowerCase())
        })
        showPokemons(pokemonsFiltered)

    } 

inputSearch$$.addEventListener('input', search)



const showPokemons = (pokemonsInfo) => {
    
    showCase$$.innerHTML = '';

    for (const pokemons of pokemonsInfo) {
              
        let name        = pokemons.name
        let id          = pokemons.id
        let image       = pokemons.sprites.other.dream_world.front_default;
        let types       = []
        // console.log(pokemons.types)
    

                for (const type of pokemons.types) {
                    
                    types.push(type.type.name)
                    
                }
        
            const card$$  = document.createElement('div')
            const image$$ = document.createElement('img')
            const name$$  = document.createElement('h3')
            const id$$    = document.createElement('p')
            const types$$ = document.createElement('p')


                image$$.src             = image
                name$$.textContent      = name
                id$$.textContent        = ('#00')+id
                types$$.textContent     = types.join(', ')


                    showCase$$.classList.add('.showCase')
                    card$$.classList.add('.card')
                    image$$.classList.add('.image')
                    name$$.classList.add('.name')
                    id$$.classList.add('.id')
                    types$$.classList.add('.type')


                        document.body.appendChild(showCase$$)
                        showCase$$.appendChild(card$$)
                        card$$.append(image$$, name$$, id$$, types$$)
    }

} 



const getInfo = async () => {

    try {
            const camarero = await fetch(baseURL)
            // console.log(camarero)
            const quierolaCarta = await camarero.json();
            // console.log(quierolaCarta.results)
            const platos = quierolaCarta.results
            // console.log(platos)

            for (const plato of platos) {

                const vuelveCamarero = await fetch(plato.url)
                // console.log(vuelveCamarero)
                const quieroEstePlato = await vuelveCamarero.json()
                // console.log(quieroEstePlato)
                pokemonsInfo.push(quieroEstePlato)
            }

            showPokemons(pokemonsInfo)

    } catch(malServicioCamarero) {

            console.log(malServicioCamarero)
    }

}

getInfo()



