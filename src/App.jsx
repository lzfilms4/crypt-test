import { useState, useEffect } from 'react'
import './App.scss'
import TV from "./components/TV/index.jsx";
import Modal from "./components/Modal/index.jsx";
import Modal2 from "./components/Modal2/index.jsx";
import Modal3 from "./components/Modal3/index.jsx";
import Modal4 from "./components/Modal4/index.jsx";
import Modal5 from "./components/Modal5/index.jsx";

function App() {
  const [modalActive, setModalActive] = useState(false)
  const [modalActive2, setModalActive2] = useState(false)
  const [modalActive3, setModalActive3] = useState(false)
  const [modalActive4, setModalActive4] = useState(false)
  const [modalActive5, setModalActive5] = useState(false)
  const [day, setDay] = useState(0)

    const modals = [
        <Modal active={modalActive} setActive={setModalActive} key={1} />,
        <Modal2 active={modalActive2} setActive={setModalActive2} key={2} />,
        <Modal3 active={modalActive3} setActive={setModalActive3} key={3}/>,
        <Modal4 active={modalActive4} setActive={setModalActive4} key={4}/>,
        <Modal5 active={modalActive5} setActive={setModalActive5} key={5}/>
    ]

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

    setDay(5)

  }, [])


  return (
    <div className="App">
        <TV day={day} setActive={setModalActive} setActive2={setModalActive2} setActive3={setModalActive3} setActive4={setModalActive4} setActive5={setModalActive5}/>

        {[...new Array(day)].map((e,i) => {
            return (modals[i])
        })}
        {/*<Modal active={modalActive} setActive={setModalActive} />*/}
        {/*<Modal2 active={modalActive2} setActive={setModalActive2} />*/}
        {/*<Modal3 active={modalActive3} setActive={setModalActive3} />*/}
        {/*<Modal4 active={modalActive4} setActive={setModalActive4} />*/}
        {/*<Modal5 active={modalActive5} setActive={setModalActive5} />*/}
    </div>
  )
}

export default App
