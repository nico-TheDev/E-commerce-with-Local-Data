import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStore } from "@fortawesome/free-solid-svg-icons";
import container from "./Container";

import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const StyledNav = styled.nav`
    background: #8e44ad;
    padding: 1.5rem 0;
    min-height: 10vh;
`;

const Container = styled(container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavPath = styled.h3`
    color: white;
    font-size: 1.5rem;
    margin-left: 1rem;
    display: grid;
    align-items: center;
    gap: 10px;
    grid-auto-flow: column;
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
    justify-content: start;
    transition: 300ms;
    text-align: center;
    width: max-content;
    border-radius: 3rem;
    position: relative;
    &:hover {
        border-color: white;
    }

    a.active h3 {
        border-color: white !important;
    }
`;

const Logo = styled.h2`
    color: white;
    font-weight: bold;
    display: grid;
    grid-auto-flow: column;
    width: max-content;
    align-items: center;
    gap: 10px;
`;

const Count = styled.span`
    display: inline-block;
    position: absolute;
    top: -5px;
    left: 25px;
    font-size: 0.7rem;
    color: #8e44ad;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    font-weight: bold;

    background: white;
`;

export default function Nav() {
    const { state } = useContext(ProductContext);

    return (
        <StyledNav>
            <Container>
                <Link to="/">
                    <Logo>
                        <FontAwesomeIcon icon={faStore} />
                        Phone Store
                    </Logo>
                </Link>

                <NavLink to="/cart">
                    <NavPath>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <Count>{state.inCart.length}</Count>
                        Cart
                    </NavPath>
                </NavLink>
            </Container>
        </StyledNav>
    );
}
