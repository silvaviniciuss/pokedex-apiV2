import styled from "styled-components";

export const PokemonListPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #5E5E5E;
    color: white;
    width: 100vw;
    h1 {
        margin-left: 2rem;
        margin-top: 1rem;
    }
  `
export const PokemonListContainer = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-evenly;
   column-gap: 5rem;
   row-gap: 5rem;
   width: 100%;
   margin-top: 2rem;
   background-color: #5E5E5E;
`


