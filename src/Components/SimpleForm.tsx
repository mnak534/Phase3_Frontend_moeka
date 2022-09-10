import axios from 'axios'
import { VFC, useState } from 'react'
import { Pokemon } from "pokenode-ts";

export type Props = {
  title: string
}

const SimpleForm: VFC<Props> = ({ title }) => {
  const [name, setName] = useState("");
  const [printName, setPrintName] = useState<undefined | Pokemon>(undefined);
  const NUMBER_API_URL = "https://pokeapi.co/api/v2";

  return (
    <>
      <form
        onSubmit={(event) => {
          axios.get(NUMBER_API_URL + "/pokemon/" + name).then((res) => {
            setPrintName(res.data);
          });
          event.preventDefault()
        }}
      >
        <label
        style = {{color: 'white'}}>
          Pokemon:&nbsp;
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
        </label>
        <input type="submit" value="🔎"/>
      </form>
      {printName === undefined ? (
        <p>Pokemon not found</p>
      ) : (
        <div id="pokemon-result"
        style = {{color: 'white', fontSize: 'larger', fontWeight: 'bolder'}}

        >
          {/* {printName.sprites.other.home.front_default === undefined ? (
            <p>No image found</p>
          ) : (
            <img src={printName.sprites.other.home.front_default} />
          )} */}
          <p data-testid='print-name'>
            Height: {printName.height * 10} cm
            <br />
            Weight: {printName.weight / 10} Kilograms
          </p>
        </div>
      )}
      {/* <div data-testid="print-name" style = {{fontSize: 20, fontWeight: 'bolder', color: 'white', backgroundColor: 'pink', display: "flex", padding: 15}}>Trivia:&nbsp;{printName}</div> */}
    </>
  )
}

export default SimpleForm