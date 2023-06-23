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
`

export const TextBackAllPokemons = styled.p`
    position: absolute;
    left: 1.3rem;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
`
export const PokemonLogo = styled.img`
    width: 307px;
    margin-right: 5rem;
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
`