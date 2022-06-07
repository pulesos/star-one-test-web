import './Menu.scss'
import close from '../../../../assets/images/close-white.svg'
import { Link } from 'react-router-dom'

const Menu = ({items, active, setActive}) => {
    return (  
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <img src={close} className={active ? 'btn__close active' : 'btn__close'} alt="close" onClick={() => setActive(false)}/>
            <div className="blur"></div>
            <div className="menu__content">
                <ul>
                    {items.map(item =>
                        <li>
                            <Link to={item.href}>{item.value}</Link>
                        </li>
                        
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu