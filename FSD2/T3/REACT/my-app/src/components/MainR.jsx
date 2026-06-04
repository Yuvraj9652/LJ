import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import Help from './Help.jsx'
import Galary from './Galary.jsx'
import Destination from './Destination.jsx'
import Booking from './Booking.jsx'
import US1 from './US1.jsx'
import US2 from './US2.jsx'
import US3 from './US3.jsx'
import US5 from './US5.jsx'
import US6 from './US6.jsx'
import US7 from './US7.jsx'
import US8 from './US8.jsx'
import US9 from './US9.jsx'
import US10 from './US10.jsx'
import Todo from './Todo.jsx'
import Task10 from './Task10.jsx'

import UR3 from './UR3.jsx'
import UR5 from './UR5.jsx'

import UC1 from './UC1.jsx'
import Comp1 from './Comp1.jsx'

import F1 from './F1.jsx'

import UE1 from './UE1.jsx'
import UE2 from './UE2.jsx'

import Ax from './Ax.jsx'
import Ax2 from './Ax2.jsx'

function APP(){
    return(
        <>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Destination</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    <li><Link to="/galary">Galary</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <h2>US</h2>
                    <ul>
                        <li><Link to="/US1">US1</Link></li>
                        <li><Link to="/US2">US2</Link></li>
                        <li><Link to="/US3">US3</Link></li>
                        <li><Link to="/US5">US5</Link></li>
                        <li><Link to="/US6">US6</Link></li>
                        <li><Link to="/US7">US7</Link></li>
                        <li><Link to="/US8">US8</Link></li>
                        <li><Link to="/US9">US9</Link></li>
                        <li><Link to="/US10">US10</Link></li>
                        <li><Link to="/todolist">To-do-List</Link></li>
                        <li><Link to="/registration">Registration</Link></li>
                    </ul>
                    <ul>
                        <h2>UseReducer</h2>
                        <li><Link to="/UR3">UR3</Link></li>
                        <li><Link to="/UR5">UR5</Link></li>
                    </ul>
                    <ul>
                        <h2>UseContext</h2>
                        <li><Link to="/UC1">UC1</Link></li>
                    </ul>
                    <li><Link to="/Comp1">Comp1</Link></li>
                    <li><Link to="/F1">F1</Link></li>
                    <li><Link to="/UE1">UE1</Link></li>
                    <li><Link to="/UE2">UE2</Link></li>
                    <li><Link to="/Ax">AX</Link></li>
                    <li><Link to="/Ax2">AX2</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Destination/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/galary" element={<Galary/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/US1" element={<US1/>}/>
                <Route path="/US2" element={<US2/>}/>
                <Route path="/US3" element={<US3/>}/>
                <Route path="/US5" element={<US5/>}/>
                <Route path="/US6" element={<US6/>}/>
                <Route path="/US7" element={<US7/>}/>
                <Route path="/US8" element={<US8/>}/>
                <Route path="/US9" element={<US9/>}/>
                <Route path="/US10" element={<US10/>}/>
                <Route path="/todolist" element={<Todo/>}/>
                <Route path="/registration" element={<Task10/>}/>
                <Route path="/UR3" element={<UR3/>}/>
                <Route path="/UR5" element={<UR5/>}/>
                <Route path="/UC1" element={<UC1/>}/>
                <Route path="/Comp1" element={<Comp1/>}/>
                <Route path="/F1" element={<F1/>}/>
                <Route path="/UE1" element={<UE1/>}/>
                <Route path="/UE2" element={<UE2/>}/>
                <Route path="/ax" element={<Ax/>}/>
                <Route path="/ax2" element={<Ax2/>}/>
            </Routes>
        </Router>
        </>
    )
}
export default APP
