import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quest from '../../../assets/images/quest.svg'

import './HotPriceCard.scss'

const HotPriceCard = ({items, setModalActive, handleClick, loggedIn}) => {
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
              slidesToShow: 3,
              slidesToScroll: 3,
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

    return (
        <>  
            <Slider {...settings}>
                {items.map(item => 
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
                                    <Link to="/product-details" className='bold'>{item.name}</Link>
                                </div>
                                <img className="card__picture" src={item.image}
                                        alt="sony"/>
                                <div className="card-body__bottom">
                                    <div className="card-body__price">{item.oldPrice} $</div>

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
            </Slider>
        </>
    )
}

export default HotPriceCard