import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: white;
    color: black;
    height: 20vh;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px){
       height: 15vh;
    }

`

export const TextBackAllPokemons = styled.p`
    position: absolute;
    left: 1.3rem;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;

    @media screen and (max-width: 1200px){
       font-size: 1.2rem;
    }

`
export const PokemonLogo = styled.img`
    width: 307px;
    margin-right: 5rem;

    @media screen and (max-width: 1200px){
       width: 207px;
    }

    @media screen and (min-width : 320px) and (max-width : 480px) {
        width: 157px;
    }

`

export const HeaderButton = styled.button`
    width: 20.7rem;
    height: 5.4rem;
    padding: .4rem 1rem;
    border-radius: .8rem;
    background-color: ${({buttonColor}) => buttonColor};
    color: white;
    position: absolute;
    right: 3rem;
    font-size: 1.5rem;

    @media screen and (max-width: 1200px){
       width: 15.7rem;
       height: 3rem;
       padding: .1rem .2rem;
    }

    @media screen and (min-width : 320px) and (max-width : 480px) {
        width: 8rem;
        height: 2rem;
        padding: 0;
        font-size: 1rem;
        right: 0;
    
    }

`