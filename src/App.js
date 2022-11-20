import { Routes, Route } from "react-router-dom";
import "./App.css";
import CustomNav from "./components/CustomNav";
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";
import Login from "./pages/Login";

import Register from "./pages/Register";
import View from "./pages/View";

function App() {
  return (
    <div className="App">
      <CustomNav />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="register" element={<Register />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route exact path="expense" element={<Expense />} />
        <Route exact path="view/:user" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
