import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { HashRouter } from 'react-router-dom'
import { Router } from "./Routes";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HashRouter>
        <Router />
      </HashRouter>
    </ThemeProvider> 
  )
}

export default App
