import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero'; 
import About from './components/about';
import Services from './components/services';
import WhyCymatics from './components/whycymatics';
import Technology from './components/technology';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
    <About/>
    <Services/>
    <WhyCymatics/>
    <Technology/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
