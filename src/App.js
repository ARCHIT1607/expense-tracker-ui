import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="register" element={<Register />} />
        <Route exact path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
