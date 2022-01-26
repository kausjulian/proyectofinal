import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Carrito from './components/Carrito/Carrito';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Usuario from './components/Usuario';
import TecnoProvider from './Store/appContext';

function App() {
  return (
    <div className="container-fluid">
          <Router>
       <TecnoProvider>
            <Navbar/>
            <Routes>
              <Route path="/" element ={<Home/>} />
              <Route path="/carrito" element ={<Carrito/>} />
              <Route path="/login" element ={<Login/>} />
              <Route path="/usuario" element ={<Usuario/>} />
            </Routes>
            <Footer/>
        </TecnoProvider>
          </Router>
    </div>
  );
}

export default App;
