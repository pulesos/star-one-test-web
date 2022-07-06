import { useState } from 'react'
import userPic from '../../assets/images/user.svg'
import bag from '../../assets/images/bag.svg'
import point from '../../assets/images/point.svg'
import smile from '../../assets/images/smile.svg'
import './ProfilePage.scss'
import MyOrders from '../../components/MyOrders/MyOrders'
import Profile from '../../components/Profile/Profile'
import DeliveryAddress from '../../components/DeliveryAddress/DeliveryAddress'
import MyPromotions from '../../components/MyPromotions/MyPromotions'

const ProfilePage = ({name, setName, isActive, toggleClass, user}) => {
    const [changeProfile, setChangeProfile] = useState(false)
    const [changeDelivery, setChangeDeliver] = useState(false)

    return (
        <section className='popular__events profile-page'>
            <h3 className="events__title address">
                <img className="mr-2" src={point} alt="top events" width="28" height="28" />
                <span>Адрес доставки</span>
                {changeDelivery ? 
                    <>
                    <button className="btn events1 btn-white" onClick={() => setChangeDeliver(false)}>Сохранить</button>
                    <button className="btn events1 btn-white" onClick={() => setChangeDeliver(false)}>Отмена</button>
                    </>
                    :
                    <button className="btn events1 btn-white" onClick={() => setChangeDeliver(true)}>Редактировать</button>
                }
            </h3>
            <DeliveryAddress changeDelivery={changeDelivery}/>
            <h3 className="events__title">
                <img className="mr-2" src={userPic} alt="top events" width="28" height="28" />
                <span>Профиль</span>
                {changeProfile ? 
                    <>
                    <button className="btn events1 btn-white" onClick={() => setChangeProfile(false)}>Сохранить</button>
                    <button className="btn events1 btn-white" onClick={() => setChangeProfile(false)}>Отмена</button>
                    </>
                    :
                    <button className="btn events1 btn-white" onClick={() => setChangeProfile(true)}>Редактировать</button>
                }
                
            </h3>
            <Profile changeProfile={changeProfile} name={name} user={user} setName={setName}/>
            <h3 className="events__title myorders">
                <img className="mr-2" src={bag} alt="top events" width="28" height="28" />
                <span>Мои заказы</span>
            </h3>
            <MyOrders isActive={isActive} toggleClass={toggleClass}/>
            <h3 className="events__title">
                <img className="mr-2" src={smile} alt="top events" width="28" height="28" />
                <span>Мои акции</span>
                <button className="btn events1 btn-white">Все предложения</button>
            </h3>
            <MyPromotions/>
        </section>
    )
}

export default ProfilePage