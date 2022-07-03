import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router} from 'react-router-dom'
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Banner from './components/Banner.js';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js'
function App() {
  return (
    

    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <Heading text="HOT ACCESSORIES"/>
      <Heading text="PRODUCT REVIEWS"/>
      <Heading text="VIDEOS"/>
      <Heading text="IN THE PRESS"/>

    </Router>
    
    
  );
}

export default App;
