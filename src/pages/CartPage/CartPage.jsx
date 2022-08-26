import CartItem from '../../components/CartItem/CartItem'
import Saldo from '../../components/CartItem/Saldo/Saldo'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod'
import cartImage from '../../assets/images/cart.svg'
import product from '../../assets/images/product.svg'
import './CartPage.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'

const CartPage = ({list, setList}) => {

    const [total, setTotal] = useState({
        price: list.reduce((prev, curr) => { return prev + curr.priceTotal}, 0)
    })

    useEffect(() => {
        setTotal({
            price: list.reduce((prev, curr) => { return prev + curr.priceTotal}, 0)
        })
    }, [list])

    const deleteProduct = async(id) => {
        await deleteDoc(doc(db, 'cart_products', id))
        setList((list) => list.filter((product) => id !== product.id))
    }


    const products = list.map((product) => {
        return <CartItem product={product} key={product.id} deleteProduct={deleteProduct}/>
    })

    return (
        <section className="cart__page">
            <h3 className="events__title cart__page">
                <img className="mr-2" src={cartImage} alt="cart" width="28" height="28" />
                <span>Корзина</span>
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