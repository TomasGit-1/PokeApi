import './style/style.css'
import ListPokemon from "./components/listPokemon";

function App() {
  return (
    <div className="App">
        <div className="container bg-danger  background_style mt-5" >
            <div  className="div_inside">
              <ListPokemon/>      
            </div>
        </div>
    </div>
  );
}

export default App;
