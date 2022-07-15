import {Link} from 'react-router-dom'
import {v4} from 'uuid'
import sony from '../../assets/images/sony.png'
import headphones from '../../assets/images/headphones.svg'
import smartphones from '../../assets/images/smartphones.svg'
import coin1 from '../../assets/images/coin1.jpg'
import './ArchiveCard.scss'
import { UserAuth } from '../../context/AuthContext'

const ArchiveCard = ({setModalActive, handleClick, loggedIn, products}) => {

    // const items = [
    //     {id: v4(), priceTotal: 252, image: sony, category: 'КОНСОЛИ', name: 'Sony PlayStation 5 Digital Edition', oldPrice: 1150},
    //     {id: v4(), priceTotal: 254, image: headphones, category: 'НАУШНИКИ', name: 'Apple AirPods Pro', oldPrice: 260},
    //     {id: v4(), priceTotal: 258, image: smartphones, category: 'СМАРТФОНЫ', name: 'Apple iPhone 13 Pro Max 256 Gb', oldPrice: 1200},
    //     {id: v4(), priceTotal: 496, image: coin1, category: 'ONE STAR', name: '500 Stars', oldPrice: 450},
    //     {id: v4(), priceTotal: 496, image: coin1, category: 'ONE STAR', name: '500 Stars', oldPrice: 450},
    //     {id: v4(), priceTotal: 258, image: smartphones, category: 'СМАРТФОНЫ', name: 'Apple iPhone 13 Pro Max 256 Gb', oldPrice: 1200},

    // ]

    const {user} = UserAuth()
    return (
        <>  
            {products.map(item => 
                <div className="card-wrap__archive" key={item.id}>
                    <div className="card__archive">
                        <a className="card-title card-title__archive">
                            <h5 className="card-title__large">
                                Завершён
                            </h5>
                            <p className="archive__price">{item.priceTotal} $</p>
                        </a>
                        <div className="card-body">
                            <div className="card__label__archive">{item.category}</div>
                            <div className="card-body__name">
                                <Link to={`/product-details/${item.id}`} className='bold'>{item.name}</Link>
                            </div>
                            <img className="card__picture" src={item.image}
                                    alt="sony"/>
                            <div className="card-body__archive__bottom">
                                <div className="card-body__price">{item.oldPrice} $</div>
                                
                                {user ?
                                    <button className="btn btn-dart btn-cart" onClick={() => handleClick(item)}>
                                        <span className="icon__cart"></span>
                                    </button>
                                    :
                                    <button className="btn btn-dart btn-cart" onClick={() => setModalActive(true)}>
                                        <span className="icon__cart"></span>
                                    </button>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ArchiveCard