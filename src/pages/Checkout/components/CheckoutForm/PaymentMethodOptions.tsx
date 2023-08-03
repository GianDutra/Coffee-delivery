import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";

export function PaymentOptions() {
    return(
        <PaymentMethodOptionsContainer>
            <PaymentMethodInput />
            <PaymentMethodInput />
            <PaymentMethodInput />
        </PaymentMethodOptionsContainer>

    )
}