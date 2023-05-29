// Node modules
import { useEffect, useState } from "react";

// Project files
import Pokemon from "./components/Pokemon";
import iPokemon from "./types/iPokemon";

export default function App() {
  // State
  const [data, setData] = useState(new Array<iPokemon>());

  // Properties
  const endpoint = "https://pokeapi.co/api/v2/pokemon";

  // Method
  useEffect(() => {
    fetch(endpoint)
      // 1. This is the line you were missing.
      //    You need to convert the response to json,
      //    otherwise it stil a network API call,
      //    instead of a Array [] or Object {}.
      .then((response) => response.json())
      // 2. Then you can just sent it to the success handler
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(data: any) {
    // 3. Here you can replace data.results for data.data or whatever
    console.log("success data.results", data.results);

    // 4. Then just save it on the state setData() if needed
    setData(data.results);
  }

  function onFailure(error: any) {
    console.error(error);
    alert("Could not fetch data");
  }

  // Components
  const Pokemons = data.map((item, index) => (
    <Pokemon key={index} item={item} />
  ));

  return (
    <div className="App">
      <h1>Using Fetch + TypeScript using Pokémon!</h1>
      <p>Small example (spike) to practice fetching using TypeScript</p>
      <h2>List of Pokémon</h2>
      {Pokemons}
    </div>
  );
}
