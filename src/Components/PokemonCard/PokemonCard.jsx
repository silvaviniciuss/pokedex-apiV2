import { useContext } from "react";
import {
    CardButton,
    PokeballImage,
    PokemonCardContainer,
    PokemonCardImage,
    PokemonDetail,
    PokemonId,
    PokemonName,
    PokemonType,
    TypesContainer
} from "./PokemonCardStyle"
import PokeballCardImage from "../../assets/Img/pngwing2.png"
import { pokemonTypeCards } from "../../Utils/PokemonTypeCard"
import { pokemonCardColor } from "../../Utils/PokemonCardColor"
import { globalContext } from "../../Contexts/globalContext";
import { useLocation, useNavigate } from "react-router-dom"
import { goToPokemonDetail } from "../../Router/Coordinator";

export const PokemonCard = ({ pokemon }) => {

    const context = useContext(globalContext)
    const { addPokemonToPokedex, removePokemonOfPokedex } = context

    const locate = useLocation()
    const navigate = useNavigate()

    const returnCardButton = (poke) => {
        if (locate.pathname === '/') {
            return <CardButton
                buttonBackgroundColor={'#FFFFFF'}
                buttonColor={'black'}
                onClick={() => addPokemonToPokedex(poke)}
            >
                Capturar
            </CardButton>
        } else {
            return <CardButton
                buttonBackgroundColor={'#FF6262'}
                buttonColor={'white'}
                onClick={() => removePokemonOfPokedex(poke)}
            >
                Excluir
            </CardButton>
        }
    }

    return (
        <PokemonCardContainer
            cardColor={pokemonCardColor(
                pokemon.data.types[0].type.name
            )}
        >
            <div>
                <PokemonId>
                    {pokemon.data.id < 10 ?
                        '#0' + pokemon.data.id
                        : '#' + pokemon.data.id}
                </PokemonId>
                <PokemonName>{pokemon.data.name}</PokemonName>
                <TypesContainer>
                    {pokemon.data.types.map((type) => {
                        return <PokemonType
                            key={type.id}
                            src={pokemonTypeCards(type.type.name)}
                        />
                    })}
                </TypesContainer>
                <PokemonDetail
                onClick={() => goToPokemonDetail(navigate, pokemon.data.id)}
                >Detalhes</PokemonDetail>
            </div>
            <div>
                <PokemonCardImage src={
                    pokemon.data.sprites.other["official-artwork"].front_default
                } />
                {returnCardButton(pokemon)}
            </div>
            <PokeballImage src={PokeballCardImage} />
        </PokemonCardContainer>
    )
}
