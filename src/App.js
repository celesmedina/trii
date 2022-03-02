import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Character from "./components/Character";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="bg-slate-800 min-h-screen">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/characters/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
