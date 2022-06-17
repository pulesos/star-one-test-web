import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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


function App() {
  const [modalActive, setModalActive] = useState(false)
  const [name, setName] = useLocalStorage('name')
  const [loggedIn, setLoggedIn] = useState(true)
  const [list, setList] = useLocalStorage('data', [])

  const handleClick = (item) => {
    if (list.indexOf(item) !== -1) return
    setList([...list, item])
  }

  const handleLoggedOut = () => {
    setLoggedIn(false)
  }

  const handleLoggedIn = () => {
    setLoggedIn(true)
  }
  

  return (
    <div className="App">
        
          <Header setModalActive={setModalActive} size={list.length} name={name} loggedIn={loggedIn} handleLoggedOut={handleLoggedOut} handleLoggedIn={handleLoggedIn}/>
          <Banner/>
          <Routes>
            <Route path='/' element={<MainPage setModalActive={setModalActive} handleClick={handleClick} loggedIn={loggedIn}/>}/>
            <Route path='/event/:id' element={<CurrentEventPage/>}/>
            <Route path='/products/buy-credit' element={<BuyCreditsPage setModalActive={setModalActive}/>}/>
            <Route path='/hotprice' element={<HotPricePage setModalActive={setModalActive} handleClick={handleClick} loggedIn={loggedIn}/>}/>
            <Route path='/topprice' element={<TopPricePage setModalActive={setModalActive} handleClick={handleClick} loggedIn={loggedIn}/>}/>
            <Route path='/products' element={<CategoriesPage/>}/>
            <Route path='/products/:id' element={<CategoriesDetailsPage/>}/>
            <Route path='/cart' element={<CartPage list={list} setList={setList} handleClick={handleClick} />}/>
            <Route path='/profile' element={<ProfilePage name={name} setName={setName}/>}/>
            <Route path='/events/archive' element={<ArchivePage setModalActive={setModalActive} handleClick={handleClick} loggedIn={loggedIn}/>}/>
            <Route path='/events/winners' element={<WinnersPage/>}/>
            <Route path='/description' element={<DescriptionPage/>}/>
            <Route path='/company' element={<AboutUsPage/>}/>
          </Routes>
          <Modal modalActive={modalActive} setModalActive={setModalActive}/>
          <Banner/>
          <Footer/>
        
    </div>
  );
}

export default App;
