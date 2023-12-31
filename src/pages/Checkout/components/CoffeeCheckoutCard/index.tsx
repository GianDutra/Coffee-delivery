import { Trash } from "phosphor-react"
import { QuantityInput } from "../../../../components/AddOrRemove"
import { RegularText } from "../../../../components/Typography"
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles"
import { CartItem } from "../../../../contexts/CartContext"
import { formatCurrency } from "../../../../utils/formatCurrency"
import { useCart } from "../../../../hooks/useCart"

interface CoffeeCartCardProps {
    coffee: CartItem
}

export function CoffeCheckoutCard({ coffee }: CoffeeCartCardProps) {
    const { changeCartItemQuantity, removeCartItem } = useCart()

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase")
    }

    function handleDecrease() {
        if (coffee.quantity === 1) {
          removeCartItem(coffee.id);
        } else {
          changeCartItemQuantity(coffee.id, "decrease");
        }
      }

    function handleRemove() {
        removeCartItem(coffee.id)
    }

    const coffeeTotal = coffee.price * coffee.quantity
    const formattedPrice = formatCurrency(coffeeTotal)

    return (
        <CoffeeCartCardContainer>
        <div>
            <img src={`/coffees/${coffee.photo}`}/>
        <div>
            <RegularText color="subtitle">{coffee.name}</RegularText>
            <ActionsContainer>
                <QuantityInput size="small" onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={coffee.quantity}/>
                <RemoveButton onClick={handleRemove}>
                    <Trash size={16} />
                    REMOVER
                </RemoveButton>
            </ActionsContainer>
            </div>
        </div>
        <p> {formattedPrice} </p>
        </CoffeeCartCardContainer>
    )
}