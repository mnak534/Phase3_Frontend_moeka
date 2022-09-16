import "./App.css";
import SimpleForm from "./Components/SimpleForm";
import { Container } from '@mui/material';
import { BookMarks } from "./Components/BookMarks";
import { Button } from "./Components/Button";

function App() {
  
  return (
    <div>
      <div className="search-field">
        <h2 id="title">Pokédex</h2>
        <Container style = {{padding: 20}}>
          <SimpleForm title={"Pokémon"}/>
        </Container>
        <BookMarks/>
      </div>
    </div>
  );
}

export default App;