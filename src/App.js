import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="App">
      <Header setModalActive={setModalActive}/>
      <Modal modalActive={modalActive} setModalActive={setModalActive}/>
    </div>
  );
}

export default App;
