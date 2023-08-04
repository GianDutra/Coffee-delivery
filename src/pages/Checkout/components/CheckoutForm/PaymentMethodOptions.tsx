import { PaymentMethodOptionsContainer } from "./styles";
import { CreditCard, Money, Bank } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typography";


export const paymentOptions = {
    credit: {
        label: "Cartão de Crédito",
        icon: <CreditCard size={16} />
    },
    debit: {
        label: "Cartão de Débito",
        icon: <Bank size={16} />
    },
    money: {
        label: "Dinheiro",
        icon: <Money size={16} />
    }
}

export function PaymentOptions() {
    const {
      register,
      formState: { errors },
    } = useFormContext();
  
    const paymentError = errors?.paymentMethod
      ?.message as unknown as string;
  
    return (
      <PaymentMethodOptionsContainer>
        {Object.entries(paymentOptions).map(([key, { label, icon }]) => (
          <PaymentMethodInput
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register("paymentMethod")}
          />
        ))}
  
        {paymentError && <RegularText>{paymentError}</RegularText>}
      </PaymentMethodOptionsContainer>
    );
  }