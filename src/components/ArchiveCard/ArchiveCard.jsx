import quest from '../../assets/images/quest.svg'
import sony from '../../assets/images/sony.png'
import './ArchiveCard.scss'

const ArchiveCard = ({setModalActive}) => {

    const items = [
        {id: 1, price: 252, category: 'КОНСОЛИ', name: 'Sony PlayStation 5 Digital Edition', oldPrice: 1150},
        {id: 2, price: 254, category: 'НАУШНИКИ', name: 'Apple AirPods Pro', oldPrice: 260},
        {id: 3, price: 258, category: 'СМАРТФОНЫ', name: 'Apple iPhone 13 Pro Max 256 Gb', oldPrice: 1200},
        {id: 4, price: 496, category: 'ONE STARS', name: '500 Stars', oldPrice: 450},
        {id: 5, price: 496, category: 'ONE STARS', name: '500 Stars', oldPrice: 450}

    ]
    return (
        <>  
            {items.map(item => 
                <div className="card-wrap__archive" key={item.id}>
                    <div className="card__archive">
                        <a className="card-title card-title__archive">
                            <h5 className="card-title__large">
                                Завершён
                            </h5>
                            <p className="archive__price">{item.price} $</p>
                        </a>
                        <div className="card-body">
                            <div className="card__label__archive">{item.category}</div>
                            <div className="card-body__name">
                                <a href="/card-1.html" className='bold'>{item.name}</a>
                            </div>
                            <img className="card__picture" src={sony}
                                    alt="sony"/>
                            <div className="card-body__archive__bottom">
                                <div className="card-body__price">{item.oldPrice} $</div>
                                <button className="btn btn-dart btn-cart" onClick={() => setModalActive(true)}>
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

export default ArchiveCard