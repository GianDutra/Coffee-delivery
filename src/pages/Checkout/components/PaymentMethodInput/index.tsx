import { useState, useEffect } from "react";
import { CreditCard } from "phosphor-react";
import { PaymentMethodContainer } from "./styles";

export function PaymentMethodInput() {
  const [displayText, setDisplayText] = useState("Cartão de crédito");

  useEffect(() => {
    const handleResize = () => {
      setDisplayText(window.innerWidth <= 768 ? "Crédito" : "Cartão de crédito");
    };

    handleResize(); // Executa uma vez ao carregar a página para definir o texto inicial

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PaymentMethodContainer>
      <CreditCard size={16} />
      <p>{displayText}</p>
    </PaymentMethodContainer>
  );
}
