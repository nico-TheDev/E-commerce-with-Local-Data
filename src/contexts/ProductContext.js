import React,{ createContext,useReducer } from 'react';
import { storeProducts } from '../data';
import ProductReducer from '../reducer/ProductReducer';


export const ProductContext = createContext();

export default function ProductContextProvider({ children }){

    const [state,dispatch] = useReducer(ProductReducer,{
        allProducts:storeProducts.map(item => {
            item.total = item.price;
            return item;
        }),
        inCart:[],
        total:0,
    });

    return(
        <ProductContext.Provider value={{state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )

}