import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${({ theme }) => theme.colors["base-background"]};
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (max-width: 768px) {
        padding-left: 2rem;
        padding-right: 2rem;
        height: 5.5rem;

        img {
         scale: 90%;
        }
    }
`;

export const HeaderButtonsContainer = styled.div `
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media screen and (max-width: 768px) {
        gap: 0.35rem;
    }
`

interface HeaderButtonProps {
    variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps> `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

    ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
        svg {
            color: ${theme.colors["brand-purple"]};
        }
      
    `}

    @media screen and (max-width: 768px) {
        scale: 95%
    }
`