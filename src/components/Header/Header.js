import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../StateProvder/Stateprovider';
import { auth } from '../../firebase';

const Header = () => {
    const [{ basket , user }, dispatch] = useStateValue();

    const handleAuthenticate = () =>{
        if(user){
          auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className='header_logo'
                    src="./Images/amazon-logo.png"
                    alt='logo'
                />
            </Link>
            <div className='header_search'>
                <input
                    type="text"
                    className='header_searchInput'
                />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                        {/* if there was no user only then we will navigate to login page */}
                <Link to={!user && '/login'}> 
                <div onClick={handleAuthenticate} className='header_option'>
                    <span className='header_optionLineOne'>Hello Guest</span>
                    <span className='header_optionLineTwo'>{user ? 'Sign Out': 'Sign In'}</span>
                </div>
                </Link>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header
