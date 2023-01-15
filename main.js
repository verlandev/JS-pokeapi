const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
const pokemonsInfo = [];

const inputSearch$$     = document.querySelector('.search__input')
const root$$            = document.querySelector('#root')
const buttonSearch$$    = document.querySelector('.search__button')

const showCase$$        = document.createElement('div')


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
        let types       = pokemons.types[0].type.name
        let height      = pokemons.height
        let weight      = pokemons.weight
    

                // for (const type of pokemons.types) {
                    
                //     types.push(type.type.name)
                    
                // }
        
            const card$$        = document.createElement('div')
            const image$$       = document.createElement('img')
            const properties$$  = document.createElement('div')
            const stats$$       = document.createElement('div')
            const name$$        = document.createElement('h3')
            const id$$          = document.createElement('p')
            const types$$       = document.createElement('p')
            const height$$      = document.createElement('p')
            const weight$$      = document.createElement('p')
            


                image$$.src             = image
                id$$.textContent        = ('#00')+id
                name$$.textContent      = name
                types$$.textContent     = ('Type: ') + types
                
                height$$.textContent    = ('Height: ') + height
                weight$$.textContent    = ('Weight: ') + weight
                // types$$.textContent     = types.join(', ')


                    showCase$$.classList.add('showCase')
                    card$$.classList.add('card')
                    image$$.classList.add('card__image')
                    properties$$.classList.add('card__properties')
                    stats$$.classList.add('card__properties--stats')

                    id$$.classList.add('card__properties--id')
                    name$$.classList.add('card__properties--name')


                    types$$.classList.add('card__properties--types')
                    height$$.classList.add('card__properties--height')
                    weight$$.classList.add('card__properties--weight')


                        if (types === 'grass'){
                            card$$.classList.add('grass')
                        } if (types === 'fire'){
                            card$$.classList.add('fire')
                        } if (types === 'electric'){
                            card$$.classList.add('electric')
                        } if (types === 'water'){
                            card$$.classList.add('water')
                        } if (types === 'ground'){
                            card$$.classList.add('ground')
                        } if (types === 'rock'){
                            card$$.classList.add('rock')
                        } if (types === 'poison'){
                            card$$.classList.add('poison')
                        } if (types === 'bug'){
                            card$$.classList.add('bug')
                        } if (types === 'dragon'){
                            card$$.classList.add('dragon')
                        } if (types === 'psychic'){
                            card$$.classList.add('psychic')
                        }if (types === 'flying'){
                            card$$.classList.add('flying')
                        }if (types === 'fighting'){
                            card$$.classList.add('fighting')
                        }if (types === 'normal'){
                            card$$.classList.add('normal')
                        } if (types === 'fairy'){
                            card$$.classList.add('fairy')
                        } if (types === 'ghost'){
                            card$$.classList.add('ghost')
                        }if (types === 'ice'){
                            card$$.classList.add('ice')
                        }



                            root$$.appendChild(showCase$$)
                            showCase$$.appendChild(card$$)
                            card$$.append(image$$, properties$$)
                            properties$$.append(id$$,name$$,stats$$)
                            stats$$.append(types$$,height$$,weight$$)
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



