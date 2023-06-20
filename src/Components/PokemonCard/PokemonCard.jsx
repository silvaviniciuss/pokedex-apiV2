import { 
    PokeballImage,
PokemonCardContainer, 
PokemonDetail, 
PokemonId, 
PokemonName, 
TypesContainer } from "./PokemonCardStyle"
import PokeballCardImage from "../../assets/Img/pngwing2.png"
import PokemonImage from "../../assets/Img/image3.png"

export const PokemonCard = () => {
    return(
        <PokemonCardContainer>
            <div>
            <PokemonId>001</PokemonId>
            <PokemonName>Bulbasaur</PokemonName>
            <TypesContainer></TypesContainer>
            <PokemonDetail></PokemonDetail>
            </div>
            <div>
                <PokeballCardImage src={PokemonImage}/>
            </div>
                <PokeballImage src={PokeballCardImage}/>
        </PokemonCardContainer>
    )
}
