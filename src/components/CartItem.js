import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../contexts/ProductContext";

export const Item = styled.div`
    display: grid;
    grid-template-columns: 15rem repeat(3, 1fr);
    align-items: center;
    gap: 1rem;
    position: relative;
`;

const ItemImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

const ItemName = styled.h3`
    text-align: center;
    font-size: 1.5rem;
`;

export const ItemPrice = styled(ItemName)`
    color: #9b59b6;
    font-size: 2rem;
`;

const Quantity = styled(ItemPrice)`
    margin: 0 1rem;
`;

const ItemButton = styled.button`
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    background: #8e44ad;
    color: white;

    &:hover {
        background: #9b59b6;
    }
`;

const Remove = styled(ItemButton)`
    border-radius: 50%;
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -1rem;
`;

const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export default function CartItem({
    details: { img, title, count, price, id },
}) {
    const { dispatch } = useContext(ProductContext);

    return (
        <Item>
            <ItemImg src={img} alt={title + "photo"} />
            <ItemName>{title}</ItemName>
            <ItemPrice>${price * count}.00</ItemPrice>
            <Buttons>
                <ItemButton
                    onClick={() => {
                        if (count - 1 === 0) {
                            dispatch({ type: "TOGGLE_CART", id });
                        } else {
                            dispatch({ type: "SUBTRACT_COUNT", id });
                            dispatch({ type: "COMPUTE_TOTAL" });
                        }
                    }}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </ItemButton>
                <Quantity>{count}</Quantity>
                <ItemButton
                    onClick={() => {
                        dispatch({ type: "ADD_COUNT", id });
                        dispatch({ type: "COMPUTE_TOTAL" });
                    }}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </ItemButton>
            </Buttons>

            <Remove onClick={() => dispatch({ type: "TOGGLE_CART", id })}>
                <FontAwesomeIcon icon={faTrash} />
            </Remove>
        </Item>
    );
}
