import Logotype from "./Logotype/Logotype"
import Navbar from './Navbar/Navbar';
import planet from '../../assets/images/planet.svg'
import star from '../../assets/images/star.svg'
import cart from '../../assets/images/cart.svg'
import money from '../../assets/images/money.svg'
import userIcon from '../../assets/images/user.svg'
import './Header.scss'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../index";
import { UserAuth } from "../../context/AuthContext";


const Header = ({setModalActive, size, name, loggedIn,  handleSignOut, handleLoggedIn}) => {

    const {user, logOut} = UserAuth()

    const handleGoogleSignOut = async() => {
        try {
            await logOut()
            console.log('You are logged out')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            {user ? 
                <>
                    <Link to='/profile' className="user" href='#'>
                        <img src={userIcon} className="user__icon" alt='user'/>
                        <span className='username'>{user.displayName || user.email || user.phoneNumber}</span>
                    </Link>
                    <Link to='/products/buy-credit' className="user__balance" href='#'>
                        <img src={money} className="money" alt='money'/>
                        <span className='balance'>500</span>
                        <img src={star} className='cart__icon' alt="planet"/>
                    </Link>

                    <Link to='/cart' className="cart" href='#'>
                        <img src={cart} alt='cart'/>
                        <span className="cart__quantity">{size}</span>
                    </Link>
                    <Navbar handleGoogleSignOut={handleGoogleSignOut} handleLoggedIn={handleLoggedIn} loggedIn={loggedIn} user={user}/>
                    <Logotype/>
                </>
                :
                <>
                    <div className="header__btn" onClick={() => setModalActive(true)}>
                        <a className="btn btn-white btn-login">
                            <span className="icon__login"></span>
                        </a>
                        
                    </div>
                    <img src={planet} className='planet__icon' alt="planet"/>
                    <Navbar loggedIn={loggedIn} handleGoogleSignOut={handleGoogleSignOut} handleLoggedIn={handleLoggedIn} user={user}/>
                    <Logotype/>
                </>
            }
        </>
    )
}

export default Header