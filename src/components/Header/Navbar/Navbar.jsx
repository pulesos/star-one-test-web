import { useState } from 'react';
import Menu from './Menu/Menu';
import './Navbar.scss'

function Navbar() {
    const [menuActive, setMenuActive] = useState(false)
  
    const items = [
      {value: 'Главная', href: '/'},
      {value: 'Пополнение ходов', href: '/products/buy-credit'},
      {value: 'Hot Price', href: '/hotprice'},
      {value: 'Top Price', href: '/topprice'},
      {value: 'Категории', href: '/products'},
      {value: 'Архив событий', href: '/events/archive'},
      {value: 'Победители', href: '/events/winners'},
      {value: 'О нас', href: '/company'},
    ]
    return (
        <>
        <nav>
            <div className='burger__btn' onClick={() => setMenuActive(!menuActive)}>
                <span/>
            </div>
        </nav>
        <Menu items={items} active={menuActive} setActive={setMenuActive}/>
        </>
    );
  }
  
  export default Navbar;