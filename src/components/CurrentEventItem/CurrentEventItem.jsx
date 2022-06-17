import sony from '../../assets/images/sony.png'
import starDark from '../../assets/images/star-dark.svg'
import moneyDark from '../../assets/images/money-dark.svg'
import './CurrentEventItem.scss'

const CurrentEventItem = () => {
    return (
        <div className="current__event__item__wrapper">
            <div className="current__event__item__data">
                <div className="current__event__item__image">
                    <img src={sony} alt='phone' width='150' height='150'/>
                </div>
                <div className="current__event__item__title">
                    <h5>CATEGORY (MOBILE)</h5>
                    <h2>NAME</h2>
                    <h5>PRICE</h5>
                </div>
                <div className="profile__balance event" href='#'>
                    <img src={moneyDark} className="money" alt='money'/>
                    <span className='profile__balance'>500</span>
                    <img src={starDark} className='profile__icon' alt="planet"/>
                    <div className="hotprice__btn"><span>291 $</span></div>
                </div>
                <button className='current__events__btn-green big'>СДЕЛАТЬ ХОД</button>
                
            </div>
        </div>
    )
}

export default CurrentEventItem