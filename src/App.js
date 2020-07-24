import React from "react";
import { storeProducts as allProducts } from "./data";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import ItemList from "./components/ItemList";
import ProductContextProvider from "./contexts/ProductContext";
import Cart from "./components/Cart";
import "./resets.css";
import Modal from "./components/Modal";

export default function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ProductContextProvider>
                <Nav />
                <Modal/>
                    <Switch>
                        <Route exact path="/" component={ItemList} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </ProductContextProvider>
            </BrowserRouter>
        </React.Fragment>
    );
}
