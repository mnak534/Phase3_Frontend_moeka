import axios from 'axios'
import { VFC, useState } from 'react'

export type Props = {
  title: string
}

const SimpleForm: VFC<Props> = ({ title }) => {
  const [name, setName] = useState('')
  const [printName, setPrintName] = useState('')
  const NUMBER_API_URL = "http://numbersapi.com/";

  return (
    <>
      <form
        onSubmit={(event) => {
          axios.get(NUMBER_API_URL + name).then((res) => {
            setPrintName(res.data);
          });
          event.preventDefault()
        }}
      >
        <label
        style = {{color: 'white'}}>
          Number:&nbsp;
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
        <h1 style={{fontSize: 10}}>{' '}</h1>
      </form>
      <div data-testid="print-name" style = {{fontSize: 20, fontWeight: 'bolder', color: 'white', backgroundColor: 'pink', display: "flex", padding: 15}}>Trivia:&nbsp;{printName}</div>
    </>
  )
}

export default SimpleForm