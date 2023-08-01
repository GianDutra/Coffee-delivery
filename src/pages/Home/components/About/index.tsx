import { AboutContainer, AboutContent, AboutTitle, BenefitsContainer, AboutImage, StyledRegularText } from "./styles";
import aboutImg from "../../../../assets/about-img.png"
import { TextWithIcon } from "../../../../components/TextWithIcon";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";

export function About() {
    const { colors } = useTheme();
    return(
        <AboutContainer>
            <AboutContent className="container">
            <div>
                <section>
                    <AboutTitle size="xl">
                        Encontre o café perfeito para qualquer hora do dia
                    </AboutTitle>
                    <StyledRegularText>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </StyledRegularText>
                </section>

                <BenefitsContainer>
                    <TextWithIcon 
                        iconBg={colors["brand-yellow-dark"]}
                        icon={<ShoppingCart weight="fill" />}
                        text="Compra simples e segura"
                    />
                    <TextWithIcon 
                        iconBg={colors["base-text"]}
                        icon={<Package weight="fill" />}
                        text="Embalagem mantém o café intacto"
                    />
                    <TextWithIcon 
                        iconBg={colors["brand-yellow"]}
                        icon={<Timer weight="fill" />}
                        text="Entrega rápida e rastreada"
                    />
                    <TextWithIcon 
                        iconBg={colors["brand-purple"]}
                        icon={<Coffee weight="fill" />}
                        text="O café chega fresquinho até você"
                    />
                </BenefitsContainer>
            </div>

            <AboutImage src={aboutImg} />
            </AboutContent>
        </AboutContainer>
    )
}