import { useState } from 'react'
import arrowDown from '../../assets/images/arrow-down.svg'
import './MyOrders.scss'

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState({
        dataType: [
            {id: 1, order: 24, price: 260, status: 'ждёт оплату', toggled: false},
            {id: 2, order: 24, price: 260, status: 'ждёт оплату', toggled: false},
            {id: 3, order: 24, price: 260, status: 'ждёт оплату', toggled: false},
            {id: 4, order: 24, price: 260, status: 'ждёт оплату', toggled: false},
            {id: 5, order: 24, price: 260, status: 'ждёт оплату', toggled: false},
            {id: 6, order: 24, price: 260, status: 'ждёт оплату', toggled: false},
            {id: 7, order: 24, price: 260, status: 'ждёт оплату', toggled: false},
            {id: 8, order: 24, price: 260, status: 'ждёт оплату', toggled: false},
        ]
    })

    const toggleActive = (index) => {
        let arrayCopy = [...myOrders.dataType];
        arrayCopy[index].toggled = !arrayCopy[index].toggled;
        setMyOrders({...myOrders, dataType: arrayCopy});
    }


    const toggleActiveStyles = (index) => {
        if (myOrders.dataType[index].toggled) {
          return 'myorders__info.active'
        } else {
          return 'myorders__info'
        }
    }

    
    return (
        <div className="myorders__wrapper">
            {myOrders.dataType.map((item, index) => (
                <>
                    <div className="myorders__item" key={index}>
                    <img src={arrowDown} alt="arrow" className='myorders__arrow' onClick={() => toggleActive(index)}/>

                        <div className="myorders__title">
                            <h5><strong>Заказ #{item.order}</strong> от 01/06/2022</h5>
                        </div>
                        
                        <h5 className="myorders__price">{item.price} $</h5>
                        <div className="myorders__status orange">{item.status}</div>
                        <div className="myorders__status grey">{item.status}</div>
                    </div>
                    <span className={toggleActiveStyles(index)} style={{color: '#8c8c8c', marginLeft: '70px'}}>INFO</span>
                </>
            ))}
        </div>
    )
}

export default MyOrders