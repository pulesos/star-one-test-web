import Logotype from "./Logotype/Logotype"
import Navbar from './Navbar/Navbar';
import planet from '../../assets/images/planet.svg'
import './Header.scss'


const Header = ({setModalActive}) => {
    return (
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
    )
}

export default Header