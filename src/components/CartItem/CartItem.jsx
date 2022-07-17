import bin from '../../assets/images/bin.svg'
import camera from '../../assets/images/camera.svg'
import './CartItem.scss'

const CartItem = ({product, deleteProduct}) => {

    return (
        <div className="cart__item__wrapper">
            <div className="cart__info" key={product.id}>
            {/* <input type="checkbox" className='cart__checkbox'/> */}
            <img src={product.image} alt='product' className='cart__image' width='100' height='100'/>
                <div className="cart__info-block">
                    <div className="cart__category">{product.category}</div>
                    <h4 className="cart__product">
                        {product.name}
                    </h4>
                    <div className="cart__price">
                        {product.priceTotal} $
                    </div>
                </div>
                <button className="btn bin" onClick={() => {deleteProduct(product.id)}}>
                    <img src={bin} alt="bin" className='bin'/>
                </button>
            </div>
        </div>
    )
}

export default CartItem