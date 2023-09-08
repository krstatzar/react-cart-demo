import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import { Navbar } from './components/navbar';
import { Cart } from './pages/cart';
import { Shop } from './pages/shop';
import { ShopContextProvider } from './shop-context';

function App() {


  return (
    <div className='App'>

      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </Router>
      </ShopContextProvider>
      <div className="footer">© 2023 TechShop</div>
    </div>
  )
}

export default App
