import { Link } from 'react-router-dom'
import quest from '../../assets/images/quest.svg'
import sony from '../../assets/images/sony.png'
import headphones from '../../assets/images/headphones.svg'
import smartphones from '../../assets/images/smartphones.svg'
import coin1 from '../../assets/images/coin1.jpg'
import categoriesPic from '../../assets/images/all-categories.svg'
import {useParams} from 'react-router-dom'
import { useMemo } from 'react'
import useAppContext from '../../context/AppContext'

const CategoriesDetailsPage = ({user, handleClick, setModalActive}) => {
    const { categories, products } = useAppContext();
    const { id } = useParams(); // from params id will be a string
  
    const selectedCategory = useMemo(() => {
      if (!id || !categories) return undefined;
      return categories.find((c) => c.id.toString() === id);
    }, [categories, id]);
  
    const filteredProducts = useMemo(() => {
      if (!selectedCategory) return [];
      return products.filter((p) => p.categoryId === selectedCategory.id);
    }, [selectedCategory, products]);
  
    return (
      <>
        <section className='popular__events'>
            <h3 className="events__title">
                    <img className="mr-2" src={categoriesPic} alt="top events" width="28" height="28" />
                    <span>Популярные события / {selectedCategory?.title}</span>
                    <Link to='/hotprice'><button className="btn events1 btn-white">События</button></Link> 
            </h3>
        {filteredProducts.map((p) => (
                <div className="card-wrap hot__price__page" key={p.id}>
                    <div className="card card__hot">
                        <a className="card-title card-title__hot">
                            <h5 className="card-title__large">
                                Hot Price
                                <a href="#" className="card__question">
                                    <img src={quest} height="16" alt="question"/>
                                </a>
                                <div className="answer">Подсказка</div>
                            </h5>
                            <button className="btn btn-green">{p.priceTotal} $</button>
                        </a>
                        <div className="card-body">
                            <div className="card__label">{p.category}</div>
                            <div className="card-body__name">
                                <Link to={`/product-details/${p.id}`} className='bold'>{p.name}</Link>
                            </div>
                            <img className="card__picture" src={p.image}
                                    alt="sony"/>
                            <div className="card-body__bottom">
                                <div className="card-body__price">{p.oldPrice} $</div>

                                {user ?
                                    <button className="btn btn-dart btn-cart" onClick={() => handleClick(p)}>
                                        <span className="icon__cart"></span>
                                    </button>
                                    :
                                    <button className="btn btn-dart btn-cart" onClick={() => setModalActive(true)}>
                                        <span className="icon__cart"></span>
                                    </button>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </section>
      </>
    );
  };
  
  export default CategoriesDetailsPage;