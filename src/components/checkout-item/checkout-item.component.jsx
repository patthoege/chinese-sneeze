import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { 
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart 
} from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispacth = useDispatch();
    
    const addItemHandler = () => dispacth(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispacth(removeItemFromCart(cartItems, cartItem));
    const clearItemHandler = () => dispacth(clearItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}> &#10094; </Arrow>
                <Value>  {quantity} </Value>
                <Arrow onClick={addItemHandler}> &#10095; </Arrow>
            </Quantity>
            <BaseSpan> ${price} </BaseSpan>
            <RemoveButton onClick={clearItemHandler}> &#10005; </RemoveButton>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem;
