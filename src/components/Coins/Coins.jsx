import {v4} from 'uuid'
import coin500 from '../../assets/images/coin500.jpg'
import coin25 from '../../assets/images/coin25.jpg'
import coin250 from '../../assets/images/coin250.jpg'
import coin50 from '../../assets/images/coin50.jpg'
import coin1 from '../../assets/images/coin1.jpg'
import coin5 from '../../assets/images/coin5.jpg'
import coin10 from '../../assets/images/coin10.jpg'
import coin100 from '../../assets/images/coin100.jpg'
import ProductDataService from '../../services/productServices'
import './Coins.scss'
import { UserAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'

const Coins = ({setModalActive, handleClick}) => {

    const [coins, setCoins] = useState([])

    useEffect(() => {
        getCoins()
      }, [])
    
      const getCoins = async() => {
        const data = await ProductDataService.getCoins()
        setCoins(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
 
    const {user} = UserAuth()
    return (
        <>
            <div className="coin__wrapper">
                {coins.map(item => 
                    <div className="card__coin" key={item.id}>
                        <div className="card-stars">{item.name}</div>
                        <div className="card-body__coin">
                            <img className="card__picture__coin" src={item.image} height="170" alt={item.stars} />
                        </div>
                        <div className="mt-md-4 mt-0 d-flex justify-content-between align-items-center">
                            <div className="card-body__price__coin bold">{item.priceTotal} $</div>
                        </div>
                        {user ?
                            <button className="btn btn-dart btn-cart-coin" onClick={() => handleClick(item)}>
                                <span className="icon__cart"></span>
                            </button>
                            :
                            <button className="btn btn-dart btn-cart-coin" onClick={() => setModalActive(true)}>
                                <span className="icon__cart"></span>
                            </button>
                        }

                    </div>                    
                )}
            </div>
        </>
    )
}

export default Coins