import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quest from '../../../assets/images/quest.svg'

import './HotPriceCard.scss'
import { UserAuth } from '../../../context/AuthContext';
import { useEffect, useState } from 'react';
import ProductDataService from '../../../services/productServices'


const HotPriceCard = ({setModalActive, handleClick, loggedIn, products}) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const {user} = UserAuth()



    //   const [products, setProducts] = useState([])

    //   useEffect(() => {
    //     getProducts()
    //   }, [])
    
    //   const getProducts = async() => {
    //     const data = await ProductDataService.getAllProducts()
    //     setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    // }
    


    return (
        <>  
            <Slider {...settings}>
                {products.map(item => 
                    <div className="card-wrap" key={item.id}>
                        <div className="card">
                            <a className="card-title card-title__hot">
                                <h5 className="card-title__large">
                                    Hot Price
                                    <a href="#" className="card__question">
                                        <img src={quest} height="16" alt="question"/>
                                    </a>
                                    <div className="answer">Подсказка</div>
                                </h5>
                                <button className="btn btn-green">{item.priceTotal} $</button>
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
            </Slider>
        </>
    )
}

export default HotPriceCard