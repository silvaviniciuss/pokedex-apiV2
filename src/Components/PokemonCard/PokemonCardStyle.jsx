import styled from "styled-components";

export const PokemonCardContainer = styled.main`
   padding: 1.6rem;
   min-width: 44rem;
   max-width: 44rem;
   background-color: green;
   border-radius: 1.2rem;
   display: flex;
   position: relative;
   color: #ffffff;
`

export const PokemonId = styled.p`
  width: 3rem;
  height: 1.9rem;
  font-size: 1.7rem;
  text-align: left;
  font-weight: 560;
  margin: 1rem 0 0 1rem;
` 

export const PokemonName = styled.h1`
  font-size: 3.2rem;
  text-align: left;
  font-size: 'Inter';
  font-weight: 700;
  line-height: 3.4rem;
  margin: 0.5rem 0 1rem 1rem;
`

export const TypesContainer = styled.div`
  margin-bottom: 5.2rem;
  margin-left: .8rem;
  display: flex;
  flex-direction: row;
`

export const PokemonType = styled.img`
  max-width: 10rem;
  min-width: 10rem;
  height: 3.2rem;
  margin-right: 0.8rem;
`

export const PokemonDetail = styled.p`
  width: 10rem;
  height: 2.4rem;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  text-decoration-line: underline;
  margin: 0 0 0.8rem 1rem;
`

export const PokeballImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`

export const CardButton = styled.button`
  font-family: 'Poppins';
  font-size: 1.6rem;
  padding: 0.4rem 1rem;
  width: 14.6rem;
  height: 3.8rem;
  border-radius: 0.8rem;
  position: absolute;
  bottom: 2.5rem;
  right: 3.5rem;
  background-color: white;
  color: #000;
  font-weight: 400;
  z-index: 1;
`

export const PokemonCardImage = styled.img`
  width: 20rem;
  height: 20rem;
  position: absolute;
  top: -5.5rem;
  right: 0;
  z-index: 2;
`
