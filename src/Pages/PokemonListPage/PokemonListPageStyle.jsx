import styled from "styled-components";

export const PokemonListPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #5E5E5E;
    color: white;
    width: 100vw;
    height: 100vh;
    h1 {
        margin-left: 2rem;
        margin-top: 1rem;
        @media screen and (max-width: 1200px){
          font-size: 1.5rem;
        }
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

   @media screen and (max-width: 1200px){
      justify-content: space-around;
      column-gap: .1rem;
    }
`


