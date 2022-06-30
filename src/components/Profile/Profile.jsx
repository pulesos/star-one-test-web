import {Link} from 'react-router-dom'
import useLocalStorage from 'use-local-storage';
import starDark from '../../assets/images/star-dark.svg'
import moneyDark from '../../assets/images/money-dark.svg'
import './Profile.scss'
import { useState } from 'react'

const Profile = ({changeProfile, name, setName}) => {
    const [instagram, setInstagram] = useLocalStorage('instagram')
    const [email, setEmail] = useLocalStorage('email')
    const [phone, setPhone] = useLocalStorage('phone')
    const [language, setLanguage] = useLocalStorage('language')
    const [valute, setValute] = useLocalStorage('valute')

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
                        <input type="text" placeholder={name} className='form-control' onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder={instagram} className='form-control' onChange={(e) => setInstagram(e.target.value)}/>
                        <input type="text" placeholder={email} className='form-control' onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" placeholder={phone} className='form-control' onChange={(e) => setPhone(e.target.value)}/>
                        <input type="text" placeholder={language} className='form-control' onChange={(e) => setLanguage(e.target.value)}/>
                        <input type="text" placeholder={valute} className='form-control' onChange={(e) => setValute(e.target.value)}/>
                        </>
                        :
                        <>
                        <h2 className='profile__data__text' id='profile__data__name'><strong>{name}</strong></h2>
                        <h5 className='profile__data__text' id='profile__data__instagram'>{instagram}</h5>
                        <h5 className='profile__data__text' id='profile__data__email'>{email}</h5>
                        <h5 className='profile__data__text' id='profile__data__phone'>{phone}</h5>
                        <h5 className='profile__data__text' id='profile__data__language'>{language}</h5>
                        <h5 className='profile__data__text' id='profile__data__valute'>{valute}</h5>
                        </>
                    }
                </div>
            </div>         
        </div>
    )
}

export default Profile