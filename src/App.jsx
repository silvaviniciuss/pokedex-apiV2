import { GlobalStyle } from "@chakra-ui/react"
import { Router } from "./Router/Router"
import { GlobalState } from "./Contexts/GlobalState"

function App() {

  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  )
}

export default App
