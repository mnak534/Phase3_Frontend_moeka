import "./App.css";
import SimpleForm from "./Components/SimpleForm";
import { Container } from '@mui/material';
import { BookMarks } from "./Components/BookMarks";
import { Button } from "./Components/Button";

function App() {
  
  return (
    <div>
      <div className="search-field">
        <h1>Pokémon Searcher</h1>
        <Container style = {{padding: 20}}>
          <SimpleForm title={"Pokémon"}/>
        </Container>
        <h1 style={{fontSize: 20}}>{'    '}</h1>
        <BookMarks/>
      </div>
    </div>
  );
}

export default App;