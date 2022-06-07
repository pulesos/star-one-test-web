import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="App">
      <Header setModalActive={setModalActive}/>
      <Banner/>
      <Main/>
      <Modal modalActive={modalActive} setModalActive={setModalActive}/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
