import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router} from 'react-router-dom'
import Slider from "./components/Slider.js"
import {default as banner} from './data/data.json'
function App() {
  return (
    <>

    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={banner.start}/>
    </Router>
    
    </>
  );
}

export default App;
