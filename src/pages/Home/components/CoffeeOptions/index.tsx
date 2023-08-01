import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeList, CoffeeOptionsContainer } from "./styles";

export function CoffeOptions() {
    return (
        <CoffeeOptionsContainer className="container">
                <TitleText size="l" color="subtitle">
                    Nossos cafés
                </TitleText>   
                <CoffeList>
                    {coffees.map((coffee) => (
                        <CoffeeCard key={coffee.id} coffee={coffee} />
                    ))}
                </CoffeList>
                 
        </CoffeeOptionsContainer>
    )
}