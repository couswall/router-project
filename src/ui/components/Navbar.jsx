import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const { user, logout } = useContext( AuthContext );
    const navigate = useNavigate();


    const onLogout = () => {
        logout();
        navigate('/login', { replace: true } );
    }

  return (
    <>
        <header className="navbar">
            <div className="container flex">
                <h1 className="logo">
                    <Link to="/">Logo</Link>
                </h1>
            <nav>
                <ul className="flex">
                    <NavLink 
                        className={ ({isActive}) => `'' ${ isActive ? 'active' : ''}`}
                        to="/about"
                    >About
                    </NavLink>

                    <NavLink 
                        to="/contact"
                        className={ ({isActive}) => `'' ${ isActive ? 'active' : ''}`}
                    >
                        Contact
                    </NavLink>
                    
                    <li>
                        {user?.username}
                    </li>
                    <button 
                        className='btn btn-outline'
                        onClick={ onLogout }
                    >Logout
                    </button>
                </ul>
            </nav>
            </div>
        </header>
    </>
  )
}
