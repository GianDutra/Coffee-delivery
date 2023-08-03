import { Trash } from "phosphor-react"
import { QuantityInput } from "../../../../components/AddOrRemove"
import { RegularText } from "../../../../components/Typography"
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles"

export function CoffeCheckoutCard() {
    return (
        <CoffeeCartCardContainer>
        <div>
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1691971200&Signature=URWcqAG0Zm4YnIijzaFsbkhV9bCXjbDXsCubnFunEGbQAvxBinNYgG3bc1yAqN3-Yy1DpivQkhIXv-S1U1wCLE~h3vbTY0z95WmwwLfC9Ij~ndtO~W03mUH9UJm9W6Hz30keqF16pdH1mCBz0nCdFCaR8SVUkpSg8BVKXNvls5Gh5AKyN9b7lrvFSMdlG9tSBVMRQu62waWvLSApJUG96VxO1AqBEgD66sZaPC1voTf4UbY6~f8739u~nkChocRqvPWdN2XnBQYVONrAk-Y4I78JUGyvua0HXlAJyZ2rRrKsdQg6FpDdAG8sbuLb3nMt6-13WFs6XP9QQfGHGXPeoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <div>
            <RegularText color="subtitle">Expresso Tradicional</RegularText>
            <ActionsContainer>
                <QuantityInput size="small" />
                <RemoveButton>
                    <Trash size={26} />
                    REMOVER
                </RemoveButton>
            </ActionsContainer>
            </div>
        </div>
        <p> R$9,90 </p>
        </CoffeeCartCardContainer>
    )
}