import {Link} from 'react-router-dom'
import quest from '../../assets/images/quest.svg'
import molnia from '../../assets/images/molnia.svg'
import './HotPricePage.scss'
import { UserAuth } from '../../context/AuthContext'

const HotPricePage = ({setModalActive, handleClick, products}) => {

    const {user} = UserAuth()
    return (
        <>
            <section className='popular__events'>
                <h3 className="events__title">
                    <img className="mr-2" src={molnia} alt="top events" width="28" height="28" />
                    <span>Популярные события</span>
                </h3>
                {products.map(item => 
                    <div className="card-wrap hot__price__page" key={item.id}>
                        <div className="card card__hot">
                            <a className="card-title card-title__hot">
                                <h5 className="card-title__large">
                                    Hot Price
                                    <a href="#" className="card__question">
                                        <img src={quest} height="16" alt="question"/>
                                    </a>
                                    <div className="answer">Подсказка</div>
                                </h5>
                                <button className="btn btn-green hot__price__page">{item.priceTotal} $</button>
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
            </section>
        </>
        
    )
}

export default HotPricePage