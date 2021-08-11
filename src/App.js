import "./App.css";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import {MovieProvider} from "./components/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <NavBar />
        <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;
