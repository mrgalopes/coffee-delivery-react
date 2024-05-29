import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { CoffeeProvider } from "./contexts/CoffeeContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </CoffeeProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
