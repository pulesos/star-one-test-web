import {Link} from 'react-router-dom'
import {v4} from 'uuid'
import sony from '../../assets/images/sony.png'
import headphones from '../../assets/images/headphones.svg'
import smartphones from '../../assets/images/smartphones.svg'
import coin1 from '../../assets/images/coin1.jpg'
import './ArchiveCard.scss'
import { UserAuth } from '../../context/AuthContext'

const ArchiveCard = ({setModalActive, handleClick, loggedIn, products}) => {

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