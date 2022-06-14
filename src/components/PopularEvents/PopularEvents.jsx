import {v4} from 'uuid'
import HotPriceCard from './HotPriceCard/HotPriceCard'
import molnia from '../../assets/images/molnia.svg'
import sony from '../../assets/images/sony.png'
import headphones from '../../assets/images/headphones.svg'
import smartphones from '../../assets/images/smartphones.svg'
import coin1 from '../../assets/images/coin1.jpg'
import './PopularEvents.scss'

const PopularEvents = ({setModalActive, handleClick}) => {
    const items = [
        {id: v4(), priceTotal: 252, image: sony, category: 'КОНСОЛИ', name: 'Sony PlayStation 5 Digital Edition', oldPrice: 1150},
        {id: v4(), priceTotal: 254, image: headphones, category: 'НАУШНИКИ', name: 'Apple AirPods Pro', oldPrice: 260},
        {id: v4(), priceTotal: 258, image: smartphones, category: 'СМАРТФОНЫ', name: 'Apple iPhone 13 Pro Max 256 Gb', oldPrice: 1200},
        {id: v4(), priceTotal: 496, image: coin1, category: 'ONE STAR', name: '500 Stars', oldPrice: 450},
        
    ]

    
    return (

        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={molnia} alt="top events" width="28" height="28" />
                <span>Популярные события</span>
                <button className="btn events1 btn-white">События</button>
            </h3>
            <HotPriceCard items={items} setModalActive={setModalActive} handleClick={handleClick}/>
        </section>
        
    )
}

export default PopularEvents