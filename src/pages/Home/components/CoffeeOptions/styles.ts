import { styled } from "styled-components";

export const CoffeeOptionsContainer = styled.section`
    width: 100%;
    margin-top: 2rem;

    
    @media screen and (max-width: 768px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`

export const CoffeList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: center;

    }
`
