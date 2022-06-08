import quest from '../../assets/images/quest.svg'
import molnia from '../../assets/images/molnia.svg'
import sony from '../../assets/images/sony.png'
import headphones from '../../assets/images/headphones.svg'
import smartphones from '../../assets/images/smartphones.svg'
import coin1 from '../../assets/images/coin1.jpg'

const HotPricePage = ({setModalActive}) => {
    const items = [
        {id: 1, price: 252, image: sony, category: 'КОНСОЛИ', name: 'Sony PlayStation 5 Digital Edition', oldPrice: 1150},
        {id: 2, price: 254, image: headphones, category: 'НАУШНИКИ', name: 'Apple AirPods Pro', oldPrice: 260},
        {id: 3, price: 258, image: smartphones, category: 'СМАРТФОНЫ', name: 'Apple iPhone 13 Pro Max 256 Gb', oldPrice: 1200},
        {id: 4, price: 496, image: coin1, category: 'ONE STAR', name: '500 Stars', oldPrice: 450},
        
    ]
    return (
        <>
            <section className='popular__events'>
                <h3 className="events__title">
                    <img className="mr-2" src={molnia} alt="top events" width="28" height="28" />
                    <span>Популярные события</span>
                </h3>
                {items.map(item => 
                    <div className="card-wrap" key={item.id}>
                        <div className="card">
                            <a className="card-title card-title__hot">
                                <h5 className="card-title__large">
                                    Hot Price
                                    <a href="#" className="card__question">
                                        <img src={quest} height="16" alt="question"/>
                                    </a>
                                    <div className="answer">Подсказка</div>
                                </h5>
                                <button className="btn btn-green">{item.price} $</button>
                            </a>
                            <div className="card-body">
                                <div className="card__label">{item.category}</div>
                                <div className="card-body__name">
                                    <a href="/card-1.html" className='bold'>{item.name}</a>
                                </div>
                                <img className="card__picture" src={item.image}
                                        alt="sony"/>
                                <div className="card-body__bottom">
                                    <div className="card-body__price">{item.oldPrice} $</div>
                                    <button className="btn btn-dart btn-cart" onClick={() => setModalActive(true)}>
                                        <span className="icon__cart"></span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
        
    )
}

export default HotPricePage