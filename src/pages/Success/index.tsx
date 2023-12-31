import { RegularText, TitleText } from "../../components/Typography"
import { SuccessContainer, SuccessDetailsContainer } from "./styles"
import successImage from "../../assets/success.svg"
import { TextWithIcon } from "../../components/TextWithIcon"
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { ConfirmOrderFormData } from "../Checkout";
import { paymentOptions } from "../Checkout/components/CheckoutForm/PaymentMethodOptions";
import { useEffect } from "react";

interface LocationType {
    state: ConfirmOrderFormData
}

export function SucessPage() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

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
                            Entrega em <strong>{state.street}, {state.number}</strong>
                            <br />
                            {state.district} - {state.city}, {state.uf}
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
                            <strong>{paymentOptions[state.paymentMethod].label}</strong>
                        </RegularText>
                    }
                />
                
            </SuccessDetailsContainer>
            <img src={successImage} />
        </section>
    </SuccessContainer>    
  )
}