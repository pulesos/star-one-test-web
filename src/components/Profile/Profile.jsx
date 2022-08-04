import {Link} from 'react-router-dom'
import useLocalStorage from 'use-local-storage';
import starDark from '../../assets/images/star-dark.svg'
import moneyDark from '../../assets/images/money-dark.svg'
import './Profile.scss'
import { useState } from 'react'
import { UserAuth } from '../../context/AuthContext';
import { useUserData } from '../../hooks/useUserData';

const Profile = ({changeProfile, uid, name, setName, email, setEmail, phone, setPhone, language, setLanguage, valute, setValute, instagram, setInstagram}) => {
    // const [instagram, setInstagram] = useLocalStorage('instagram')
    // const [email, setEmail] = useLocalStorage('email')
    // const [phone, setPhone] = useLocalStorage('phone')
    // const [language, setLanguage] = useLocalStorage('language')
    // const [valute, setValute] = useLocalStorage('valute')

    const {user} = UserAuth()

    const { isLoading, userData } = useUserData(user.uid);
    if (isLoading) {
     return <span>Loading...</span>;
    }
    if (!userData) {
     return <span>Ooops. Profile not found</span>;
    }

    return (
        <div className="profile__wrapper">
            <Link to='/products/buy-credit'>
                <button className="btn events1 btn-dart profile">Пополнить</button>
            </Link>
            <div className="profile__balance" href='#'>
                <img src={moneyDark} className="money" alt='money'/>
                <span className='profile__balance'>500</span>
                <img src={starDark} className='profile__icon' alt="planet"/>
            </div>
            <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt="avatar" className='profile__avatar' width='50' height='50'/>
            <a className="change__image">+</a>
            <div className="profile__item">
                <div className="profile__title">
                    <h5 className='profile__title__data'>Имя пользователя</h5>
                    <h5 className='profile__title__data'>Instagram</h5>
                    <h5 className='profile__title__data'>Эл. почта</h5>
                    <h5 className='profile__title__data'>Телефон</h5>
                    <h5 className='profile__title__data'>Язык</h5>
                    <h5 className='profile__title__data'>Валюта</h5>
                </div>
                <div className="profile__data">
                    {changeProfile ?
                        <>
                        <input type="text" placeholder={userData.name || user.displayName || user.email || user.phoneNumber} className='form-control' onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder={userData.instagram} className='form-control' onChange={(e) => setInstagram(e.target.value)}/>
                        <input type="text" placeholder={userData.email} className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" placeholder={userData.phone} className='form-control' onChange={(e) => setPhone(e.target.value)}/>
                        <input type="text" placeholder={userData.language} className='form-control' onChange={(e) => setLanguage(e.target.value)}/>
                        <input type="text" placeholder={userData.valute} className='form-control' onChange={(e) => setValute(e.target.value)}/>
                        </>
                        :
                        <>
                        <h2 className='profile__data__text' id='profile__data__name'><strong>{userData.name || user.displayName || user.email || user.phoneNumber}</strong></h2>
                        <h5 className='profile__data__text' id='profile__data__instagram'>{userData.instagram}</h5>
                        <h5 className='profile__data__text' id='profile__data__email'>{userData.email}</h5>
                        <h5 className='profile__data__text' id='profile__data__phone'>{userData.phone}</h5>
                        <h5 className='profile__data__text' id='profile__data__language'>{userData.language}</h5>
                        <h5 className='profile__data__text' id='profile__data__valute'>{userData.valute}</h5>
                        </>
                    }
                </div>
            </div>         
        </div>
    )
}

export default Profile