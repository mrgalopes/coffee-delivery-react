import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { CoffeeProvider } from "./contexts/CoffeeContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeProvider>
        <Router />
      </CoffeeProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
