import star from '../../assets/images/star-big.svg'
import CurrentEventItem from '../../components/CurrentEventItem/CurrentEventItem'

const CurrentEventPage = () => {
    return (
        <>
        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={star} alt="top events" width="28" height="28" />
                <span>Событие закончится через timer</span>
                <button className="btn events1 btn-white">События</button>
            </h3>
            <CurrentEventItem/>
        </section>
    </>
    )
}

export default CurrentEventPage