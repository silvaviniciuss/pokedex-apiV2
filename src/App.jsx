import { GlobalStyle } from "@chakra-ui/react"
import { Router } from "./Router/Router"
import { GlobalState } from "./Contexts/GlobalState"
import { ChakraProvider } from "@chakra-ui/react"
import { ModalPokemon } from "./Components/Modal/ModalPokemon"

function App() {

  return (
    <GlobalState>
      <GlobalStyle />
      <ChakraProvider>
        <ModalPokemon/>
        <Router />
      </ChakraProvider>
    </GlobalState>
  )
}

export default App
