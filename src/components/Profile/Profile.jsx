import starDark from '../../assets/images/star-dark.svg'
import moneyDark from '../../assets/images/money-dark.svg'
import './Profile.scss'

const Profile = () => {
    return (
        <div className="profile__wrapper">
            <button className="btn events1 btn-dart profile">Пополнить</button>
            <div className="profile__balance" href='#'>
                <img src={moneyDark} className="money" alt='money'/>
                <span className='profile__balance'>500</span>
                <img src={starDark} className='profile__icon' alt="planet"/>
            </div>
            <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt="avatar" className='profile__avatar' width='50' height='50'/>
            <a className="change__image">+</a>
            <div className="profile__item">
                <div className="profile__title">
                    <h5>Имя пользователя</h5>
                    <h5>Instagram</h5>
                    <h5>Эл. почта</h5>
                    <h5>Телефон</h5>
                    <h5>Язык</h5>
                    <h5>Валюта</h5>
                </div>
                <div className="profile__data">
                    <h2><strong>User</strong></h2>
                    <h5>12234</h5>
                    <h5>email</h5>
                    <h5>+54654245</h5>
                    <h5>EN</h5>
                    <h5>RUB</h5>
                </div>
            </div>         
        </div>
    )
}

export default Profile