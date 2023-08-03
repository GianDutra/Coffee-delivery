import { useTheme } from "styled-components"
import { TitleText } from "../../../../components/Typography"
import { FormTitle } from "../FormTitle"
import { CheckoutFormContainer, FormSectionContainer } from "./styles"
import { MapPinLine, CurrencyDollar } from "phosphor-react"
import { AddressForm } from "./AdressForm"
import { PaymentOptions } from "./PaymentMethodOptions"

export function CheckoutForm() {
    const { colors } = useTheme();

    return(
        <CheckoutFormContainer>
            <TitleText size="xs" color="subtitle">
                Complete seu pedido
            </TitleText>

            <FormSectionContainer>
              <FormTitle 
                title="Endereço de entrega"
                subtitle="Informe o endereço onde deseja receber seu pedido"
                icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
              />

            <AddressForm />
            </FormSectionContainer>

            <FormSectionContainer>
              <FormTitle 
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
              />

            <PaymentOptions />
            </FormSectionContainer>
        </CheckoutFormContainer>
    )
}