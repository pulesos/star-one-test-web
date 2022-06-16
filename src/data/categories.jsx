import {v4} from 'uuid'
import sony from '../assets/images/sony.png'
import headphones from '../assets/images/headphones.svg'
import smartphones from '../assets/images/smartphones.svg'
import coin1 from '../assets/images/coin1.jpg'


const categories = [
    {id: v4(), priceTotal: 252, image: sony, category: 'КОНСОЛИ', name: 'Sony PlayStation 5 Digital Edition', oldPrice: 1150},
    {id: v4(), priceTotal: 254, image: headphones, category: 'НАУШНИКИ', name: 'Apple AirPods Pro', oldPrice: 260},
    {id: v4(), priceTotal: 258, image: smartphones, category: 'СМАРТФОНЫ', name: 'Apple iPhone 13 Pro Max 256 Gb', oldPrice: 1200},
    {id: v4(), priceTotal: 496, image: coin1, category: 'ONE STAR', name: '500 Stars', oldPrice: 450},
]

export default categories