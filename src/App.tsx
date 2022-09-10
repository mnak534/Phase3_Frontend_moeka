import "./App.css";
import SimpleForm from "./Components/SimpleForm";
import { Container } from '@mui/material';
import { BookMarks } from "./Components/BookMarks";

function App() {
  
  return (
    <div>
      <div className="search-field">
        <h1>Number Trivias</h1>
        <Container>
          <SimpleForm title={"Number Trivia"}/>
        </Container>
        <BookMarks />
      </div>
    </div>
  );
}

export default App;