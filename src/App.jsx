import './App.css'
import CheckOut from './Component/CheckOut/CheckOut'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Shop from './Component/Shop/Shop'
import ShopDetails from './Component/ShopDetails/ShopDetails'
import ShoppingCart from './Component/ShoppingCart/ShoppingCart'
import Contact from './Component/Contact/Contact'
import {Route , Routes} from 'react-router-dom'

function App() {
 return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/shopdetails' element={<ShopDetails />} />
      <Route path='/shoppingcart' element={<ShoppingCart />} />
      <Route path='/checkout' element={<CheckOut />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
  </>
 )
}

export default App
