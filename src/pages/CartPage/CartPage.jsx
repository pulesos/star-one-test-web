import CartItem from '../../components/CartItem/CartItem'
import Saldo from '../../components/CartItem/Saldo/Saldo'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod'
import cartImage from '../../assets/images/cart.svg'
import product from '../../assets/images/product.svg'
import './CartPage.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 } from 'uuid' 

const CartPage = ({list, setList}) => {
    // const [cart, setCart] = useState(data)

    const [total, setTotal] = useState({
        price: list.reduce((prev, curr) => { return prev + curr.priceTotal}, 0)
    })

    useEffect(() => {
        setTotal({
            price: list.reduce((prev, curr) => { return prev + curr.priceTotal}, 0)
        })
    }, [list])

    const deleteProduct = (id) => {
        setList((list) => list.filter((product) => id !== product.id))
    }

    const products = list.map((product, idx) => {
        return <CartItem product={product} key={idx} deleteProduct={deleteProduct}/>
    })

    return (
        <section className="cart__page">
            <h3 className="events__title cart__page">
                <img className="mr-2" src={cartImage} alt="cart" width="28" height="28" />
                <span>Корзина</span>
                {/* <label className="checkbox">
                    <input
                        type="checkbox"
                        name="selectAll"
                        value="all"
                        className='cart__input'
                    />
                    <span className='input__text'>Выбрать всё</span>
                </label> */}
            </h3>
            <Saldo total={total}/>
            {products}
            
            <h3 className="events__title events__title__pay">
                    <img className="mr-2" src={product} alt="pay" width="28" height="28" />
                    <span>Способы оплаты</span>
            </h3>
            <PaymentMethod/>
        </section>
    )
}

export default CartPage