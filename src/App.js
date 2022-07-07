import "./App.css";
import PreNavbar from "./components/PreNavbar.js"
import Navbar from "./components/Navbar.js"
import {BrowserRouter as Router} from 'react-router-dom'
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Banner from "./components/Banner.js"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"


function App() {
  return (
    

    <Router>
      <PreNavbar/>
      <Navbar/>
      <NavOptios/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>   
       <Heading text="PRODUCT REVIEWS"/>
       <ProductReviews productReviews={data.productReviews}/>
       <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading  text="IN THE PRESS"/>
      <Banner  banner={data.banner}/>
      <Footer footer={data.footer} /> 

    </Router>
    
    
  );
}

export default App;
