import HotPriceCard from '../../HotPriceCard/HotPriceCard'
import molnia from '../../../assets/images/molnia.svg'
import './PopularEvents.scss'

const PopularEvents = () => {
    const items = [
        {price: 252, category: 'КОНСОЛИ', name: 'Sony PlayStation 5 Digital Edition', oldPrice: 1150},
        {price: 254, category: 'НАУШНИКИ', name: 'Apple AirPods Pro', oldPrice: 260},
        {price: 258, category: 'СМАРТФОНЫ', name: 'Apple iPhone 13 Pro Max 256 Gb', oldPrice: 1200},
        {price: 496, category: 'ONE STARS', name: '500 Stars', oldPrice: 450}
    ]

    
    return (

        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={molnia} alt="top events" width="28" height="28" />
                <span>Популярные события</span>
                <button className="btn events1 btn-white">События</button>
            </h3>
            <HotPriceCard items={items}/>
        </section>
        
    )
}

export default PopularEvents