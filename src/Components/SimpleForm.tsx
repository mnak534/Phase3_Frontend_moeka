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
        <label>
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
        <input type="submit" value="Submit" />
      </form>
      <div data-testid="print-name" style = {{fontSize: 30, backgroundColor: "rgb(234, 251, 251)", display: "flex", margin: 10, marginTop:10, marginBottom:10}}>Trivia:&nbsp;{printName}</div>
    </>
  )
}

export default SimpleForm