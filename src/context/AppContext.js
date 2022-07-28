import { createContext, useMemo, useEffect, useState, useContext } from "react";
import smartphones from '../assets/images/smartphones.svg'
import tablets from '../assets/images/tablets.svg'
import steamcards from '../assets/images/steamcards.svg'
import playstation5 from '../assets/images/playstation-5.svg'
import camera from '../assets/images/camera.svg'
import coffeemaschine from '../assets/images/coffeemaschine.svg'
import notebook from '../assets/images/notebook.svg'
import computer from '../assets/images/computer.svg'
import headphones from '../assets/images/headphones.svg'
import ProductDataService from '../services/productServices'


const StateContext = createContext(null);

export function AppContextProvider(props) {
  const [products, setProducts] = useState([]);

  const categories = useMemo(() => {
    return [
        {id: 1,imageSrc: playstation5, title: 'Консоли'},
        {id: 2,imageSrc: headphones, title: 'Наушники'},
        {id: 3,imageSrc: smartphones, title: 'Смартфоны'},
        {id: 4,imageSrc: steamcards, title: 'Игровой контент'},
        {id: 5,imageSrc: coffeemaschine, title: 'Техника'},
        {id: 6,imageSrc: notebook, title: 'Ноутбуки'},
        {id: 7,imageSrc: camera, title: 'Фото и видео'},
        // {id: 11,imageSrc:steamcards, title: 'Стиральные машины'},
        // {id: 12,imageSrc: coffeemaschine, title: 'One stars'},
        // {id: 13,imageSrc:headphones, title: 'Холодильники'},
        ]
    }, []) 

    useEffect(() => {
      flatMapped()
    }, [])
  
    const flatMapped = async() => {
      const data = await ProductDataService.getAllProducts((x) => x.products)
      setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
 
  const contextValue = useMemo(() => {
    return {
      products: products,
      categories: categories
    };
  }, [products, categories]);

  return (
    <StateContext.Provider value={contextValue}>
      {props.children}
    </StateContext.Provider>
  );
}

export default function useAppContext() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useAppContext must be used within the AppContextProvider");
  }
  return context;
}
