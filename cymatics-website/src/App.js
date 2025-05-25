import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero'; 
import About from './components/about';
import Services from './components/services';
import WhyCymatics from './components/whycymatics';
import Technology from './components/technology';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
    <About/>
    <Services/>
    <WhyCymatics/>
    <Technology/>
    </div>
  );
}

export default App;
