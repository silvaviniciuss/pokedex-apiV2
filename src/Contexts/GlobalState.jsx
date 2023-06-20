import { useState } from "react"
import { globalContext } from "./globalContext"

export const GlobalState = ({ children }) => {

    const [pokemons, setPokemons] = useState([])

    const loadingPokemons = () => {
        let getPokemons = []
        for (let i = 1; i < 2; i++) {
            getPokemons.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(getPokemons.map((poke) => axios.get(poke))).then((res) => setPokemons(res));
    }

    return (
        <globalContext.Provider>
            {children}
        </globalContext.Provider>
    )
}
