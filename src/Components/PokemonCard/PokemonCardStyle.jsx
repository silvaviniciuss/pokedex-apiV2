import styled from "styled-components";

export const PokemonCardContainer = styled.main`
   min-width: 27.5rem;
   max-width: 27.5rem;
   min-height: 13.2rem;
   max-height: 13.2rem;
   background-color: ${({cardColor}) => cardColor};
   border-radius: .75rem;
   display: flex;
   position: relative;
   color: #ffffff;

   @media screen and (max-width: 1200px){
    min-width: 20.5rem;
    max-width: 20.5rem;
    min-height: 12.2rem;
    max-height: 12.2rem;
    }

`

export const PokemonId = styled.p`
  width: 3rem;
  height: 1.2rem;
  font-size: 1rem;
  text-align: left;
  font-weight: 560;
  margin: 1rem 0 0 1rem;
` 

export const PokemonName = styled.h2`
  font-size: 2rem;
  font-family: 'Inter';
  font-weight: 700;
  margin: 0 1rem 0 1rem;
  text-transform: capitalize;
`

export const TypesContainer = styled.div`
  margin-bottom: 2.5rem;
  margin-left: .8rem;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1200px){
      margin-bottom: 2rem;
  }

`

export const PokemonType = styled.img`
  max-width: 6rem;
  min-width: 6rem;
  height: 2rem;
  margin-right: 0.8rem;
  z-index: 2;

  @media screen and (max-width: 1200px){
    max-width: 5rem;
    min-width: 5rem;
  }
`

export const PokemonDetail = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  text-decoration-line: underline;
  margin: 0 0 0 1rem;
  color: #FFFFFF;
  cursor: pointer;
  
  @media screen and (max-width: 1200px){
    font-size: 1.2rem;
  }
  
 
`

export const PokeballImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`

export const CardButton = styled.button`
  font-family: 'Poppins';
  font-size: 1.2rem;
  padding: 0.4rem 1rem;
  width: 9.6rem;
  height: 2.8rem;
  border-radius: 0.8rem;
  position: absolute;
  bottom: 1.1rem;
  right: 1.5rem;
  background-color: ${({buttonBackgroundColor}) => buttonBackgroundColor};
  color: ${({buttonColor})=> buttonColor};
  font-weight: 400;
  z-index: 1;

  @media screen and (max-width: 1200px){
    font-size: 1rem;
    padding: .0125rem;
    width: 6.6rem;
    height: 1.8rem;
  }
`

export const PokemonCardImage = styled.img`
  position: absolute;
  width: 12rem;
  height: 12rem;
  top: -4rem;
  right: 0;
  z-index: 2;
  
  @media screen and (max-width: 1200px){
    width: 10rem;
  height: 10rem;
    top: -4rem;
    right: -1.5rem;
    }

`
