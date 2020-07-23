import React from "react";
import styled from "styled-components";
import { storeProducts as allProducts } from "./data";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import "./resets.css";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <div>kskd</div>
      </BrowserRouter>
    </React.Fragment>
  );
}
