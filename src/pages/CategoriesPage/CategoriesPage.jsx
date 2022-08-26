import {Link} from 'react-router-dom'
import categoriesPic from '../../assets/images/all-categories.svg'
import './CategoriesPage.scss'
import useAppContext from '../../context/AppContext'


const CategoriesPage = () => {
    const { categories } = useAppContext();


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