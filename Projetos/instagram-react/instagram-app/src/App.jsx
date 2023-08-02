/* eslint-disable no-unused-vars */
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./style/theme"
import { Flex, Screen, Typography } from "./style"

function App() {
 

  return (
    <ThemeProvider theme={darkTheme}>
      <Screen>
        <Flex>
        <Typography> Hello World</Typography>
        <Typography> Hello World</Typography>
        </Flex>
      </Screen>
    </ThemeProvider>
  
  )
}

export default App
