import { TitleText } from "../../../../components/Typography";
import { CoffeCheckoutCard } from "../CoffeeCheckoutCard";
import { ConfirmationAndTotalSection } from "./ConfirmationAndTotal";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés Selecionados
            </TitleText> 

            <DetailsContainer>
                <CoffeCheckoutCard />
                <CoffeCheckoutCard />
                <CoffeCheckoutCard />

                <ConfirmationAndTotalSection />
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}