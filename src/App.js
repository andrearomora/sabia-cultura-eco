import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {NavBar} from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'


function App() {

  return (

    <div className="App">
      <Router>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/tienda' element={<ItemListContainer/>}/>
              {/* <Route path='/category/:categoryId' element={<ItemListContainer/>}/> */}
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/carrito' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={<Navigate to ='/'/>}/>
            </Routes>
          <Footer/>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
