import {Link} from 'react-router-dom'
import molnia from '../../assets/images/category.svg'
import './PopularCategories.scss'
import SliderItem from './SliderItem/SliderItem'

const PopularCategories = () => {

    return (

        <section className='popular__categories'>
            <h3 className="events__title">
                <img className="mr-2" src={molnia} alt="top events" width="28" height="28" />
                <span>Популярные категории</span>
                <Link to='/products'><button className="btn events1 btn-white">Категории</button></Link> 
            </h3>
            <SliderItem/>
        </section>
        
    )
}

export default PopularCategories