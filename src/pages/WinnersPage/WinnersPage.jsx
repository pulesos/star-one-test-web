import winners from '../../assets/images/winners.svg'

const WinnersPage = () => {
    return (
        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={winners} alt="top events" width="28" height="28" />
                <span>Победители акций</span>
            </h3>
        </section>
    )
}

export default WinnersPage