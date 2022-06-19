import { useState } from 'react'
import sony from '../../assets/images/sony.png'
import quest from '../../assets/images/quest.svg'
import './ProductDetailsItem.scss'

const ProductDetailsItem = ({isActive, toggleClass}) => {

    return (
        <>
        <div className="product__details__wrapper">
            <div className="product__details__data">
                <div className="product__details__image">
                    <img src={sony} alt='sony' width='300' height='300'/>
                </div>
                <div className="product__details__item__title">
                    <h5>CONSOLES</h5>
                    <h2>Sony PlayStation 5 Digital Edition</h2>
                    <h5>Sony PlayStation 5 Digital Edition</h5>
                    <button className='btn btn-dart btn-cart details_large' onClick={toggleClass}>details</button>
                </div>
                <div className="price__details">
                    <div className="btn__price">1234 $</div>
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
                            <button className="btn btn-green">120 $</button>
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
                            <button className="btn btn-green">120 $</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={`product__details__wrapper__descr ${isActive ? 'active' : null}`}>
            <h2>ALL DESCRIPTIONS</h2>
            <h5>Sony PlayStation 5 Digital Edition</h5>
        </div>
        </>
    )
}

export default ProductDetailsItem