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
                    </ul>
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
            </Routes>
        </Router>
        </>
    )
}
export default APP