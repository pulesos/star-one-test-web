import product from '../../assets/images/product.svg'
import ProductDetailsItem from '../../components/ProductDetailsItem/ProductDetailsItem'

const ProductDetailsPage = () => {
    return (
        <section className='popular__events'>
        <h3 className="events__title">
            <img className="mr-2" src={product} alt="top events" width="28" height="28" />
            <span>consoles</span>
        </h3>
        <ProductDetailsItem/>
    </section>
    )
}

export default ProductDetailsPage