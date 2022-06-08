import Brands from './Brands/Brands'
import appleLogo from '../../assets/images/apple-logo.png'
import samsungLogo from '../../assets/images/samsung-logo.svg'
import steamLogo from '../../assets/images/steam-logo.svg'
import huaweiLogo from '../../assets/images/huawei-logo.png'
import brand from '../../assets/images/brand.svg'
import './PopularBrands.scss'

const PopularBrands = () => {
    const items = [
        {id: 1, brand: appleLogo},
        {id: 2, brand: samsungLogo},
        {id: 3, brand: steamLogo},
        {id: 4, brand: huaweiLogo},
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