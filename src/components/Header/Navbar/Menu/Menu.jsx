import './Menu.scss'
import close from '../../../../assets/images/close-white.svg'
import { Link } from 'react-router-dom'

const Menu = ({publicItems, privateItems, active, setActive, handleSignOut, loggedIn, handleLoggedIn, user}) => {
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
                            {Object.keys(user).length != 0 && 
                                <div className='exit' onClick={handleSignOut}>Выход</div>
                            }
                            <div className='exit' onClick={handleSignOut}>Выход</div>

                        </ul>
                    :
                        <ul>
                            {publicItems.map(publicItem =>
                                <li key={publicItem.id}>
                                    <Link to={publicItem.href}>{publicItem.value}</Link>
                                </li>
                            )}
                            <div className='signIn' onClick={handleLoggedIn}>Войти</div>
                        </ul>
                }
                <Link to='/event'>EVENT</Link>
            </div>
        </div>
    )
}

export default Menu