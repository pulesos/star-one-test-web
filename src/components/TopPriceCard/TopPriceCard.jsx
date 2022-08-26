import quest from '../../assets/images/quest.svg'
import './TopPriceCard.scss'

import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const TopPriceCard = ({setModalActive, handleClick, products}) => {


    const {user} = UserAuth()

    return (
        <>
            {products.map(item => 
                <div className="card-wrap top__price__page" key={item.id}>
                    <div className="card card__top">
                        <a className="card-title card-title__top">
                            <h5 className="card-title__large">
                                Top Price
                                <a href="#" className="card__question">
                                    <img src={quest} height="16" alt="question"/>
                                </a>
                                <div className="answer">Подсказка</div>
                            </h5>
                            <button className="btn btn-green top__price__page">{item.priceTotal} $</button>
                        </a>
                        <div className="card-body">
                            <div className="card__label">{item.category}</div>
                            <div className="card-body__name">
                                <Link to={`/product-details/${item.id}`} className='bold'>{item.name}</Link>
                            </div>
                            <img className="card__picture" src={item.image}
                                    alt="sony"/>
                            <div className="card-body__bottom">
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

export default TopPriceCard