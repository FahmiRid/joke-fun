import "./App.css";
import Joke from "./components/joke";
import Countdown from "./components/countdown";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/todo";
import Gallery from "./components/gallery";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
