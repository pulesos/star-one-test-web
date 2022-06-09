import CartItem from '../../components/CartItem/CartItem'
import Saldo from '../../components/CartItem/Saldo/Saldo'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod'
import cart from '../../assets/images/cart.svg'
import product from '../../assets/images/product.svg'
import './CartPage.scss'
const CartPage = () => {
    return (
        <section className="cart__page">
            <h3 className="events__title">
                <img className="mr-2" src={cart} alt="cart" width="28" height="28" />
                <span>Корзина</span>
                <label className="checkbox">
                    <input
                        type="checkbox"
                        name="selectAll"
                        value="all"
                        className='cart__input'
                    />
                    <span className='input__text'>Выбрать всё</span>
                </label>
            </h3>
            <Saldo/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            
            <h3 className="events__title events__title__pay">
                    <img className="mr-2" src={product} alt="pay" width="28" height="28" />
                    <span>Способы оплаты</span>
            </h3>
            <PaymentMethod/>
        </section>
    )
}

export default CartPage