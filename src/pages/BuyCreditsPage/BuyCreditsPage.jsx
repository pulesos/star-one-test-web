import product from '../../assets/images/product.svg'

const BuyCreditsPage = () => {
    return (
        <>
            <section className='buy__credits'>
            <h3 className="events__title">
                <img className="mr-2" src={product} alt="top events" width="28" height="28" />
                <span>Ходы</span>
                <button className="btn events1 btn-white">Бренды</button>
            </h3>
            
            </section>
        </>
    )
}

export default BuyCreditsPage