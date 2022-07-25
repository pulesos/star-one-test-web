import CurrentEventsItem from './CurrentEventsItem/CurrentEventsItem'
import category from '../../assets/images/category.svg'
import './CurrentEvents.scss'
import { useEffect, useState } from 'react';
import ProductDataService from '../../services/productServices'

const CurrentEvents = () => {
    const [items, setItems] = useState([]);

    useEffect(() => async () => 
        await getCurrentEvents(), 
    []);
  
  const getCurrentEvents = async () => {
    const data = await ProductDataService.getAllCurrentEvents();

    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

    return (
        <section className='popular__events'>
            <h3 className="events__title">
                <img className="mr-2" src={category} alt="top events" width="28" height="28" />
                <span>Текущие события</span>
            </h3>
            <CurrentEventsItem items={items}/>

        </section>
    )
}

export default CurrentEvents