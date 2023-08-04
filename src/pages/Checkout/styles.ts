import { styled, css } from "styled-components";

export const CheckoutPageContainer = styled.form`
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding-left: 2rem;
      overflow-x: hidden;
    }
`
export const CheckoutPageEmptyContainer = styled.form`
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding-left: 2rem;
      overflow-x: hidden;
      max-width: 22rem; 
    }
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;

`;

interface EmptyCheckoutProps {
  variant: "purple" | "yellow";
}

export const EmptyCheckout = styled.div<EmptyCheckoutProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  display: 100%;

    
  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
        svg {
            color: ${theme.colors["brand-purple"]};
        }
      
    `}

  & :first-child {
    color: ${(props) => props.theme["gray-600"]};
  }

  
  a {
    margin-top: 2rem;
    text-decoration: none;
    display: block;
    padding: 0.75rem 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["yellow-500"]};
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme["yellow-700"]};
    }
  }
`;