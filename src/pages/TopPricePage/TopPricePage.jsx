import molnia from '../../assets/images/molnia.svg'

const TopPricePage = () => {
    return (
        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={molnia} alt="top events" width="28" height="28" />
                <span>Популярные события</span>
            </h3>
        </section>
    )
}

export default TopPricePage