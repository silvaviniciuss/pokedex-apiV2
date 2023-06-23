import { useState, useEffect } from "react"
import { globalContext } from "./globalContext"
import axios from "axios"

export const GlobalState = ({ children }) => {

    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [isOpen, onClose] = useState(false)
    const [onOpen, setOnOpen] = useState(0)
    

    useEffect(() => {
        loadingPokemons()
    }, [])


    const loadingPokemons = () => {
        let getPokemons = []
        for (let i = 1; i < 152; i++) {
            getPokemons.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(getPokemons.map((poke) => axios.get(poke))).then((res) => setPokemons(res));
    }

    const addPokemonToPokedex = (poke) => {
        const updatePokemonListPage = pokemons.filter((pokemon) => {
            if (poke.data.id === pokemon.data.id) {
                return poke.data.id !== pokemon.data.id
            } else {
                return poke
            }
        })
        onClose(true)
        setOnOpen(0)
        setPokedex([...pokedex, poke])
        setPokemons(updatePokemonListPage)
    }

    const removePokemonOfPokedex = (poke) => {
        const addBackPokemonInPokemonList = pokedex.find((pokemon) => {
            return pokemon.data.id === poke.data.id
        })
        
        const updatePokedexList = pokedex.filter((pokemon) => {
            if (poke.data.id === pokemon.data.id) {
                return poke.data.id !== pokemon.data.id
            } else {
                return poke
            }
        })
        
        onClose(true)
        setOnOpen(1)
        setPokemons([...pokemons, addBackPokemonInPokemonList])
        setPokedex(updatePokedexList)

    }
    const context = {
        pokemons,
        setPokemons,
        pokedex,
        setPokedex,
        addPokemonToPokedex,
        removePokemonOfPokedex,
        isOpen,
        onClose,
        onOpen,
        setOnOpen,
    }

    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}
