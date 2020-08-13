import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider'; //import from stateprovider recuder
import { auth } from './firebase';


//rfce => tab = all this

function Header() {
    //basically it's this
    //const [state, dispatch] = useStateValue();
    const [{basket, user}] = useStateValue();
    // console.log(basket)
    const login = () => {
        if(user) {
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            {/* logo on the left || this creates links on items */}
            <Link to='/'>
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amzn logo" />
            </Link>

            {/* search box */}
            <div className="header__search">
                <select name="choices" ClassName="header__choices" id="choices">
                    <option value="All">All</option>
                    <option value="Books">Books</option>
                    <option value="Cars">Cars</option>
                    <option value="Deals">Deals</option>
                    <option value="Movies">Movies</option>
                    <option value="Sports">Sports</option>
                    <option value="Video_Games">Video Games</option>
                </select>
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* 3 links sign in orders prime || href causes relog*/}
            <div className="header__nav">
            {/* link addition checks to see if user is logged in */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello { user?.email }</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/prime" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Try Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionsBasket">
                        <ShoppingBasketIcon />
                        <span>{basket?.length}</span>
                    </div>
                </Link>
            </div>

            {/* basket icon with number */}
        </nav>
    )
}

export default Header
