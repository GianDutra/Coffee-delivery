import { styled } from "styled-components";

export const PaymentMethodContainer = styled.div`
    padding: 0 1rem;
    background: ${({ theme }) => theme.colors["base-button"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    transition: 0.4s;

    @media screen and (max-width: 768px) {
    display: flex;
    gap: 0.3rem;

    p {
      font-size: 75%;
      justify-content: space-between;
      text-align: center;
    }

    svg {
      scale: 120%;
    }
    }

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  user-select: none;
`