import { useState, useEffect } from 'react'
import './App.scss'
import TV from "./components/TV/index.jsx";
import Modal from "./components/Modal/index.jsx";

function App() {
  const [modalActive, setModalActive] = useState(true)
  const [day, setDay] = useState(0)

  useEffect(() => {
    // if (Date.now() < 1000*1671728400){
    //   setDay(1)
    // } else if (Date.now() < 1000*1671814800){
    //   setDay(2)
    // } else if (Date.now() < 1000*1671901200){
    //   setDay(3)
    // } else if (Date.now() < 1000*1671987600){
    //   setDay(4)
    // }
    // else {
    //   setDay(5)
    // }

    setDay(3)

  }, [])

  return (
    <div className="App">
        <TV day={day} />
        <Modal active={modalActive} setActive={setModalActive} date={day} />
    </div>
  )
}

export default App
