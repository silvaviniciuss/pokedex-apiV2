import React from "react"

import {
    HeaderContainer,
    PokemonLogo,
    HeaderButton,
    TextBackAllPokemons,

} from "./HeaderStyle"
import PokemonImageLogo from "../../assets/Img/PokemonLogo.png"
import { useLocation, useNavigate } from "react-router-dom"
import { goToPokedexPage } from "../../Router/Coordinator"

export const Header = () => {
    const locate = useLocation()
    const navigate = useNavigate()

    const leftSideHeader = () => {
        if(locate.pathname.includes("/pokedex/")){
            return(
                <TextBackAllPokemons>
                    <u>&lt;Todos os Pokemons</u>
                </TextBackAllPokemons>
            )
        }
    }

    
    return (
        <HeaderContainer>
            {leftSideHeader()}
            <PokemonLogo
                src={PokemonImageLogo}
            ></PokemonLogo>
            <HeaderButton
            onClick={() => goToPokedexPage(navigate)}
            >Pokedex</HeaderButton>
        </HeaderContainer>
    )
}
