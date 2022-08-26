import { UserAuth } from '../../context/AuthContext';
import './DeliveryAddress.scss'

const DeliveryAddress = ({changeDelivery, setRecipient, setCountry, setPostCode, setTown, setStreet, setHouse, setApartment, setEmail, setPhone}) => {

    const {user} = UserAuth()

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
                {changeDelivery ?
                        <>
                        <input type="text" placeholder={user.recipient} className='form-control' onChange={(e) => setRecipient(e.target.value)}/>
                        <input type="text" placeholder={user.country} className='form-control' onChange={(e) => setCountry(e.target.value)}/>
                        <input type="text" placeholder={user.postCode} className='form-control' onChange={(e) => setPostCode(e.target.value)}/>
                        <input type="text" placeholder={user.town} className='form-control' onChange={(e) => setTown(e.target.value)}/>
                        <input type="text" placeholder={user.street} className='form-control' onChange={(e) => setStreet(e.target.value)}/>
                        <input type="text" placeholder={user.house} className='form-control' onChange={(e) => setHouse(e.target.value)}/>
                        <input type="text" placeholder={user.apartment} className='form-control' onChange={(e) => setApartment(e.target.value)}/>
                        <input type="text" placeholder={user.phone} className='form-control' onChange={(e) => setPhone(e.target.value)}/>
                        <input type="text" placeholder={user.email} className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                        </>
                        :
                        <>
                        <h2 className='address__data__text' id='address__data__text__recipient'><strong>{user.recipient}</strong></h2>
                        <h5 className='address__data__text' id='address__data__text__country'>{user.country}</h5>
                        <h5 className='address__data__text' id='address__data__text__postcode'>{user.postCode}</h5>
                        <h5 className='address__data__text' id='address__data__text__town'>{user.town}</h5>
                        <h5 className='address__data__text' id='address__data__text__street'>{user.street}</h5>
                        <h5 className='address__data__text' id='address__data__text__house'>{user.house}</h5>
                        <h5 className='address__data__text' id='address__data__text__apartment'>{user.apartment}</h5>
                        <h5 className='address__data__text' id='address__data__text__phone'>{user.phone}</h5>
                        <h5 className='address__data__text' id='address__data__text__email'>{user.email}</h5>
                        </>
                    }

                </div>
            </div>         
        </div>
    )
}

export default DeliveryAddress