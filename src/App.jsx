import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import data from './data/data'
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

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [waiting, setWaiting] = useState(false)

  const [list, setList] = useState(data)

  const handleClick = (item) => {
    if (list.indexOf(item) !== -1) return
    setList([...list, item])
  }

  return (
    <div className="App">
        
          <Header setModalActive={setModalActive}/>
          <Banner/>
          <Routes>
            <Route path='/' element={<MainPage  waiting={waiting} setWaiting={setWaiting} setModalActive={setModalActive} handleClick={handleClick}/>}/>
            <Route path='/products/buy-credit' element={<BuyCreditsPage setModalActive={setModalActive}/>}/>
            <Route path='/hotprice' element={<HotPricePage setModalActive={setModalActive}/>}/>
            <Route path='/topprice' element={<TopPricePage setModalActive={setModalActive}/>}/>
            <Route path='/products' element={<CategoriesPage/>}/>
            <Route path='/cart' element={<CartPage list={list} setList={setList} handleClick={handleClick} />}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/events/archive' element={<ArchivePage setModalActive={setModalActive}/>}/>
            <Route path='/events/winners' element={<WinnersPage/>}/>
            <Route path='/company' element={<AboutUsPage/>}/>
          </Routes>
          <Modal modalActive={modalActive} setModalActive={setModalActive}/>
          <Banner/>
          <Footer/>
        
    </div>
  );
}

export default App;
