import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { globalContext } from "../../Contexts/globalContext"
import { PokemonListContainer } from "../PokemonListPage/PokemonListPageStyle"
import { PokedexPageStyle } from "./PokedexPageStyle"
import {useContext} from "react"

export const PokedexPage = () => {
    
    const context = useContext(globalContext)
    const {pokedex} = context

    // console.log(pokedex)

    return (
        <PokedexPageStyle>
            <h1>Meus Pokemons</h1>
            <PokemonListContainer>
            {pokedex
                .sort((a, b) => {
                    return a.data.id - b.data.id
                })
                .map((pokemon) => {
                    return <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                })}
            </PokemonListContainer>
        </PokedexPageStyle>
    )
}
