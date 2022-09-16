import axios from 'axios'
import { VFC, useState } from 'react'
import { Pokemon } from "pokenode-ts";
import { Box, Grid, Paper, Card } from "@mui/material";

export type Props = {
  title: string
}

const SimpleForm: VFC<Props> = ({ title }) => {
  const [name, setName] = useState("");
  const [printName, setPrintName] = useState<undefined | Pokemon>(undefined);
  const NUMBER_API_URL = "https://pokeapi.co/api/v2";

  return (
    <div>
      
      <form
        onSubmit={(event) => {
          axios.get(NUMBER_API_URL + "/pokemon/" + name).then((res) => {
            setPrintName(res.data);
          });
          event.preventDefault()
        }}
      >
        <label style = {{color: 'white', fontWeight: 'bolder'}}>
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
        <p style = {{color: 'white', fontWeight: 'bolder'}}>Pokemon not found</p>
      ) : (
        <div
        style = {{color: 'white', fontSize: 'larger', fontWeight: 'bolder', padding: 10}}
        >
          {printName.sprites.other === undefined || printName.sprites.other.home.front_default === null ? (
            <p>Pokemon not found</p>
          ) : (
            <div style = {{display:'flex', justifyContent:'center'}}>
              <Card id = "pokoemon-card">
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center">
                    <Grid item>
                      <Box>
                        <img src={printName.sprites.other.home.front_default} style = {{width: '50%'}}/>
                      </Box>
                      <Grid item>
                      <div data-testid='print-name' style={{paddingBottom: 10}}>
                        Height: {printName.height * 10} cm
                      <br />
                        Weight: {printName.weight / 10} kg
                      </div>
                      </Grid>
                    </Grid>
                </Grid>
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SimpleForm