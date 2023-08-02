/* eslint-disable no-unused-vars */
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./style/theme"
import { Screen} from "./style"
import { NavBar } from "./components/navbar"

function App() {
 

  return (
    <ThemeProvider theme={darkTheme}>
      <Screen>
        <NavBar/>
      </Screen>
    </ThemeProvider>
  
  )
}

export default App
