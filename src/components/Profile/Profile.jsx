import {Link} from 'react-router-dom'
import starDark from '../../assets/images/star-dark.svg'
import moneyDark from '../../assets/images/money-dark.svg'
import './Profile.scss'
import { useState } from 'react'

const Profile = ({changeProfile, name, setName}) => {
    const [instagram, setInstagram] = useState('12354')
    const [email, setEmail] = useState('email')
    const [phone, setPhone] = useState('+32444')
    const [language, setLanguage] = useState('EN')
    const [valute, setValute] = useState('RUB')

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
                        <h2 className='profile__data__text'><strong>{name}</strong></h2>
                        <h5 className='profile__data__text'>{instagram}</h5>
                        <h5 className='profile__data__text'>{email}</h5>
                        <h5 className='profile__data__text'>{phone}</h5>
                        <h5 className='profile__data__text'>{language}</h5>
                        <h5 className='profile__data__text'>{valute}</h5>
                        </>
                    }
                </div>
            </div>         
        </div>
    )
}

export default Profile