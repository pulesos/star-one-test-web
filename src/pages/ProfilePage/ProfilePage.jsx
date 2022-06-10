import user from '../../assets/images/user.svg'
import bag from '../../assets/images/bag.svg'
import point from '../../assets/images/point.svg'
import './ProfilePage.scss'
import MyOrders from '../../components/MyOrders/MyOrders'
import Profile from '../../components/Profile/Profile'
import DeliveryAddress from '../../components/DeliveryAddress/DeliveryAddress'

const ProfilePage = () => {
    return (
        <section className='popular__events'>
            <h3 className="events__title address">
                <img className="mr-2" src={point} alt="top events" width="28" height="28" />
                <span>Адрес доставки</span>
                <button className="btn events1 btn-white">Редактировать</button>
            </h3>
            <DeliveryAddress/>
            <h3 className="events__title">
                <img className="mr-2" src={user} alt="top events" width="28" height="28" />
                <span>Профиль</span>
                <button className="btn events1 btn-white">Редактировать</button>
            </h3>
            <Profile/>
            <h3 className="events__title">
                <img className="mr-2" src={bag} alt="top events" width="28" height="28" />
                <span>Мои покупки</span>
            </h3>
            <MyOrders/>

        </section>
    )
}

export default ProfilePage