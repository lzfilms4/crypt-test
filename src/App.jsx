import { useState } from 'react'
import './App.scss'
import TV from "./components/TV/index.jsx";
import Modal from "./components/Modal/index.jsx";

function App() {
  const [modalActive, setModalActive] = useState(true)

  return (
    <div className="App">
        <TV />
        <Modal active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default App
