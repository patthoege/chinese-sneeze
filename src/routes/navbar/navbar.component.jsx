import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/logo.svg'
import { UserContext } from '../../contexts/user.context';

import './navbar.styles.scss'

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

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
                <Link className='nav-link' to={'/auth'}>
                    Sign In
                </Link>
                <Link className='nav-link' to={'/'}>
                    
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default NavBar;
