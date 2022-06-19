import product from '../../assets/images/product.svg'
import Coins from '../../components/Coins/Coins'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod'
import './BuyCreditsPage.scss'

const BuyCreditsPage = ({setModalActive, loggedIn, handleClick}) => {
    return (
        <>
            <section className='buy__credits'>
            <h3 className="events__title">
                <img className="mr-2" src={product} alt="top events" width="28" height="28" />
                <span>Ходы</span>
            </h3>
            <Coins setModalActive={setModalActive} loggedIn={loggedIn} handleClick={handleClick}/>
            <h3 className="events__title">
                    <img className="mr-2" src={product} alt="pay" width="28" height="28" />
                    <span>Способы оплаты</span>
            </h3>
            <PaymentMethod/>
            </section>
        </>
    )
}

export default BuyCreditsPage