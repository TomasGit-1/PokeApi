import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
import Card from "react-bootstrap/Card";

const ListPokemon = () => {
  const [lFullPokemon, setlFullPokemon] = useState([]);
  const [imgPokemon , setimgPokemon ] = useState('');
  const [dataPokemon , setdataPokemon ] = useState('');
  useEffect(() => {
    var url = "https://pokeapi.co/api/v2/pokemon";
    axios.get(url).then((response) => {
      let resp = response.data;
      //Renombrar
      let array_new = [];
      resp.results.map((item) =>
        array_new.push({ value: item.name, label: item.name, url: item.url })
      );
      setlFullPokemon(array_new);
    });
  }, []);

  const alertClicked = (item) => {
    console.log(item);
    var url = item.url;
    axios.get(url).then((response) => {
      setimgPokemon(response.data.sprites.back_default);
      console.log(response)
      console.log(setdataPokemon)
      setdataPokemon(response)
    });
  };

  return (
    <>
      <div>
        <Select options={lFullPokemon} onChange={alertClicked} />
        <div className="mt-2">
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={imgPokemon} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                { JSON.stringify(dataPokemon) }
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ListPokemon;
