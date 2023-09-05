
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import ProductDeatils from './components/Dell';
import Footer from './components/layouts/Footer';

import Header from './components/layouts/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Heatset from './components/Headset';
import Apple from './components/Apple';
import Oppo from './components/Oppo';
import Laptop from './components/Laptop';
import Puma from './components/Puma';
import Watch from './components/Watch';
import Shoe from './components/Shoe';
import BuyOppo from './components/BuyOppo';
import Payment from './components/Payment';
import Carousel from './Carousel';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Carousel />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Carousel' element={<Carousel />} />
        <Route path='/Dell' element={< ProductDeatils />} />
        <Route path='Apple' element={< Apple />} />
        <Route path='/Headset' element={< Heatset />} />
        <Route path='/Laptop' element={< Laptop />} />
        <Route path='Oppo' element={< Oppo />} />
        <Route path='/Puma' element={< Puma />} />
        <Route path='/Watch' element={< Watch />} />
        <Route path='/Shoe' element={< Shoe />} />
        <Route path='/BuyOppo' element={<BuyOppo />} />
        <Route path='/Payment' element={<Payment />} />

        
        

      </Routes>
      
      <Footer />
      
    </div>

    </Router>
    
  );
}

export default App;
