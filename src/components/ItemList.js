import React, { useContext } from "react";
import styled from "styled-components";
import Item from "./Item";
import container from "./Container";
import { ProductContext } from "../contexts/ProductContext";

const Gallery = styled(container)`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 2rem;
    place-items: center;
    padding-bottom: 4rem;
`;

export const Title = styled.h2`
    text-align: center;
    margin: 2rem 0;
    text-transform: uppercase;
    font-size: 2rem;
    letter-spacing: 2px;

    &::after {
        content: "";
        width: 100px;
        height: 5px;
        background-color: #8e44ad;
        display: block;
        margin: 1rem auto;
    }
`;

export default function ItemList() {
    const { state } = useContext(ProductContext);

    return (
        <React.Fragment>
            <Title>Available Phones</Title>
            <Gallery>
                {state.allProducts.map((item) => (
                    <Item details={item} key={item.id} />
                ))}
            </Gallery>
        </React.Fragment>
    );
}
