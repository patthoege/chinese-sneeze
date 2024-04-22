import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import { ReactComponent as Logo} from '../../assets/logo.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navbar.styles.scss'

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

    return (
      <Fragment>
        <div className='nav-bar'>
            <Link className='logo-container' to={'/'}>
                <Logo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to={'/shop'}>
                    Shop
                </Link>
                {currentUser ? (
                  <span className='nav-link' onClick={signOutUser}>
                    SIGN OUT
                  </span>
                ) : (
                  <Link className='nav-link' to='/auth'>
                    SIGN IN
                  </Link>
                )}
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default NavBar;
