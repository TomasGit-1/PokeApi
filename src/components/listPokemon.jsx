import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ListPokemon = () => {
  const [lFullPokemon, setlFullPokemon] = useState([]);
  const [imgPokemon , setimgPokemon ] = useState('');
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
    });
  };

  return (
    <>
      <div>
        <Select options={lFullPokemon} onChange={alertClicked} />
        <div className="mt-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imgPokemon} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ListPokemon;
