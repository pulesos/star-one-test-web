import molnia from '../../../assets/images/category.svg'
import './PopularCategories.scss'
import SliderItem from './SliderItem/SliderItem'

const PopularCategories = () => {
    const items = [
        {id: 1, title: 'Планшеты', picture: ''},
        {id: 2, title: 'Компьютеры', picture: ''},
        {id: 3, title: 'Консоли', picture: ''},
        {id: 4, title: 'Фото и видео', picture: ''},
        {id: 5, title: 'Техника', picture: ''},
        {id: 6, title: 'Игровой контент', picture: ''},
        {id: 7, title: 'Ноутбуки', picture: ''},
        {id: 8, title: 'Смартфоны', picture: ''},
        {id: 9, title: 'Наушники', picture: ''},
        {id: 10, title: 'Steam', picture: ''},
        {id: 11, title: 'Стиральные машины', picture: ''},
        {id: 12, title: 'Кофемашины', picture: ''},
        {id: 13, title: 'Холодильники', picture: ''}
    ]
    return (

        <section className='popular__categories'>
            <h3 className="events__title">
                <img className="mr-2" src={molnia} alt="top events" width="28" height="28" />
                <span>Популярные категории</span>
                <button className="btn events1 btn-white">Категории</button>
            </h3>
            <SliderItem/>
        </section>
        
    )
}

export default PopularCategories