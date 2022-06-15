import molnia from '../../assets/images/molnia.svg'
import TopPriceCard from '../../components/TopPriceCard/TopPriceCard'

const TopPricePage = ({setModalActive, handleClick}) => {
    return (
        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={molnia} alt="top events" width="28" height="28" />
                <span>Top Price</span>
            </h3>
            <TopPriceCard setModalActive={setModalActive} handleClick={handleClick}/>
        </section>
    )
}

export default TopPricePage