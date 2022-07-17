import CurrentEventsItem from './CurrentEventsItem/CurrentEventsItem'
import category from '../../assets/images/category.svg'
import './CurrentEvents.scss'

const CurrentEvents = ({products}) => {
    return (
        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={category} alt="top events" width="28" height="28" />
                <span>Текущие события</span>
            </h3>
            <CurrentEventsItem products={products}/>

        </section>
    )
}

export default CurrentEvents