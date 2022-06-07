import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import BuyCreditsPage from './pages/BuyCreditsPage/BuyCreditsPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import HotPricePage from './pages/HotPricePage/HotPricePage';
import MainPage from './pages/MainPage/MainPage';
import TopPricePage from './pages/TopPricePage/TopPricePage';

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="App">
        
          <Header setModalActive={setModalActive}/>
          <Banner/>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/products/buy-credit' element={<BuyCreditsPage/>}/>
            <Route path='/hotprice' element={<HotPricePage/>}/>
            <Route path='/topprice' element={<TopPricePage/>}/>
            <Route path='/products' element={<CategoriesPage/>}/>
          </Routes>
          <Modal modalActive={modalActive} setModalActive={setModalActive}/>
          <Banner/>
          <Footer/>
        
    </div>
  );
}

export default App;
