import './Menu.scss'
import close from '../../../../assets/images/close-white.svg'
import { Link } from 'react-router-dom'

const Menu = ({publicItems, privateItems, active, setActive}) => {
    const user = false;
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
                        </ul>
                    :
                        <ul>
                            {publicItems.map(publicItem =>
                                <li key={publicItem.id}>
                                    <Link to={publicItem.href}>{publicItem.value}</Link>
                                </li>
                                
                            )}
                        </ul>
                }
            </div>
        </div>
    )
}

export default Menu