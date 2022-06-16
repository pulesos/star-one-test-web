import './Menu.scss'
import close from '../../../../assets/images/close-white.svg'
import { Link } from 'react-router-dom'

const Menu = ({publicItems, privateItems, active, setActive, handleLoggedOut, loggedIn, handleLoggedIn}) => {
    return (  
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <img src={close} className={active ? 'btn__close active' : 'btn__close'} alt="close" onClick={() => setActive(false)}/>
            <div className="menu__content">
                {loggedIn ?
                        <ul>
                            {privateItems.map(privateItem =>
                                <li key={privateItem.id}>
                                    <Link to={privateItem.href}>{privateItem.value}</Link>
                                </li>
                            )}
                                <div className='exit' onClick={handleLoggedOut}>Выход</div>
                        </ul>
                    :
                        <ul>
                            {publicItems.map(publicItem =>
                                <li key={publicItem.id}>
                                    <Link to={publicItem.href}>{publicItem.value}</Link>
                                </li>
                            )}
                                <div className='exit' onClick={handleLoggedIn}>Войти</div>

                        </ul>
                }
            </div>
        </div>
    )
}

export default Menu