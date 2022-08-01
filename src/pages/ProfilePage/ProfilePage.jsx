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
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { UserAuth } from '../../context/AuthContext'

const ProfilePage = ({name, setName, isActive, toggleClass}) => {
    const [changeProfile, setChangeProfile] = useState(false)
    const [changeDelivery, setChangeDeliver] = useState(false)

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [language, setLanguage] = useState('')
    const [valute, setValute] = useState('')
    const [instagram, setInstagram] = useState('')
    
    const [recipient, setRecipient] = useState('')
    const [country, setCountry] = useState('')
    const [postCode, setPostCode] = useState('')
    const [town, setTown] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [apartment, setApartment] = useState('') 

    const {user} = UserAuth()

    const updatePerson = async(email, phone, language, valute, instagram, name, recipient, country, postCode, town, street, house, apartment) => {
        await updateDoc(doc(db, 'users', user.uid), {email, phone, language, valute, instagram, name, recipient, country, postCode, town, street, house, apartment})
    }
    
    const updatePersonData = async() => {
        await updatePerson(email, phone, language, valute, instagram, name, recipient, country, postCode, town, street, house, apartment)
        setChangeProfile(false)
        setChangeDeliver(false)
    }

    return (
        <section className='popular__events profile-page'>
            <h3 className="events__title address">
                <img className="mr-2" src={point} alt="top events" width="28" height="28" />
                <span>Адрес доставки</span>
                {changeDelivery ? 
                    <>
                    <button className="btn events1 btn-white" onClick={updatePersonData}>Сохранить</button>
                    <button className="btn events1 btn-white" onClick={() => setChangeDeliver(false)}>Отмена</button>
                    </>
                    :
                    <button className="btn events1 btn-white" onClick={() => setChangeDeliver(true)}>Редактировать</button>
                }
            </h3>
            <DeliveryAddress changeDelivery={changeDelivery} recipient={recipient} setRecipient={setRecipient} country={country} setCountry={setCountry} postCode={postCode} setPostCode={setPostCode} town={town} setTown={setTown} street={street} setStreet={setStreet} house={house} setHouse={setHouse} apartment={apartment} setApartment={setApartment} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone}/>
            <h3 className="events__title">
                <img className="mr-2" src={userPic} alt="top events" width="28" height="28" />
                <span>Профиль</span>
                {changeProfile ? 
                    <>
                    <button className="btn events1 btn-white" onClick={updatePersonData}>Сохранить</button>
                    <button className="btn events1 btn-white" onClick={() => setChangeProfile(false)}>Отмена</button>
                    </>
                    :
                    <button className="btn events1 btn-white" onClick={() => setChangeProfile(true)}>Редактировать</button>
                }
                
            </h3>
            <Profile changeProfile={changeProfile} name={name} user={user} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} language={language} setLanguage={setLanguage} valute={valute} setValute={setValute} instagram={instagram} setInstagram={setInstagram}/>
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