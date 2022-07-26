import { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage';
import {v4} from 'uuid'
import './CurrentEventsItem.scss'
import ProductDataService from '../../../services/productServices'
import {Link} from 'react-router-dom'

const getRandomElements = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const getPadTime = (time) => time.toString().padStart(2, "0");

const CurrentEventsItem = ({items}) => {
  const [timeLeft, setTimeLeft] = useState( 5  );
  const [appState, changeState] = useState( items);
  const [selectedItems, setSelectedItems] = useState(() => getRandomElements(appState, 4));

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    changeState(items);
    setSelectedItems(getRandomElements(items, 3));
  }, [items])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft > 0) return timeLeft - 1;

        enableAll();
        setSelectedItems(getRandomElements(appState, 3));

        return 5 ;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [appState]);

  const toggleActiveStyles = (index) => `current__events__hot-price${
    appState[index].statusItem ? ' disabled' : ''
  }`;

  const toggleActiveStylesBtns = (index) => `current__events__btn-green${
    appState[index].statusItem ? ' disabled' : ''
  }`;

  const toggleActive = (item, activate = true) => {
    item.statusItem = activate;
  };

  const handleClick = (item) => {
    toggleActive(item);
    setSelectedItems([...selectedItems]);
  }

  const enableAll = () => {
    selectedItems.forEach(item => toggleActive(item, false));
    setSelectedItems([...selectedItems]);
  }

  return (
    <div className="current__events__wrapper">
        {selectedItems.map((item, index) => (
          <div className="current__events__hot-price__item" key={index}>
            <div className={toggleActiveStyles(index)}>
              <h5 className="current__events__card-title__large">Hot Price</h5>
            </div>
            <div className="current__events__image">
              <img
                src={item.avatar}
                alt="user"
                className="rounded-circle"
                width="75"
                height="75"
              />
            </div>
            <div className="current__events__info">
              <Link to={`/event/${item.id}`} className="current__events__title__middle">{item.title}</Link>
            </div>

            <div className="current__events__timer">
              <span>{minutes}</span>
              <span>:</span>
              <span>{seconds}</span>
            </div>

            <button
              className={toggleActiveStylesBtns(index)}
              onClick={() => handleClick(item)}
              disabled={item.statusItem}
            >
              СДЕЛАТЬ ХОД
            </button>
          </div>
        ))}
      </div>
  );
};

export default CurrentEventsItem;
