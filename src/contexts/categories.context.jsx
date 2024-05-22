import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';
// import SHOP_DATA from '../shop-data.js';


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // delete this use effect, because every time that it runs, 
    // it's going to try and set new values inside of the database
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, [])

    // to fetch the category map array to display
    useEffect(() => {
        const getCategoryMap = async () => {
           const categoryMap = await getCategoriesAndDocuments();
        //    console.log(categoryMap);
           setCategoriesMap(categoryMap);
        }

        getCategoryMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
          {children} 
        </CategoriesContext.Provider>
    );
};
