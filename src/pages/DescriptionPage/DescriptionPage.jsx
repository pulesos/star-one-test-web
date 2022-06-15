import company from '../../assets/images/company.svg'
import Description from '../../components/Description/Description'

const DescriptionPage = () => {
    return (
        <>
            <section className='popular__events'>
                <h3 className="events__title">
                    <img className="mr-2" src={company} alt="top events" width="28" height="28" />
                    <span>Как это работает</span>
                </h3>
                <Description/>
            </section>
        </>
    )
}

export default DescriptionPage