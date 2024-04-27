import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
    const { cartItems, addItemToCart } = useContext(CartContext);
    return(
        <div>
            <h1>Checkout page</h1>
            <div>
            {cartItems.map((cartItem) => {
                const {id, imageUrl, name, quantity} = cartItem;
                return (
                    <div key={id}>
                        <img src={imageUrl} alt={`${name}`} />
                        <h2>{name}</h2>
                        <span>-</span>
                        <span>{quantity}</span>
                        <span onClick={() => addItemToCart(cartItem)}>+</span>
                    </div>
                )
              })
            }
            </div>
        </div>
    )
}

export default Checkout;
