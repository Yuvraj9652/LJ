import {BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoPage from './NoPage';
import Sst from './SST';

const Mainr = () => {
    return(<Sst></Sst>)
//   return (
//       <Router>
//     <div className='main-route'>
//       <nav>
//         <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//     </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path='*' element={<NoPage />}></Route>
//       </Routes>
//     </Router>
//   );
};

export default Mainr;