import React from "react";
import axios from "axios";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState, setValue } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  const handleCepBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const cep = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos do CEP

    if (cep.length !== 8) return; // Verifica se o CEP tem 8 dígitos

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data) {
        // Atualiza os campos com os dados do endereço
        setValue("street", response.data.logradouro);
        setValue("district", response.data.bairro);
        setValue("city", response.data.localidade);
        setValue("uf", response.data.uf);
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        onBlur={handleCepBlur} // Adiciona o evento onBlur para buscar o CEP
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        type="number"
        placeholder="Número"
        className="house_number"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input 
        placeholder="Bairro" 
        className="neighborhood"
        {...register("district")}
        error={errors.district?.message} 
      />
      <Input 
        placeholder="Cidade" 
        className="city" 
        {...register("city")}
        error={errors.city?.message}
      />
      <Input 
        placeholder="UF"
        className="uf"
        {...register("uf")} 
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  );
}
