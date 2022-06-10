import arrowDown from '../../assets/images/arrow-down.svg'
import './MyOrders.scss'

const MyOrders = () => {
    const items = [
        {id: 1, order: 24, price: 260, status: 'ждёт оплату'},
        {id: 2, order: 24, price: 260, status: 'ждёт оплату'},
        {id: 3, order: 24, price: 260, status: 'ждёт оплату'},
        {id: 4, order: 24, price: 260, status: 'ждёт оплату'},
        {id: 5, order: 24, price: 260, status: 'ждёт оплату'},
        {id: 6, order: 24, price: 260, status: 'ждёт оплату'},
        {id: 7, order: 24, price: 260, status: 'ждёт оплату'},
        {id: 8, order: 24, price: 260, status: 'ждёт оплату'},
    ]
    return (
        <div className="myorders__wrapper">
            {items.map(item => 
                <>
                    <div className="myorders__item" key={item.id}>
                    <img src={arrowDown} alt="arrow" className='myorders__arrow'/>

                        <div className="myorders__title">
                            <h5><strong>Заказ #{item.order}</strong> от 01/06/2022</h5>
                        </div>
                        <h5 className="myorders__price">{item.price} $</h5>
                        <div className="myorders__status orange">{item.status}</div>
                        <div className="myorders__status grey">{item.status}</div>

                    </div>
                </>

                
                        
            )}
        </div>
    )
}

export default MyOrders