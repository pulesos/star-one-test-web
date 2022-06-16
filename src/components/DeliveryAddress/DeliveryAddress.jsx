

import { useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import './DeliveryAddress.scss'

const DeliveryAddress = ({changeDelivery}) => {
    const [recipient, setRecipient] = useLocalStorage('recipient')
    const [country, setCountry] = useLocalStorage('country')
    const [postCode, setPostCode] = useLocalStorage('post code')
    const [town, setTown] = useLocalStorage('town')
    const [street, setStreet] = useLocalStorage('street')
    const [house, setHouse] = useLocalStorage('house')
    const [apartment, setApartment] = useLocalStorage('apartment') 
    const [phone, setPhone] = useLocalStorage('phone')
    const [email, setEmail] = useLocalStorage('email')

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
                        <input type="text" placeholder={recipient} className='form-control' onChange={(e) => setRecipient(e.target.value)}/>
                        <input type="text" placeholder={country} className='form-control' onChange={(e) => setCountry(e.target.value)}/>
                        <input type="text" placeholder={postCode} className='form-control' onChange={(e) => setPostCode(e.target.value)}/>
                        <input type="text" placeholder={town} className='form-control' onChange={(e) => setTown(e.target.value)}/>
                        <input type="text" placeholder={street} className='form-control' onChange={(e) => setStreet(e.target.value)}/>
                        <input type="text" placeholder={house} className='form-control' onChange={(e) => setHouse(e.target.value)}/>
                        <input type="text" placeholder={apartment} className='form-control' onChange={(e) => setApartment(e.target.value)}/>
                        <input type="text" placeholder={phone} className='form-control' onChange={(e) => setPhone(e.target.value)}/>
                        <input type="text" placeholder={email} className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                        </>
                        :
                        <>
                        <h2 className='address__data__text'><strong>{recipient}</strong></h2>
                        <h5 className='address__data__text'>{country}</h5>
                        <h5 className='address__data__text'>{postCode}</h5>
                        <h5 className='address__data__text'>{town}</h5>
                        <h5 className='address__data__text'>{street}</h5>
                        <h5 className='address__data__text'>{house}</h5>
                        <h5 className='address__data__text'>{apartment}</h5>
                        <h5 className='address__data__text'>{phone}</h5>
                        <h5 className='address__data__text'>{email}</h5>
                        </>
                    }

                </div>
            </div>         
        </div>
    )
}

export default DeliveryAddress