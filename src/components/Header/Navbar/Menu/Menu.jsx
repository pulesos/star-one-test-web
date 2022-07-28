import './Menu.scss'
import close from '../../../../assets/images/close-white.svg'
import { Link } from 'react-router-dom'

const Menu = ({publicItems, privateItems, active, setActive, handleGoogleSignOut, loggedIn, handleLoggedIn, user}) => {
    return (  
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <img src={close} className={active ? 'btn__close active' : 'btn__close'} alt="close" onClick={() => setActive(false)}/>
            <div className="menu__content">
                {user ?
                        <ul>
                            {privateItems.map(privateItem =>
                                <li key={privateItem.id}>
                                    <Link to={privateItem.href}>{privateItem.value}</Link>
                                </li>
                            )}
                            {Object.keys(user).length != 0 && 
                                <div className='exit' onClick={handleGoogleSignOut}>Выход</div>
                            }
                            {/* <div className='exit' onClick={handleGoogleSignOut}>Выход</div> */}

                        </ul>
                    :
                        <ul>
                            {publicItems.map(publicItem =>
                                <li key={publicItem.id}>
                                    <Link to={publicItem.href}>{publicItem.value}</Link>
                                </li>
                            )}
                            {/* <div className='signIn' onClick={handleLoggedIn}>Войти</div> */}
                        </ul>
                }
            </div>
        </div>
    )
}

export default Menu