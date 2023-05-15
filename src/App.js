import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {NavBar} from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";

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
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tienda' element={<ItemListContainer/>}/>
          {/* <Route path='/category/:categoryId' element={<ItemListContainer/>}/> */}
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to ='/'/>}/>
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
