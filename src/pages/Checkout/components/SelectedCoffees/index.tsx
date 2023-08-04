import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeCheckoutCard } from "../CoffeeCheckoutCard";
import { ConfirmationAndTotalSection } from "./ConfirmationAndTotal";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    const { cartItems } = useCart()

    return (
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés Selecionados
            </TitleText> 

            <DetailsContainer>
                {cartItems.map(item => (
                    <CoffeCheckoutCard key={item.id} coffee={item} />
                ))}
            
                <ConfirmationAndTotalSection />
            </DetailsContainer>
        </SelectedCoffeesContainer>
    )
}