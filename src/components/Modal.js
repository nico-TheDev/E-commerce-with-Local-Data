import React, { useState } from "react";
import styled from "styled-components";

const Modal = styled.div`
    position: fixed;
    width: max-content;
    background: ${(props) => props.color};
    padding: 1rem 2rem;
    color: white;
    transform: ${(props) =>
        props.isOpen
            ? "scale(1) translateX(-50%)"
            : "scale(0) translateX(-50%)"};
    font-size: 1.5rem;
    text-align: center;
    left: 50%;
`;

export default function () {
    const [open, setOpen] = useState(false);

    return (
        <Modal isOpen={false} color={"limegreen"}>
            Added to Cart
        </Modal>
    );
}
