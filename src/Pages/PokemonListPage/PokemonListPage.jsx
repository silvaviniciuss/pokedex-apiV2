import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { PokemonListContainer, PokemonListPageContainer } from "./PokemonListPageStyle"

export const PokemonListPage = () => {
    return (
        <PokemonListPageContainer>
            <h1>Todos Pokemons</h1>
            <PokemonListContainer>
                <PokemonCard />
            </PokemonListContainer>
        </PokemonListPageContainer>
    )
}
