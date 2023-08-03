import { ReactNode } from "react";
import { RegularText } from "../../../../components/Typography";
import { FormTitleContainer } from "./styles";

interface FormTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function FormTitle({ title, subtitle, icon }: FormTitleProps) {
  return (
    <FormTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </FormTitleContainer>
  );
}