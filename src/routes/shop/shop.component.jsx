import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';

import './shop.styles.scss';

const Shop = () => {
  // to fetch the category map array to display
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async () => {
       const categoryMap = await getCategoriesAndDocuments('categories');
       dispatch(setCategoriesMap(categoryMap));
    }
    getCategoryMap();
  }, [dispatch]);

    return (
        <Routes>
          <Route index element={<CategoriesPreview />} />
          <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;
