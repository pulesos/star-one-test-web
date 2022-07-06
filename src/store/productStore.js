import {makeAutoObservable} from "mobx";
import {v4} from 'uuid'
import sony from '../assets/images/sony.png'
import coin1 from '../assets/images/coin1.jpg'
import smartphones from '../assets/images/smartphones.svg'
import tablets from '../assets/images/tablets.svg'
import steamcards from '../assets/images/steamcards.svg'
import playstation5 from '../assets/images/playstation-5.svg'
import camera from '../assets/images/camera.svg'
import coffeemaschine from '../assets/images/coffeemaschine.svg'
import notebook from '../assets/images/notebook.svg'
import computer from '../assets/images/computer.svg'
import headphones from '../assets/images/headphones.svg'

export default class ProductStore {
    constructor() {
        this._categories = [
            {id: 1,imageSrc: tablets, title: 'Планшеты'},
            {id: 2,imageSrc: computer, title: 'Компьютеры'},
            {id: 3,imageSrc: playstation5, title: 'Консоли'},
            {id: 4,imageSrc: camera, title: 'Фото и видео'},
            {id: 5,imageSrc: coffeemaschine, title: 'Техника'},
            {id: 6,imageSrc: steamcards, title: 'Игровой контент'},
            {id: 7,imageSrc: notebook, title: 'Ноутбуки'},
            {id: 8,imageSrc: smartphones, title: 'Смартфоны'},
            {id: 9,imageSrc: headphones, title: 'Наушники'},
            {id: 10,imageSrc: steamcards, title: 'Steam'}
        ]
        this._brands = [
            {id: 1, title: 'Samsung'},
            {id: 2, title: 'Apple'}
        ]
        this._products = [
            {id: v4(), priceTotal: 252, image: sony, category: 'КОНСОЛИ', name: 'Sony PlayStation 5 Digital Edition', oldPrice: 1150},
            {id: v4(), priceTotal: 254, image: headphones, category: 'НАУШНИКИ', name: 'Apple AirPods Pro', oldPrice: 260},
            {id: v4(), priceTotal: 258, image: smartphones, category: 'СМАРТФОНЫ', name: 'Apple iPhone 13 Pro Max 256 Gb', oldPrice: 1200},
            {id: v4(), priceTotal: 496, image: coin1, category: 'ONE STAR', name: '500 Stars', oldPrice: 450},
        ]
        this._selectedCategory = {}
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setBrands(brands) {
        this._brands = brands
    }

    setProducts(products) {
        this._products = products
    }

    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get categories() {
        return this._categories
    }
    get brands() {
        return this._brands
    }
    get products() {
        return this._products
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}