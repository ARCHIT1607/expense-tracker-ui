import { Routes, Route } from "react-router-dom";
import "./App.css";
import Authorise from "./pages/Authorise";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Authorise />} />
      </Routes>
    </div>
  );
}

export default App;
