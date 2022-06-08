import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderItem.scss'
import prev from '../../../assets/images/prev.svg'
import next from '../../../assets/images/next.svg'
import smartphones from '../../../assets/images/smartphones.svg'
import tablets from '../../../assets/images/tablets.svg'
import steamcards from '../../../assets/images/steamcards.svg'
import playstation5 from '../../../assets/images/playstation-5.svg'
import camera from '../../../assets/images/camera.svg'
import coffeemaschine from '../../../assets/images/coffeemaschine.svg'
import notebook from '../../../assets/images/notebook.svg'
import computer from '../../../assets/images/computer.svg'
import headphones from '../../../assets/images/headphones.svg'

import { useRef } from "react";


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

  const items = [
    {
      imageSrc:tablets, title: 'Планшеты'
    },
    {
      imageSrc: computer, title: 'Компьютеры'
    },
    {
      imageSrc: playstation5, title: 'Консоли'
    },
    {
      imageSrc: camera, title: 'Фото и видео'
    },
    {
      imageSrc: coffeemaschine, title: 'Техника'
    },
    {
      imageSrc: steamcards, title: 'Игровой контент'
    },
    {
      imageSrc: notebook, title: 'Ноутбуки'
    },
    {
      imageSrc: smartphones, title: 'Смартфоны'
    },
    {
      imageSrc: headphones, title: 'Наушники'
    },
    {
      imageSrc: steamcards, title: 'Steam'
    },
    {
      imageSrc:steamcards, title: 'Стиральные машины'
    },
    {
      imageSrc: coffeemaschine, title: 'Кофемашины'
    },
    {
      imageSrc:headphones, title: 'Холодильники'
    },
  ]
    return (
      <div className='slider'>
        <div className="arrows">
        <button className="prevArrow" onClick={() => slider?.current?.slickPrev()}><img src={prev} alt='prev'/></button>
        <button className="nextArrow" onClick={() => slider?.current?.slickNext()}><img src={next} alt='next'/></button>
        </div>
        <Slider ref={slider} {...settings}>
          {items.map((item, index) => (
            <a className="slider__content" href='#' key={index}>
              <h2 className="slider__title">{item.title}</h2>
              <img className="slider__img" alt={item.title} src={item.imageSrc} />
            </a>
          ))}
        </Slider>
      </div>
    )
}

export default SliderItem