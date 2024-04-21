import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/logo.svg'
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navbar.styles.scss'

const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

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
                  <span className='nav-link' onClick={signOutHandler}>Sign Out</span>
                ) : (
                  <Link className='nav-link' to={'/auth'}>
                      Sign In
                  </Link>
                )}
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default NavBar;
