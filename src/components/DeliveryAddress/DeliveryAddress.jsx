import { UserAuth } from '../../context/AuthContext';
import { useUserData } from '../../hooks/useUserData';
import './DeliveryAddress.scss'

const DeliveryAddress = ({changeDelivery, setRecipient, setCountry, setPostCode, setTown, setStreet, setHouse, setApartment, setEmail, setPhone}) => {

    const {user} = UserAuth()

    const { isLoading, userData } = useUserData(user.uid);
    if (isLoading) {
     return <span>Loading...</span>;
    }
    if (!userData) {
     return <span>Ooops. Profile not found</span>;
    }

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
                        <input type="text" placeholder={userData.recipient} className='form-control' onChange={(e) => setRecipient(e.target.value)}/>
                        <input type="text" placeholder={userData.country} className='form-control' onChange={(e) => setCountry(e.target.value)}/>
                        <input type="text" placeholder={userData.postCode} className='form-control' onChange={(e) => setPostCode(e.target.value)}/>
                        <input type="text" placeholder={userData.town} className='form-control' onChange={(e) => setTown(e.target.value)}/>
                        <input type="text" placeholder={userData.street} className='form-control' onChange={(e) => setStreet(e.target.value)}/>
                        <input type="text" placeholder={userData.house} className='form-control' onChange={(e) => setHouse(e.target.value)}/>
                        <input type="text" placeholder={userData.apartment} className='form-control' onChange={(e) => setApartment(e.target.value)}/>
                        <input type="text" placeholder={userData.phone} className='form-control' onChange={(e) => setPhone(e.target.value)}/>
                        <input type="text" placeholder={userData.email} className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                        </>
                        :
                        <>
                        <h2 className='address__data__text' id='address__data__text__recipient'><strong>{userData.recipient}</strong></h2>
                        <h5 className='address__data__text' id='address__data__text__country'>{userData.country}</h5>
                        <h5 className='address__data__text' id='address__data__text__postcode'>{userData.postCode}</h5>
                        <h5 className='address__data__text' id='address__data__text__town'>{userData.town}</h5>
                        <h5 className='address__data__text' id='address__data__text__street'>{userData.street}</h5>
                        <h5 className='address__data__text' id='address__data__text__house'>{userData.house}</h5>
                        <h5 className='address__data__text' id='address__data__text__apartment'>{userData.apartment}</h5>
                        <h5 className='address__data__text' id='address__data__text__phone'>{userData.phone}</h5>
                        <h5 className='address__data__text' id='address__data__text__email'>{userData.email}</h5>
                        </>
                    }

                </div>
            </div>         
        </div>
    )
}

export default DeliveryAddress