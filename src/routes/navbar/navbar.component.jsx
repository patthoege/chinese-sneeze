import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as Logo} from '../../assets/logo.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavBarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navbar.styles';

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
    return (
      <Fragment>
        <NavBarContainer>
            <LogoContainer to={'/'}>
                <Logo className='logo' />
            </LogoContainer>

            <NavLinks>
                <NavLink to={'/shop'}>
                    Shop
                </NavLink>
                {currentUser ? (
                  <NavLink as='span' onClick={signOutUser}>
                    SIGN OUT
                  </NavLink>
                ) : (
                  <NavLink to='/auth'>
                    SIGN IN
                  </NavLink>
                )}
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavBarContainer>
        <Outlet />
      </Fragment>
    )
  }

export default NavBar;
