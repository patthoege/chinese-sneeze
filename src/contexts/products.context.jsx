import { createContext, useEffect, useState } from 'react';

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';

// import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({ products: []});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // delete this use effect, because every time that it runs, 
    // it's going to try and set new values inside of the database
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    const value = {products};
    return(
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    )
}
