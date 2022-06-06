import molnia from '../../../assets/images/category.svg'
import './PopularCategories.scss'

const PopularCategories = () => {

    return (

        <section className='popular__categories'>
            <h3 className="events__title">
                <img className="mr-2" src={molnia} alt="top events" width="28" height="28" />
                <span>Популярные категории</span>
                <button className="btn events1 btn-white">Категории</button>
            </h3>
            
        </section>
        
    )
}

export default PopularCategories