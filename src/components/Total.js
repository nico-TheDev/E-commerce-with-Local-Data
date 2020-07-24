import React, { useContext } from "react";
import styled from "styled-components";
import { Title } from "./Cart";
import { ItemPrice as Amount } from "./CartItem";
import { ProductContext } from "../contexts/ProductContext";

const Total = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 15vh;
    left: 0;
    padding: 1rem 5%;
    display: flex;
    justify-content: space-between;
    background: white;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.4);
    align-items: center;
`;

export default function () {
    const { state } = useContext(ProductContext);

    return (
        <Total>
            <Title>Total Amount:</Title>
            <Amount>
                $
                {state.inCart.reduce((total, item) => {
                    total += item.total;
                    return total;
                }, 0) || state.total}
                .00
            </Amount>
        </Total>
    );
}
