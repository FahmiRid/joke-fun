import "./App.css";
import Joke from "./components/joke";
import Countdown from "./components/countdown";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/todo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/todo" element={<Todo />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
