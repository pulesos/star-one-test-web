import { useEffect, useState } from 'react'
import {v4} from 'uuid'
import sony from '../../assets/images/sony.png'
import starDark from '../../assets/images/star-dark.svg'
import moneyDark from '../../assets/images/money-dark.svg'
import './CurrentEventItem.scss'
import { db } from '../../firebase'
import { doc, onSnapshot } from 'firebase/firestore'
import {useParams} from 'react-router-dom'

const CurrentEventItem = ({name, disabled, setDisabled, timeLeft}) => {
    const currentTime = null;
    const [ctime, setDate] = useState(currentTime);
    

    const objects = [
        {id: v4(), title: 'Apple iPhone 13 Pro Max 256Gb (небесно-голубой)', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false},
        {id: v4(), title: '500 Stars', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false},
        {id: v4(), title: 'Sony PlayStation 5 Digital Edition  ', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false},
        {id: v4(), title: 'Sony PlayStation 5 Digital Edition  ', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false},
        {id: v4(), title: 'Sony PlayStation 5 Digital Edition  ', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false},
        {id: v4(), title: 'Sony PlayStation 5 Digital Edition  ', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false}
    ]

    const viewDiv = () => {
        document.getElementById("active").style.display = "block";
        let time = new Date().toLocaleTimeString();
        setDate(time);
    };

    const [currentEvent, setCurrentEvent] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const docRef = doc(db, 'current_events', id)
        onSnapshot(docRef, (snapshot) => {
            setCurrentEvent({...snapshot.data(), id: snapshot.id})
        })
      }, [])
    

    return (
        <div className="current__event__item__wrapper">
                <div className="current__event__item__data">
                    <div className="current__event__item__image">
                        <img src={currentEvent.image} alt='phone' width='150' height='150'/>
                    </div>
                    <div className="current__event__item__title">
                        <h5>{currentEvent.category}</h5>
                        <h2>{currentEvent.title}</h2>
                        <h5>{currentEvent.oldPrice} $</h5>
                    </div>
                    <div className="profile__balance event" href='#'>
                        <div className="profile__balance event__item">
                            <img src={moneyDark} className="money" alt='money'/>
                            <span className='profile__balance'>500</span>
                            <img src={starDark} className='profile__icon' alt="planet"/>
                        </div>
                        
                    <div className="hotprice__btn"><span>{currentEvent.priceTotal} $</span></div>
                </div>
                <button className='current__events__btn-green big' onClick={viewDiv}>СДЕЛАТЬ ХОД</button>

            </div>
            <div className="current__event__item__auction">
                <div className="auction__items">
                    <div className="auction__item" id='active'>
                        <div className="auction__item__border active">
                            <div className="auction__item__full__content">
                                <div className="auction__item__image">
                                    <div className="rounded-circle" style={{width: '75px', height: '75px', padding: '21px'}}>ВЫ</div>
                                    <p className='auction__username'>{name}</p>
                                </div>
                                
                                <div className="auction__item__content">
                                    
                                    <div className="auction__item__time">{ctime}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {objects.map(item =>
                            
                        <div className="auction__item" key={item.id}>
                            <div className="auction__item__border">
                                <div className="auction__item__full__content">
                                    <div className="auction__item__image">
                                        <img src={item.avatar} alt='user' className="rounded-circle" width='75' height='75'/>
                                        USER
                                    </div>
                                    
                                    <div className="auction__item__content">
                                        
                                        <div className="auction__item__time">00:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    )
}

export default CurrentEventItem