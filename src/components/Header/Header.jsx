import Logotype from "./Logotype/Logotype"
import Navbar from './Navbar/Navbar';
import planet from '../../assets/images/planet.svg'
import star from '../../assets/images/star.svg'
import cart from '../../assets/images/cart.svg'
import money from '../../assets/images/money.svg'
import userIcon from '../../assets/images/user.svg'
import './Header.scss'
import { Link } from "react-router-dom";


const Header = ({setModalActive}) => {
    const user = true
    return (
        <>
            {user ? 
                <>
                    <a className="user" href='#'>
                        <img src={userIcon} className="user__icon" alt='user'/>
                        <span className='username'>User</span>
                    </a>
                    <a className="user__balance" href='#'>
                        <img src={money} className="money" alt='money'/>
                        <span className='balance'>500</span>
                        <img src={star} className='cart__icon' alt="planet"/>
                    </a>

                    <Link to='/cart' className="cart" href='#'>
                        <img src={cart} alt='cart'/>
                        <span className="cart__quantity">0</span>
                    </Link>
                    <Navbar/>
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
                    <Navbar/>
                    <Logotype/>
                </>
            }
        </>
    )
}

export default Header