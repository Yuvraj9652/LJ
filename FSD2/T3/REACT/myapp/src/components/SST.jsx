import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import Props from './Props';
import Profile from './Profile';
import Settings from './Settings';
import Product from './Product';
import Timer from './Timer';
import Effects from './Effects';
import Counts from './Counts';
import Hook from './Hook';
import NoPage from './NoPage';

const Sst = () => {
    let dataforProps = [{name: {fname:["Priyen","ABC"] , lname:["Patel","XYZ"]},message:["first Name = import from file F2 along with this message","Last Name = Not given"]}]
    return (
        <Router>
            <div className='main-route'>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/props">Props</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/timer">Timer</Link></li>
                        <li><Link to="/effects">Effects</Link></li>
                        <li><Link to="/counts">Counts</Link></li>
                        <li><Link to="/hook">Hook</Link></li>
                    </ul>
                </nav>
                <div>
                    <div class="scrolling-container">
                        <p class="scrolling-text"><marquee>Welcome, user01 with id no. 01!</marquee></p>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/props" element={<Props />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/product" element={<Product />} />
                <Route path="/timer" element={<Timer />} />
                <Route path="/effects" element={<Effects />} />
                <Route path="/counts" element={<Counts />} />
                <Route path="/hook" element={<Hook />} />
                <Route path='*' element={<NoPage />}></Route>
            </Routes>
        </Router>
    );
};

export default Sst;