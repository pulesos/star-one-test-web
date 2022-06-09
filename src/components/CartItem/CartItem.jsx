import bin from '../../assets/images/bin.svg'
import camera from '../../assets/images/camera.svg'
import './CartItem.scss'

const CartItem = () => {
    return (
        <div className="cart__item__wrapper">
            <div className="cart__info">
            <input type="checkbox"/>
            <img src={camera} alt='product' className='cart__image' width='100' height='100'/>
                <div className="cart__info-block">
                    <div className="cart__category">Фотоаппараты</div>
                    <h4 className="cart__product">
                        Canon
                    </h4>
                    <div className="cart__price">
                        1200 $
                    </div>
                </div>
                <button className="btn">
                    <img src={bin} alt="bin" className='bin'/>
                </button>
            </div>
        </div>
    )
}

export default CartItem