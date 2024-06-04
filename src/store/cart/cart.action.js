import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    //if found increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => 
          cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
    }
    //return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find cartItem to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    //check if quantity is equal to 1, if it is remove item from cart
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => 
          cartItem.id !== cartItemToRemove.id 
        );
    }

    //return back cartItems with matching cart item with reduced quantity
    return cartItems.map((cartItem) => 
    cartItem.id === cartItemToRemove.id 
      ? {...cartItem, quantity: cartItem.quantity - 1 } 
      : cartItem
  );
}

const clearCartItem = (cartItems, cartItemToClear) => 
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);


const addItemToCart = (productsToAdd) => {
    const newCartItems = addCartItem(cartItems, productsToAdd);
    updateCartItemsReducer(newCartItems);
}

const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
};

const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
};

const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
};