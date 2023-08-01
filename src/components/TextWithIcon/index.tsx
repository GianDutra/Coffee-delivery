import { ReactNode } from "react";
import { IconContainer, TextWithIconContainer, IconWrapper } from "./styles";

interface TextWithIconProps {
    icon: ReactNode;
    text: string | ReactNode;
    iconBg: string;
}

export function TextWithIcon({ icon, text, iconBg }: TextWithIconProps) {
    return (
        <TextWithIconContainer>
            <IconWrapper>
                <IconContainer iconBg={iconBg}>{icon}</IconContainer>
            </IconWrapper>
            {typeof text === 'string' ? <p>{text}</p> : text}
        </TextWithIconContainer>
    );
}
