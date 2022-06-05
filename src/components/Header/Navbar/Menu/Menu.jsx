import './Menu.scss'
import close from '../../../../assets/images/close-white.svg'

const Menu = ({items, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <img src={close} className={active ? 'btn__close active' : 'btn__close'} alt="close" onClick={() => setActive(false)}/>
            <div className="menu__content">
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                        
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu