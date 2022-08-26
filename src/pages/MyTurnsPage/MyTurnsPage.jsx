import company from '../../assets/images/company.svg'

const MyTurnsPage = () => {
    return (
        <>
            <section className='popular__events'>
                <h3 className="events__title">
                    <img className="mr-2" src={company} alt="top events" width="28" height="28" />
                    <span>Мои ходы</span>
                </h3>
                
            </section>
        </>
    )
}

export default MyTurnsPage