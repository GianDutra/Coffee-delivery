import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";


export function AddressForm() {

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
      />
      <Input
        placeholder="Rua"
        className="street"
      />
      <Input
        type="number"
        placeholder="Número"
        className="house_number"
      />
      <Input
        placeholder="Complemento"
        className="complement"
      />
      <Input placeholder="Bairro" className="neighborhood" />
      <Input placeholder="Cidade" className="city" />
      <Input placeholder="UF" className="uf" />
     
    </AddressFormContainer>
  );
}