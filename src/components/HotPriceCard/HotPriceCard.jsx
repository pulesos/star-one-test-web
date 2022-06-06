import quest from '../../assets/images/quest.svg'
import sony from '../../assets/images/sony.png'
import './HotPriceCard.scss'

const HotPriceCard = ({items}) => {
    return (
        <>

            {items.map(item => 
                <div className="card-wrap">
                    <div className="card">
                        <div className="card-title card-title__hot">
                            <h5 className="card-title__large">
                                Hot Price
                                <a href="#" className="card__question">
                                    <img src={quest} height="16" alt="question"/>
                                </a>
                                <div className="answer">Подсказка</div>
                            </h5>
                            <button className="btn btn-green">{item.price} $</button>
                        </div>
                        <div className="card-body">
                            <div className="card__label">{item.category}</div>
                            <div className="card-body__name">
                                <a href="/card-1.html" className='bold'>{item.name}</a>
                            </div>
                            <img className="card__picture" src={sony}
                                    alt="sony"/>
                            <div className="card-body__bottom">
                                <div className="card-body__price">{item.oldPrice} $</div>
                                <button className="btn btn-dart btn-cart">
                                    <span className="icon__cart"></span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HotPriceCard