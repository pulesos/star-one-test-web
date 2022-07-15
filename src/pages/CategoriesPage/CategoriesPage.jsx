import {Link} from 'react-router-dom'
import categoriesPic from '../../assets/images/all-categories.svg'
import smartphones from '../../assets/images/smartphones.svg'
import tablets from '../../assets/images/tablets.svg'
import steamcards from '../../assets/images/steamcards.svg'
import playstation5 from '../../assets/images/playstation-5.svg'
import camera from '../../assets/images/camera.svg'
import coffeemaschine from '../../assets/images/coffeemaschine.svg'
import notebook from '../../assets/images/notebook.svg'
import computer from '../../assets/images/computer.svg'
import headphones from '../../assets/images/headphones.svg'
import './CategoriesPage.scss'
import { useContext } from 'react'
import { Context } from '../../index'

const CategoriesPage = () => {
    // const {product} = useContext(Context)
    const categories = [
        {id: 1,imageSrc: tablets, title: 'Планшеты'},
        {id: 2,imageSrc: computer, title: 'Компьютеры'},
        {id: 3,imageSrc: playstation5, title: 'Консоли'},
        {id: 4,imageSrc: camera, title: 'Фото и видео'},
        {id: 5,imageSrc: coffeemaschine, title: 'Техника'},
        {id: 6,imageSrc: steamcards, title: 'Игровой контент'},
        {id: 7,imageSrc: notebook, title: 'Ноутбуки'},
        {id: 8,imageSrc: smartphones, title: 'Смартфоны'},
        {id: 9,imageSrc: headphones, title: 'Наушники'},
        {id: 10,imageSrc: steamcards, title: 'Steam'},
        // {id: 11,imageSrc:steamcards, title: 'Стиральные машины'},
        // {id: 12,imageSrc: coffeemaschine, title: 'One stars'},
        // {id: 13,imageSrc:headphones, title: 'Холодильники'},
    ]
    return (
        <section className='popular__categories'>
            <h3 className="events__title">
                <img className="mr-2" src={categoriesPic} alt="top events" width="28" height="28" />
                <span>Категории товаров</span>
            </h3>
            <div className="categories__wrapper">
                {categories.map(category => (
                    <Link to={`${category.id}`} className="categories__content" key={category.id}>
                        <h2 className="categories__title">{category.title}</h2>
                        <img className="categories__img" alt={category.title} src={category.imageSrc} />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default CategoriesPage