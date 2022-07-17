import {Link} from 'react-router-dom'
import categoriesPic from '../../assets/images/all-categories.svg'
import smartphones from '../../assets/images/smartphones.svg'
import tablets from '../../assets/images/tablets.svg'
import steamcards from '../../assets/images/steamcards.svg'
import playstation5 from '../../assets/images/playstation-5.svg'
import camera from '../../assets/images/camera.svg'
import coffeemaschine from '../../assets/images/coffeemaschine.svg'
import notebook from '../../assets/images/notebook.svg'
import computer from '../../assets/images/computer.svg'
import headphones from '../../assets/images/headphones.svg'
import './CategoriesPage.scss'
import { useContext, useEffect, useMemo } from 'react'
import { Context } from '../../index'
import ProductDataService from '../../services/productServices'
import useAppContext from '../../context/AppContext'


const CategoriesPage = ({setProducts}) => {
    // const {product} = useContext(Context)
    const { categories, products } = useAppContext();




    //   useEffect(() => {
    //     flatMapped()
    //   }, [])
    
    //   const flatMapped = async() => {
    //     const data = await ProductDataService.getAllProducts((x) => x.products)
    //     setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //   }

    return (
        <section className='popular__categories'>
            <h3 className="events__title">
                <img className="mr-2" src={categoriesPic} alt="top events" width="28" height="28" />
                <span>Категории товаров</span>
            </h3>
            <div className="categories__wrapper">
                {categories.map(category => (
                    <Link to={`${category.id}`} className="categories__content" key={category.id}>
                        <h2 className="categories__title">{category.title}</h2>
                        <img className="categories__img" alt={category.title} src={category.imageSrc} />
                        {/* <ul>
                            {products
                                .filter((p) => p.category === category.title)
                                .map((p) => (
                                <li key={p.id}>{p.name}</li>
                            ))}
                        </ul> */}
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default CategoriesPage