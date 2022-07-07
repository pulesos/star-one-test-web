import { useState } from 'react'
import sony from '../../assets/images/sony.png'
import quest from '../../assets/images/quest.svg'
import './ProductDetailsItem.scss'
import { v4 } from 'uuid'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchOneProduct } from '../../http/productAPI'
import { useContext } from 'react'
import {Context} from '../../index'

const ProductDetailsItem = ({isActive, toggleClass}) => {
    const product = {id: v4(), priceTotal: 252, image: sony, category: 'КОНСОЛИ', name: 'Sony PlayStation 5 Digital Edition', oldPrice: 1150}
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12 мп'},
        {id: 3, title: 'Процессор', description: 'Пентиум 3'},
        {id: 4, title: 'Кол-во ядер', description: '2'},
        {id: 5, title: 'Аккумулятор', description: '4000'},
    ]

    // const [product, setProduct] = useState({info: []})
    // // const {product} = useContext(Context)
    // const {id} = useParams()

    // useEffect(() => {
    //     fetchOneProduct(id).then(data => setProduct(data))
    // })
    // // console.log(params)

    // // useEffect(() => {
    // //     fetchOneProduct(id).then(data => setProduct(data))
    // // })

    return (
        <>
        <div className="product__details__wrapper">
            <div className="product__details__data">
                <div className="product__details__image">
                    <img src={sony} alt='sony' width='300' height='300'/>
                </div>
                <div className="product__details__item__title">
                    <h5>{product.category}</h5>
                    <h2>{product.name}</h2>
                    <h5>{product.name}</h5>
                    <button className='btn btn-dart btn-cart details_large' onClick={toggleClass}>details</button>
                </div>
                <div className="price__details">
                    <div className="btn__price">{product.oldPrice} $</div>
                    <button className="btn btn-dart btn-cart details">
                        <span className="icon__cart"></span>
                    </button>
                </div>

                <div className="card__wrapper__data">
                    <div className="card" style={{height: '216px'}}>
                        <a className="card-title card-title__top" style={{height: '150px'}}>
                            <h5 className="card-title__large">
                                Top Price
                                <a href="#" className="card__question">
                                    <img src={quest} height="16" alt="question"/>
                                </a>
                                <div className="answer">Подсказка</div>
                            </h5>
                            <button className="btn btn-green">{product.priceTotal} $</button>
                        </a>
                    </div>
                    <div className="card" style={{height: '150px'}}>
                        <a className="card-title card-title__hot" style={{height: '200px'}}>
                            <h5 className="card-title__large">
                                Hot Price
                                <a href="#" className="card__question">
                                    <img src={quest} height="16" alt="question"/>
                                </a>
                                <div className="answer">Подсказка</div>
                            </h5>
                            <button className="btn btn-green">{product.priceTotal} $</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={`product__details__wrapper__descr ${isActive ? 'active' : null}`}>
            <h2>ALL DESCRIPTIONS</h2>
            {description.map(info =>
                <h5 key={info.id}>{info.title}: {info.description}</h5>
            )}
            
        </div>
        </>
    )
}

export default ProductDetailsItem