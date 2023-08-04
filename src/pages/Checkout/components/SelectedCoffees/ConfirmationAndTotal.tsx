import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { Button } from "../../components/Button";
import { ConfirmationAndTotalSectionContainer } from "./styles";

const DELIVERY_PRICE = 5.5;

export function ConfirmationAndTotalSection() {
    const { cartItemsTotal, cartQuantity } = useCart()
    const cartTotal = DELIVERY_PRICE + cartItemsTotal;

    const formattedItemsTotal = formatCurrency(cartItemsTotal)
    const formattedCartTotal = formatCurrency(cartTotal)
    const formattedDeliveryPrice = formatCurrency(DELIVERY_PRICE)


    return(
        <ConfirmationAndTotalSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$ {formattedItemsTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText>R$ {formattedDeliveryPrice}</RegularText>
            </div>
            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
                <RegularText weight="700" color="subtitle" size="l">R$ {formattedCartTotal}</RegularText>
            </div>

            <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} type="submit"/>
        </ConfirmationAndTotalSectionContainer>
    )
}