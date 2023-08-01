import { styled } from "styled-components";
import aboutBackground from "../../../../assets/about-background.png";
import { rgba } from "polished";
import { TitleText } from "../../../../components/Typography";

export const AboutContainer = styled.section`
    width: 100%;
    height: 34rem;
    background: ${({ theme }) => `url(${aboutBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding: 2rem;
        
    }
`;

export const AboutContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
     /* Adicionado para centralizar o texto em dispositivos móveis */
    margin: 0 auto; /* Adicionado para centralizar o componente na tela */
    max-width: 800px; /* Adicionado para limitar a largura do componente em dispositivos móveis */
`;

export const AboutTitle = styled(TitleText)`
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
        font-size: 40px; /* Ajustar o tamanho do título em dispositivos móveis conforme necessário */
    }
`;


export const StyledRegularText = styled.p`
  color: #403937;
  font: normal;
  font-size: 20px;
  line-height: 130%;

  @media screen and (max-width: 768px) {
        font-size: 19px; /* Ajustar o tamanho do título em dispositivos móveis conforme necessário */
        
    }
`


export const BenefitsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;
`;

export const AboutImage = styled.img`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;


