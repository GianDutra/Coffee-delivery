import { QuantityInput } from "../../../../components/AddOrRemove";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeeCardContent, Description, Name, Tag } from "./styles";
import { ShoppingCart } from "phosphor-react"
import {formatCurrency} from "../../../../utils/formatCurrency"

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
  }
  


interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
    const formattedPrice = formatCurrency(coffee.price)


    return (
        <CoffeeCardContent>
            <img src={`/coffees/${coffee.photo}`} />

            <Tag>
                {coffee.tags.map(tag => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}   
            </Tag>

            <Name>{coffee.name}</Name>
            <Description>
                {coffee.description}
            </Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>
            
                <AddCartWrapper>
                    <QuantityInput />
                    <button>
                        <ShoppingCart weight="fill" size={22} /> 
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContent>
    )
}