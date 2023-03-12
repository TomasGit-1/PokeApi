import './style/style.css'
import ListPokemon from "./components/listPokemon";

import pokedex from "../src/resource/5818321.jpg"
function App() {
  return (
    <div className="App">
        <div className="container bg-danger  background_style mt-5" >
            <img src={pokedex} alt="pokedex"/>
            <div  className="div_inside">

              <ListPokemon/>      
            </div>
        </div>
    </div>
  );
}

export default App;
