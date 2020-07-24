import React, { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../contexts/ProductContext";

const CustomItem = styled.div`
    border: 1px solid #8e44ad;
    width: 100%;
    padding: 1rem;
    text-align: center;
`;

const ItemImage = styled.img`
    width: 12rem;
    display: block;
    margin: auto;
    height: auto;
    margin-bottom: 1rem;
`;

const ItemName = styled.h3`
    margin-bottom: 1rem;
`;

const ItemPrice = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const ItemButton = styled.button`
    background: #9b59b6;
    color: white;
    display: block;
    padding: 1rem;
    width: 100%;
    font-size: 1.2rem;

    &:hover {
        background: #8e44ad;
    }
`;

export default function Item({ details: { img, title, price, inCart, id } }) {
    const { dispatch } = useContext(ProductContext);

    return (
        <CustomItem>
            <ItemImage src={img} alt="item photo" />
            <ItemName>{title}</ItemName>
            <ItemPrice>$ {price}.00</ItemPrice>
            <ItemButton
                onClick={() => {
                    dispatch({ type: "TOGGLE_CART", id });
                }}
            >
                {inCart ? "Remove from Cart" : "Add to Cart   "}
            </ItemButton>
        </CustomItem>
    );
}
