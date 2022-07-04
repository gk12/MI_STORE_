import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Banner from './components/Banner.js';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js'
import StarProduct from './components/StartProduct.js';
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"

function App() {
  return (
    

    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>

      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu />
      < HotAccessories/>
      <Route exact path="/music">
      <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
      </Route>

      




    </Router>
    
    
  );
}

export default App;
