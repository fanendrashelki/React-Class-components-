import logo from './logo.svg';
import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <About/>
    <Services/>
    <Portfolio/>
    <Team/>
    <Contact/>
    <Footer/>
    </>
  ); 
}

export default App;
