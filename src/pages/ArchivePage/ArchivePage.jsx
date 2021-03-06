import archive from '../../assets/images/archive.svg'
import ArchiveCard from '../../components/ArchiveCard/ArchiveCard'
import './ArchivePage.scss'

const ArchivePage = ({setModalActive, handleClick, loggedIn, products}) => {
    // const items = [
    //     {id: 1, price: 252, category: 'КОНСОЛИ', name: 'Sony PlayStation 5 Digital Edition', oldPrice: 1150},
    //     {id: 2, price: 254, category: 'НАУШНИКИ', name: 'Apple AirPods Pro', oldPrice: 260},
    //     {id: 3, price: 258, category: 'СМАРТФОНЫ', name: 'Apple iPhone 13 Pro Max 256 Gb', oldPrice: 1200},
    //     {id: 4, price: 496, category: 'ONE STARS', name: '500 Stars', oldPrice: 450}
    // ]

    
    return (
        <>
            <section className='popular__events'>
                <h3 className="events__title">
                    <img className="mr-2" src={archive} alt="top events" width="28" height="28" />
                    <span>Архив акций</span>
                    <button className="btn events1 btn-white">События</button>
                </h3>
                <ArchiveCard setModalActive={setModalActive} handleClick={handleClick} loggedIn={loggedIn} products={products}/>
            </section>
        </>
    )
}

export default ArchivePage