import styled from "styled-components";

export const PokemonDetailStyle = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #5E5E5E;
    color: white;
    width: 100vw;
    height: 100vh;
    h1 {
        margin-left: 2rem;
        margin-top: 1rem;
        @media screen and (max-width: 100px){
            margin: 20px 10vw;
            font-size: 1.5rem;
            margin-left: 1rem;
        }
    }
    
`

export const PokemonDetailCard = styled.section`
    display: flex;
    width: 80%;
    height: 65vh;
    margin: 60px 10vw;
    background-color: ${({ cardColor }) => cardColor};
    border-radius: 2rem;
    position: relative;

    @media screen and (max-width: 1200px){
    margin: 20px 10vw;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60vh;
    margin-left: 2rem;
`

export const PokeImageFrontBack = styled.img`
    background-color: white;
    height: 25vh;
    border-radius: 1rem;
`

export const BaseStats = styled.div`
    background: white;
    color: black;
    height: 53vh;
    width: 343px;
    margin: 2rem 0 2rem 2rem;
    border-radius: 1rem;
    h1 {
        font-size: 1.4rem;
        font-weight: 700;
        @media screen and (max-width: 1200px){
          font-size: 1.3rem;
        }

    }
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    @media screen and (max-width: 1200px){
       width: 450px;
       height: 54vh;
       margin-right: 0;
    }

`

export const PokeballDetailImage = styled.img`
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;

`

export const PokemonImage = styled.img`
    height: 270px;
    height: 270px;
    position: absolute;
    right: 0;
    top: -8rem;
    z-index: 1;

    @media screen and (max-width: 1200px){
        right: -1.8rem;
    }
`

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1.5rem;
    
`

export const StatsPokemons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const PokeStatusName = styled.div`
    width: 35%;
    text-align: center;
    text-transform: capitalize;
    color: black;


`

export const BarProgress = styled.div`
    width: 50%;
    margin-right: .5rem;
`

export const PokemonIdNameContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const PokemonId = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;

    @media screen and (max-width: 1200px){
        font-size: 1.3rem;
    }
`

export const PokemonName = styled.p`
    color: #FFFFFF;
    font-size: 3rem;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    text-transform: capitalize;
    z-index: 2;

    @media screen and (max-width: 1200px){
        font-size: 2.4rem;
    }
`

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 2;
  margin-bottom: 2rem;
`

export const MoveContainer = styled.div`
    background: #FFFFFF;
    border-radius: .8rem;
    color: black;
    height: 35.5vh;
    h1 {
        margin-left: 0;
        font-size: 1.4rem;
        font-weight: 700;
    }
    display: flex;
    flex-direction: column;
    justify-content: left;
    row-gap: 5px;
    
    @media screen and (max-width: 1200px){
        height: 39.5vh;
    }
`

