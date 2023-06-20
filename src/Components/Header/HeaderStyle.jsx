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
    width: 30.7rem;
    height: 11.3rem;
    margin-right: 10rem;
`

export const HeaderButton = styled.button`
    width: 28.7rem;
    height: 7.4rem;
    padding: .4rem 1rem;
    border-radius: .8rem;
    background-color: #33A4F5;
    color: white;
    position: absolute;
    right: 1.3rem;
    font-size: 2rem;
`