import {v4} from 'uuid'
import quest from '../../assets/images/quest.svg'
import axios from 'axios'
import sony from '../../assets/images/sony.png'
import headphones from '../../assets/images/headphones.svg'
import smartphones from '../../assets/images/smartphones.svg'
import coin1 from '../../assets/images/coin1.jpg'
import './TopPriceCard.scss'
import { useState } from 'react'
import { useEffect } from 'react'

const TopPriceCard = ({setModalActive, handleClick, loggedIn}) => {
    const items = [
        {id: v4(), priceTotal: 252, image: sony, category: 'КОНСОЛИ', name: 'Sony PlayStation 5 Digital Edition', oldPrice: 1150},
        {id: v4(), priceTotal: 254, image: headphones, category: 'НАУШНИКИ', name: 'Apple AirPods Pro', oldPrice: 260},
        {id: v4(), priceTotal: 258, image: smartphones, category: 'СМАРТФОНЫ', name: 'Apple iPhone 13 Pro Max 256 Gb', oldPrice: 1200},
        {id: v4(), priceTotal: 496, image: coin1, category: 'ONE STAR', name: '500 Stars', oldPrice: 450},
    ]

    // const [currentEvents, setCurrentEvents] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:3001/currentEvents')
    //     .then(res => {
    //         setCurrentEvents(res.data)
    //     })
    // }, [])

    return (
        <>
            {items.map(item => 
                <div className="card-wrap" key={item.id}>
                    <div className="card">
                        <a className="card-title card-title__top">
                            <h5 className="card-title__large">
                                Top Price
                                <a href="#" className="card__question">
                                    <img src={quest} height="16" alt="question"/>
                                </a>
                                <div className="answer">Подсказка</div>
                            </h5>
                            <button className="btn btn-green">{item.title} $</button>
                        </a>
                        <div className="card-body">
                            <div className="card__label">{item.title}</div>
                            <div className="card-body__name">
                                <a href="/card-1.html" className='bold'>{item.title}</a>
                            </div>
                            <img className="card__picture" src={item.title}
                                    alt="sony"/>
                            <div className="card-body__bottom">
                                <div className="card-body__price">{item.title} $</div>
                                
                                {loggedIn ? 
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