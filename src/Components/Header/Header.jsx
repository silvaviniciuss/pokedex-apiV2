import React, { useContext } from "react"

import {
    HeaderContainer,
    PokemonLogo,
    HeaderButton,
    TextBackAllPokemons,

} from "./HeaderStyle"
import PokemonImageLogo from "../../assets/Img/PokemonLogo.png"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { goToPokedexPage, goToPokemonListPage } from "../../Router/Coordinator"
import { globalContext } from "../../Contexts/globalContext"

export const Header = () => {
    const locate = useLocation()
    const navigate = useNavigate()

    const context = useContext(globalContext)
    const { pokemons ,pokedex, addPokemonToPokedex , removePokemonOfPokedex} = context

    const id = locate.pathname.split('/')[2]

    const findPokemonInPokedex = pokedex.find((pokemon) => pokemon.data.id.toString() === id)
    const findPokemonInPokemonList = pokemons.find((pokemon) => pokemon.data.id.toString() === id)

   
    const leftSideHeader = () => {
        if (locate.pathname === "/pokedex/"
            || locate.pathname.includes("/detalhes/")) {
            return (
                <TextBackAllPokemons
                    onClick={() => goToPokemonListPage(navigate)}
                >
                    <u>{'<'}Todos os Pokemons</u>
                </TextBackAllPokemons>
            )
        }
    }
    
    const rightSideHeader = () => {
        if (locate.pathname === "/") {
            return <HeaderButton
                buttonColor={'#33A4F5'}
                onClick={() => goToPokedexPage(navigate)}
            >Pokedex</HeaderButton>
        } else if (locate.pathname.includes("/detalhes/")) {
            if (findPokemonInPokedex) {
                return<HeaderButton
                buttonColor={'#FF6262'}
                onClick={()=> removePokemonOfPokedex(findPokemonInPokedex)}
            >Excluir da Pokedex
            </HeaderButton> 
            } else{
                return <HeaderButton
                buttonColor={'#33A4F5'}
                onClick={() => addPokemonToPokedex(findPokemonInPokemonList)}
                >
                    Adicionar na Pokedex
                </HeaderButton>
            }
        }
    }

    return (
        <HeaderContainer>
            {leftSideHeader()}
            <PokemonLogo
                src={PokemonImageLogo}
            ></PokemonLogo>
            {rightSideHeader()}
        </HeaderContainer>
    )
}
