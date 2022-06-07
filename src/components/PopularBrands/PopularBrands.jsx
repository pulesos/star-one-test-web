import Brands from './Brands/Brands'
import brand from '../../assets/images/brand.svg'
import './PopularBrands.scss'

const PopularBrands = () => {
    const items = [
        {brand: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png'},
        {brand: 'https://static.cdnlogo.com/logos/p/43/ps5-8211-playstation-5.png'},
    ]
    
    return (

        <section className='popular__brands'>
            <h3 className="events__title">
                <img className="mr-2" src={brand} alt="top events" width="28" height="28" />
                <span>Популярные бренды</span>
                <button className="btn events1 btn-white">Бренды</button>
            </h3>
            <Brands items={items}/>
        </section>
        
    )
}

export default PopularBrands