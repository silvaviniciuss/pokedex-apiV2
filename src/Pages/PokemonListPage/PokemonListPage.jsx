import {useContext} from 'react'
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { PokemonListContainer, PokemonListPageContainer } from "./PokemonListPageStyle"
import { globalContext } from '../../Contexts/globalContext'

export const PokemonListPage = () => {
    
    const context = useContext(globalContext)
    const {pokemons} = context

    return (
        <PokemonListPageContainer>
            <h1>Todos Pokemons</h1>
            <PokemonListContainer>
                {pokemons
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
        </PokemonListPageContainer>
    )
}
