import coin500 from '../../assets/images/coin500.jpg'
import coin25 from '../../assets/images/coin25.jpg'
import coin250 from '../../assets/images/coin250.jpg'
import coin50 from '../../assets/images/coin50.jpg'
import coin1 from '../../assets/images/coin1.jpg'
import coin5 from '../../assets/images/coin5.jpg'
import coin10 from '../../assets/images/coin10.jpg'
import coin100 from '../../assets/images/coin100.jpg'

import './Coins.scss'

const Coins = ({setModalActive}) => {
    const items = [
        {id: 1, stars: '500 stars', image: coin500, price: 450},
        {id: 2, stars: '25 stars', image: coin25, price: 25},
        {id: 3, stars: '250 stars', image: coin250, price: 225},
        {id: 4, stars: '50 stars', image: coin50, price: 48},
        {id: 5, stars: '1 star', image: coin1, price: 1},
        {id: 6, stars: '5 star', image: coin5, price: 5},
        {id: 7, stars: '10 stars', image: coin10, price: 10},
        {id: 8, stars: '100 stars', image: coin100, price: 95},
    ]
    return (
        <>
            <div className="coin__wrapper">
                {items.map(item => 
                    <div className="card__coin" key={item.id}>
                        <div className="card-stars">{item.stars}</div>
                        <div className="card-body__coin">
                            <img className="card__picture__coin" src={item.image} height="170" alt={item.stars} />
                        </div>
                        <div className="mt-md-4 mt-0 d-flex justify-content-between align-items-center">
                            <div className="card-body__price__coin bold">{item.price} $</div>
                        </div>
                        <button className="btn btn-dart btn-cart-coin" onClick={() => setModalActive(true)}>
                            <span className="icon__cart"></span>
                        </button>
                    </div>                    
                )}
            </div>
        </>
    )
}

export default Coins