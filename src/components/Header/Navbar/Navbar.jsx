import { useState } from 'react';
import Menu from './Menu/Menu';
import './Navbar.scss'

function Navbar() {
    const [menuActive, setMenuActive] = useState(false)
  
    const items = [
      {id: 1, value: 'Главная', href: '/'},
      {id: 2, value: 'Пополнение ходов', href: '/products/buy-credit'},
      {id: 3, value: 'Hot Price', href: '/hotprice'},
      {id: 4, value: 'Top Price', href: '/topprice'},
      {id: 5, value: 'Категории', href: '/products'},
      {id: 6, value: 'Архив событий', href: '/events/archive'},
      {id: 7, value: 'Победители', href: '/events/winners'},
      {id: 8, value: 'О нас', href: '/company'},
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