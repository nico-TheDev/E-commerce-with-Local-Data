import React, { useContext } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import Container from "./Container";
import { ProductContext } from "../contexts/ProductContext";
import { Title as Sub } from "./ItemList";
import { Item as Head } from "./CartItem";
import Total from "./Total";


const CartContainer = styled(Container)`
    gap: 1rem;
    display: grid;
    padding: 2rem 0 20vh 0;
`;

export const Title = styled(Sub)`
    text-transform: capitalize;

    &::after {
        display: none;
    }
`;

export default function () {
    const { state,dispatch } = useContext(ProductContext);

    const cartJsx = state.inCart.map((item) => (
        <CartItem details={item} key={item.id} />
    ));
    const cartDisplay = (
        <>
            <Head>
                <Title>Photo</Title>
                <Title>Model</Title>
                <Title>Amount</Title>
                <Title>Quantity</Title>
            </Head>
            {cartJsx}
            <Total/>
        </>
    );

    return (
        <div>
            <Sub>In Cart</Sub>

            <CartContainer>
                {state.inCart.length > 0 ? (
                    cartDisplay
                ) : (
                    <Title>Cart is Currently empty</Title>
                )}
            </CartContainer>
        </div>
    );
}
