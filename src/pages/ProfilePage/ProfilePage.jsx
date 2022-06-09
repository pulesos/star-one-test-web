import user from '../../assets/images/user.svg'
import bag from '../../assets/images/bag.svg'
import './ProfilePage.scss'
import MyOrders from '../../components/MyOrders/MyOrders'

const ProfilePage = () => {
    return (
        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={user} alt="top events" width="28" height="28" />
                <span>Профиль</span>
                <button className="btn events1 btn-white">Редактировать</button>
            </h3>

            <h3 className="events__title">
                <img className="mr-2" src={bag} alt="top events" width="28" height="28" />
                <span>Мои покупки</span>
            </h3>
            <MyOrders/>
        </section>
    )
}

export default ProfilePage