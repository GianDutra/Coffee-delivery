import { styled } from "styled-components";

export const TextWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media screen and (max-width: 768px) {
        padding-right: 15px;

        > p {
            font-size: 84%;
            padding-right: 15px;
        }
    }
`;

export const IconWrapper = styled.div`
    // Manter o ícone sempre em um círculo
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; /* Adicionado */

    @media screen and (max-width: 768px) {
        margin-left: 10px;
    }
    
`;

interface IconContainerProps {
    iconBg: string;

    
}

export const IconContainer = styled.div<IconContainerProps>`
    // Tamanho do ícone
    width: 2.5rem;
    height: 2.0rem;

    @media screen and (max-width: 768px) {
        width: 1.5rem;
        height: 1.5rem;
        
    }

    background: ${({ iconBg }) => iconBg};
    color: ${({ theme }) => theme.colors["base-white"]};

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%; 

    position: relative; 
    z-index: 1; 

    ::before {
        /* Pseudo-elemento para criar o círculo em torno do ícone */
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background: ${({ iconBg }) => iconBg};
        opacity: 0.8; /* Ajuste a opacidade conforme desejado */
        z-index: -1;
    }
`;
