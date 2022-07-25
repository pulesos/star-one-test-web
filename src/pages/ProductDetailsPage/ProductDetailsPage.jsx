import { useEffect, useState } from 'react'
import productPic from '../../assets/images/product.svg'
import ProductDetailsItem from '../../components/ProductDetailsItem/ProductDetailsItem'
import {useParams} from 'react-router-dom'
import { doc, onSnapshot } from 'firebase/firestore'
import {db} from '../../firebase'

const ProductDetailsPage = ({isActive, toggleClass}) => {

    const [product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', id)
        onSnapshot(docRef, (snapshot) => {
            setProduct({...snapshot.data(), id: snapshot.id})
        })
      }, [])

    return (
        <section className='popular__events'>
        <h3 className="events__title">
            <img className="mr-2" src={productPic} alt="top events" width="28" height="28" />
            <span>{product.category}</span>
        </h3>
        <ProductDetailsItem product={product} isActive={isActive} toggleClass={toggleClass}/>
    </section>
    )
}

export default ProductDetailsPage