import styled from "styled-components";

export const PokedexPageStyle = styled.main`
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
