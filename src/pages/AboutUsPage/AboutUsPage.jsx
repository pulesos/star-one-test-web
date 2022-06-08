import AboutUs from '../../components/AboutUs/AboutUs'
import company from '../../assets/images/company.svg'

const AboutUsPage = () => {
    return (
        <>
            <section className='popular__events'>
                <h3 className="events__title">
                    <img className="mr-2" src={company} alt="top events" width="28" height="28" />
                    <span>О компании</span>
                </h3>
                <AboutUs/>
            </section>
        </>
    )
}

export default AboutUsPage