import {Link} from 'react-router-dom'
import HotPriceCard from './HotPriceCard/HotPriceCard'
import molnia from '../../assets/images/molnia.svg'
import './PopularEvents.scss'


const PopularEvents = ({setModalActive, handleClick, loggedIn, products}) => {

    return (

        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={molnia} alt="top events" width="28" height="28" />
                <span>Популярные события</span>
                <Link to='/hotprice'><button className="btn events1 btn-white">События</button></Link> 
            </h3>
            <HotPriceCard setModalActive={setModalActive} handleClick={handleClick} loggedIn={loggedIn} products={products}/>
        </section>
        
    )
}

export default PopularEvents