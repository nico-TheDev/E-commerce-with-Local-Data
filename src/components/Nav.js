import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

import { Link,NavLink } from 'react-router-dom';


const StyledNav = styled.nav`
  background: #8e44ad;
  padding: 1.5rem 0;
  min-height: 10vh;

  & .container {
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

export default function Nav() {
  return (
    <StyledNav>
      <div className="container">
        <Logo>
          <FontAwesomeIcon icon={faMobileAlt} />
          Store
        </Logo>

        <NavLink to=''>Products</NavLink>
        <NavLink to=''>
          <FontAwesomeIcon icon={faShoppingCart}/>
        </NavLink>
      </div>
    </StyledNav>
  );
}
