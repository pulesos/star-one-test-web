
import './DeliveryAddress.scss'
const DeliveryAddress = () => {
    return (
        <div className="address__wrapper">
            <div className="profile__item">
                <div className="address__title">
                    <h5 className='address__title__data'>Получатель</h5>
                    <h5 className='address__title__data'>Страна</h5>
                    <h5 className='address__title__data'>Индекс</h5>
                    <h5 className='address__title__data'>Город</h5>
                    <h5 className='address__title__data'>Улица</h5>
                    <h5 className='address__title__data'>Дом</h5>
                    <h5 className='address__title__data'>Квартира</h5>
                    <h5 className='address__title__data'>Телефон</h5>
                    <h5 className='address__title__data'>Эл. почта</h5>
                </div>
                <div className="address__input">
                    <input type="text" placeholder='recipient' className='form-control'/>
                    <input type="text" placeholder='country' className='form-control'/>
                    <input type="text" placeholder='post code' className='form-control'/>
                    <input type="text" placeholder='town' className='form-control'/>
                    <input type="text" placeholder='street' className='form-control'/>
                    <input type="text" placeholder='house' className='form-control'/>
                    <input type="text" placeholder='apartment' className='form-control'/>
                    <input type="text" placeholder='phone' className='form-control'/>
                    <input type="text" placeholder='email' className='form-control'/>

                </div>
            </div>         
        </div>
    )
}

export default DeliveryAddress