import { styled } from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CheckoutFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;
`

export const FormSectionContainer = styled(SectionBaseStyle)`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (max-width: 768px) {
    max-width: 22rem; 
    }
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media screen and (max-width: 768px) {

    

    grid-template-columns: auto;
    .cep {
    grid-column: span 3;
    max-width: 17rem;
  }

  .street {
    grid-column: span 3;
    max-width: 17rem;
  }

  .complement {
    max-width: 8rem;
  }

  .house_number {
    max-width: 8rem;
  }

  .neighborhood {
     
    max-width: 8rem;
  }

  .city {
    max-width: 4.2rem;
  }

  .uf {
    max-width: 3rem;
  }
      
    }
`;


export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`;