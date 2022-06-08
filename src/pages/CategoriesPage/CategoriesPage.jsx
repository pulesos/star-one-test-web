import categories from '../../assets/images/all-categories.svg'
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

const CategoriesPage = () => {
  const items = [
    {
      imageSrc:tablets, title: 'Планшеты'
    },
    {
      imageSrc: computer, title: 'Компьютеры'
    },
    {
      imageSrc: playstation5, title: 'Консоли'
    },
    {
      imageSrc: camera, title: 'Фото и видео'
    },
    {
      imageSrc: coffeemaschine, title: 'Техника'
    },
    {
      imageSrc: steamcards, title: 'Игровой контент'
    },
    {
      imageSrc: notebook, title: 'Ноутбуки'
    },
    {
      imageSrc: smartphones, title: 'Смартфоны'
    },
    {
      imageSrc: headphones, title: 'Наушники'
    },
    {
      imageSrc: steamcards, title: 'Steam'
    },
    {
      imageSrc:steamcards, title: 'Стиральные машины'
    },
    {
      imageSrc: coffeemaschine, title: 'Кофемашины'
    },
    {
      imageSrc:headphones, title: 'Холодильники'
    },
  ]
    return (
        <section className='popular__categories'>
            <h3 className="events__title">
                <img className="mr-2" src={categories} alt="top events" width="28" height="28" />
                <span>Категории товаров</span>
            </h3>
            <div className="categories__wrapper">
                {items.map((item, index) => (
                    <a className="categories__content" href='#' key={index}>
                        <h2 className="categories__title">{item.title}</h2>
                        <img className="categories__img" alt={item.title} src={item.imageSrc} />
                    </a>
                ))}
            </div>
        </section>
    )
}

export default CategoriesPage