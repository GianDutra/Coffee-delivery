import { About } from "./components/About";
import { CoffeOptions } from "./components/CoffeeOptions";
import { HomeContainer } from "./styles";

export function HomePage() {
    return (
      <HomeContainer>
        <About />
        <CoffeOptions />
      </HomeContainer>
        )
}