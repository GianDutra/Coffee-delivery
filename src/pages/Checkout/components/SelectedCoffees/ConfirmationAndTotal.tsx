import { RegularText } from "../../../../components/Typography";
import { Button } from "../../components/Button";
import { ConfirmationAndTotalSectionContainer } from "./styles";

export function ConfirmationAndTotalSection() {
    return(
        <ConfirmationAndTotalSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$ 29,70</RegularText>
            </div>
            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText>R$ 3,00</RegularText>
            </div>
            <div>
                <RegularText weight="700" color="subtitle" size="l">Total</RegularText>
                <RegularText weight="700" color="subtitle" size="l">R$ 32,70</RegularText>
            </div>

            <Button text="Confirmar Pedido" />
        </ConfirmationAndTotalSectionContainer>
    )
}