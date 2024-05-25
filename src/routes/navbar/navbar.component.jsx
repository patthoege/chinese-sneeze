import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';

import { ReactComponent as Logo} from '../../assets/logo.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavBarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navbar.styles';

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser);
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
