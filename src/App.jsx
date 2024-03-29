import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import useLocalStorage from 'use-local-storage';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ArchivePage from './pages/ArchivePage/ArchivePage';
import BuyCreditsPage from './pages/BuyCreditsPage/BuyCreditsPage';
import CartPage from './pages/CartPage/CartPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import HotPricePage from './pages/HotPricePage/HotPricePage';
import MainPage from './pages/MainPage/MainPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import TopPricePage from './pages/TopPricePage/TopPricePage';
import WinnersPage from './pages/WinnersPage/WinnersPage';
import CategoriesDetailsPage from './pages/CategoriesDetailsPage/CategoriesDetailsPage';
import DescriptionPage from './pages/DescriptionPage/DescriptionPage';
import './App.css';
import CurrentEventPage from './pages/CurrentEventPage/CurrentEventPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import MyTurnsPage from './pages/MyTurnsPage/MyTurnsPage';
import { useEffect } from 'react';
import { AuthContextProvider } from './context/AuthContext';
import {db} from './firebase'
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, setDoc} from 'firebase/firestore'
import ProductDataService from './services/productServices'
import { AppContextProvider } from './context/AppContext';
import { v4 } from 'uuid';
import CurrentEventItem from './components/CurrentEventItem/CurrentEventItem';


function App() {
  const [modalActive, setModalActive] = useState(false)
  const [name, setName] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [list, setList] = useLocalStorage('data', [])
  const [isActive, setActive] = useState(false);
  const [user, setUser] = useState({})
  
  const [products, setProducts] = useState([])

  // const {user} = UserAuth()

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async() => {
    const data = await ProductDataService.getAllProducts()
    setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }


  const handleClick = async(item) => {
    const newItem = { ...item, id: v4() }
    await setDoc(doc(db, 'cart_products', newItem.id), {
      id: newItem.id,
      image: newItem.image,
      name: newItem.name,
      priceTotal: newItem.priceTotal,
      category: newItem.category
    })
    setList([...list, newItem])
    console.log(newItem)
  }



  // const handleLoggedOut = () => {
  //   setLoggedIn(false)
  // }

  const handleLoggedIn = () => {
    setLoggedIn(true)
  }


  const toggleClass = () => {
      setActive(!isActive);
  };


  return (
    <div className="App">
        <AuthContextProvider>
        <AppContextProvider>
        <Header setModalActive={setModalActive} size={list.length} name={name} loggedIn={loggedIn} user={user} handleLoggedIn={handleLoggedIn}/>
          <Banner/>
          <Routes>
            <Route path='/' element={<MainPage setModalActive={setModalActive} handleClick={handleClick} loggedIn={loggedIn} products={products}/>}/>
            <Route path='/event' element={<CurrentEventPage name={name}/>}/>
            <Route path='/event/:id' element={<CurrentEventItem name={name}/>}/>
            <Route path='/products/buy-credit' element={<BuyCreditsPage setModalActive={setModalActive} loggedIn={loggedIn} handleClick={handleClick} products={products}/>}/>
            <Route path='/hotprice' element={<HotPricePage setModalActive={setModalActive} handleClick={handleClick} loggedIn={loggedIn} products={products}/>}/>
            <Route path='/topprice' element={<TopPricePage setModalActive={setModalActive} handleClick={handleClick} loggedIn={loggedIn} products={products}/>}/>
            <Route path='/products' element={<CategoriesPage products={products} setProducts={setProducts}/>}/>
            <Route path='/products/:id' element={<CategoriesDetailsPage products={products} setProducts={setProducts} user={user} handleClick={handleClick} setModalActive={setModalActive}/>}/>
            <Route path='/product-details/:id' element={<ProductDetailsPage isActive={isActive} toggleClass={toggleClass}/>}/>
            <Route path='/cart' element={<CartPage list={list} setList={setList} handleClick={handleClick} />}/>
            <Route path='/profile' element={<ProfilePage name={name} user={user} setName={setName} isActive={isActive} toggleClass={toggleClass}/>}/>
            <Route path='/events/archive' element={<ArchivePage setModalActive={setModalActive} handleClick={handleClick} loggedIn={loggedIn} products={products}/>}/>
            <Route path='/my-turns' element={<MyTurnsPage/>}/>
            <Route path='/events/winners' element={<WinnersPage/>}/>
            <Route path='/description' element={<DescriptionPage/>}/>
            <Route path='/company' element={<AboutUsPage/>}/>
          </Routes>
          <Modal modalActive={modalActive} setModalActive={setModalActive} user={user} setUser={setUser}  setLoggedIn={setLoggedIn}/>
          <Banner/>
          <Footer/>
        </AppContextProvider>
        </AuthContextProvider>

        
    </div>
  );
}

export default App;
