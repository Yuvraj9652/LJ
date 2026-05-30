import APP3 from "./App3.jsx"
import APP2 from "./App2.jsx"
import birdImg from "./Task/bird.png"
import Appp from './Appp.jsx'
import Task from './Task/Task.jsx'
import Map from './Map.jsx'
import './index.css'

function App() {
  const style = { backgroundColor: "cyan", color: "pink" }
  return (
    <>
      <h1>tjgh</h1>
      <APP2 />
      <img src={birdImg} height={200} alt="bird" />
      <h2 style={style}>ifsj</h2>
      <APP3 />
      <Appp />
      <Task />
      {/* <Map/> */}
    </>
  )
}

export default App
