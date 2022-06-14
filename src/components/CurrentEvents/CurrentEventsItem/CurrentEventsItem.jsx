import { useEffect, useState } from 'react'
import './CurrentEventsItem.scss'

const CurrentEventsItem = ({waiting, setWaiting}) => {

   const [timeLeft, setTimeLeft] = useState(5 * 60)

   const getPadTime = (time) => time.toString().padStart(2, '0')

   const minutes = getPadTime(Math.floor(timeLeft / 60))
   const seconds = getPadTime(timeLeft - minutes * 60)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 5 * 60))
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const [items, setItems] = useState([
        {id: 1, title: 'Apple iPhone 13 Pro Max 256Gb (небесно-голубой)', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: true},
        {id: 2, title: '500 Stars', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false},
        {id: 3, title: 'Sony PlayStation 5 Digital Edition  ', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false}
    ])


    // const items = [
    //     {id: 1, title: 'Apple iPhone 13 Pro Max 256Gb (небесно-голубой)', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: true},
    //     {id: 2, title: '500 Stars', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false},
    //     {id: 3, title: 'Sony PlayStation 5 Digital Edition  ', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false}
    // ]

    const handleClick = (id) => {
        setItems({activeLink: id})
        console.log('CLicked', id)
    }
    return (
        <>
        <div className='current__events__wrapper'>
            {items.map(item => 
                <div className="current__events__hot-price__item" key={item.id}>
                        <div className={waiting ? "current__events__hot-price active" : "current__events__hot-price"}>
                            <h5 className="current__events__card-title__large">Hot Price</h5>
                        </div>
                        <div className="current__events__image">
                            <img src={item.avatar} alt='user' className="rounded-circle" width='75' height='75'/>
                        </div>
                        <div className="current__events__info">
                            <h4 className="current__events__title__middle">{item.title}</h4>
                        </div>
                        
                        <div className="current__events__timer">
                            <span>{minutes}</span>
                            <span>:</span>
                            <span>{seconds}</span>
                        </div>
                        
                        {waiting ? 
                            <button className="btn current__events__btn-green disabled">ОЖИДАНИЕ...</button>
                        :
                            <button className="btn current__events__btn-green" onClick={() => handleClick(items.id)}>СДЕЛАТЬ ХОД</button>
                        }
                </div>
                
            )}
            </div>
        </>
    )
}

export default CurrentEventsItem