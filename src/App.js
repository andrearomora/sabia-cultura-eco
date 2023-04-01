import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/NavBar/NavBar";
import {ItemCount} from './components/ItemCount/ItemCount'

function App() {

  const styles = {
    color: "black",
    dontSize: "150px"
  }

  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting={"Bolsas ecológicas en algodón"}/>
        {/* <ItemCount/> */}
    </div>
  );
}

export default App;
