import "./App.css";
import Joke from "./components/joke";
import Countdown from "./components/countdown";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/todo";
import Gallery from "./components/gallery";
import Location from "./components/location";
import RSVPForm from "./components/rsvp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/rsvp" element={<RSVPForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
