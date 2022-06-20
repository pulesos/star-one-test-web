import { useState } from 'react';
import Menu from './Menu/Menu';
import './Navbar.scss'

function Navbar({handleLoggedOut, handleLoggedIn, loggedIn}) {
    const [menuActive, setMenuActive] = useState(false)
  
    const publicItems = [
      {id: 1, value: 'Главная', href: '/'},
      {id: 2, value: 'Пополнение ходов', href: '/products/buy-credit'},
      {id: 3, value: 'Hot Price', href: '/hotprice'},
      {id: 4, value: 'Top Price', href: '/topprice'},
      {id: 5, value: 'Категории', href: '/products'},
      {id: 6, value: 'Архив событий', href: '/events/archive'},
      {id: 7, value: 'О нас', href: '/company'},
    ]

    const privateItems = [
        {id: 1, value: 'Главная', href: '/'},
        {id: 2, value: 'Пополнение ходов', href: '/products/buy-credit'},
        {id: 3, value: 'Hot Price', href: '/hotprice'},
        {id: 4, value: 'Top Price', href: '/topprice'},
        {id: 5, value: 'Категории', href: '/products'},
        {id: 6, value: 'Корзина', href: '/cart'},
        {id: 7, value: 'Профиль', href: '/profile'},
        {id: 8, value: 'Мои ходы', href: '/my-turns'},
        {id: 9, value: 'Архив событий', href: '/events/archive'},
        {id: 10, value: 'Победители', href: '/events/winners'},
        {id: 11, value: 'О нас', href: '/company'},
      ]
    return (
        <>
        <nav>
            <div className='burger__btn' onClick={() => setMenuActive(!menuActive)}>
                <span/>
            </div>
        </nav>
        <Menu publicItems={publicItems} privateItems={privateItems} active={menuActive} setActive={setMenuActive} handleLoggedOut={handleLoggedOut} loggedIn={loggedIn} handleLoggedIn={handleLoggedIn}/>
        </>
    );
  }
  
  export default Navbar;