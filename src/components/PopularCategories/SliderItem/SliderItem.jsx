import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderItem.scss'
import prev from '../../../assets/images/prev.svg'
import next from '../../../assets/images/next.svg'
import { useRef } from "react";
import useAppContext from "../../../context/AppContext";
import { Link } from "react-router-dom";


const SliderItem = (props) => {

  const slider = useRef(null);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  const { categories, products } = useAppContext();

    return (
      <div className='slider'>
        <div className="arrows">
        <button className="prevArrow" onClick={() => slider?.current?.slickPrev()}><img src={prev} alt='prev'/></button>
        <button className="nextArrow" onClick={() => slider?.current?.slickNext()}><img src={next} alt='next'/></button>
        </div>
        <Slider ref={slider} {...settings}>
          {categories.map((category, index) => (
            <Link to={`products/${category.id}`} className="slider__content" key={index}>
              <h2 className="slider__title">{category.title}</h2>
              <img className="slider__img" alt={category.title} src={category.imageSrc} />
            </Link>
          ))}
        </Slider>
      </div>
    )
}

export default SliderItem