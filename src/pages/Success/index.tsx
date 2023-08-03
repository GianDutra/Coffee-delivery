import { RegularText, TitleText } from "../../components/Typography"
import { SuccessContainer, SuccessDetailsContainer } from "./styles"
import successImage from "../../assets/success.svg"
import { TextWithIcon } from "../../components/TextWithIcon"
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

export function SucessPage() {
  const { colors } = useTheme();

  return (
    <SuccessContainer className="container">
        <div>
            <TitleText size="l">Uhu! Pedido confirmado</TitleText>
            <RegularText size="l" color="subtitle">
                Agora é só aguardar que logo o café chegará até você
            </RegularText>
        </div>

        <section>
            <SuccessDetailsContainer>
                <TextWithIcon
                    icon={<MapPin weight="fill" />}
                    iconBg={colors["brand-purple"]} 
                    text={
                        <RegularText>
                            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                            <br />
                            Farrapos - Porto Alegre, RS
                        </RegularText>
                    }
                />
                <TextWithIcon
                    icon={<Clock weight="fill" />}
                    iconBg={colors["brand-yellow"]}
                    text={
                        <RegularText>
                            Previsão de entrega
                            <br />
                            <strong>20 min - 30 min </strong>
                        </RegularText>
                    }
                />
                <TextWithIcon
                    icon={<CurrencyDollar weight="fill" />}
                    iconBg={colors["brand-yellow-dark"]} 
                    text={
                        <RegularText>
                            Pagamento na entrega
                            <br />
                            <strong>Cartão de Crédito</strong>
                        </RegularText>
                    }
                />
                
            </SuccessDetailsContainer>
            <img src={successImage} />
        </section>
    </SuccessContainer>    
  )
}