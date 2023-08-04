import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutPageContainer, CheckoutPageEmptyContainer, EmptyCheckout, SectionBaseStyle } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { Button } from "./components/Button";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

// Definir o esquema de validação para o formulário
const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

// Obter o tipo dos dados do formulário a partir do esquema de validação
export type ConfirmOrderFormData = zod.infer<typeof confirmOrderFormValidationSchema>;

export function CheckoutPage() {
  const { cartQuantity } = useCart();
  const navigate = useNavigate();
  const { cleanCart } = useCart();

  const checkoutForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  });

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/success", {
      state: data,
    });
    cleanCart();
  }

  if (cartQuantity === 0) {
    return (
      <CheckoutPageEmptyContainer>
        <SectionBaseStyle className="container">
          <EmptyCheckout variant="purple">
            <ShoppingCart size={48} />
            <p>Seu carrinho está vazio.</p>
            <p>Gostaria de explorar nossa seleção de cafés premium?</p>
          <Button text="Ir para o catálogo" onClick={() => navigate("/")} />
        </EmptyCheckout>
      </SectionBaseStyle>
    </CheckoutPageEmptyContainer>
    );
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutPageContainer className="container" onSubmit={checkoutForm.handleSubmit(handleConfirmOrder)}>
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutPageContainer>
    </FormProvider>
  );
}