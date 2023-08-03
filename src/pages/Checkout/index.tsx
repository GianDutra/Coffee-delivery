import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutPageContainer } from "./styles";

export function CheckoutPage() {
    return (
        <CheckoutPageContainer className="container">
           <CheckoutForm /> 
           <SelectedCoffees />
        </CheckoutPageContainer>
    )
}