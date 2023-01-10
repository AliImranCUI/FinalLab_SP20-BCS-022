import { BrowserRouter, Link, Route, Navigate, Routes } from "react-router-dom";
import Login from "./screens/login";
import Home from "./screens/LandinPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/login" element {...(<Login />)} />
      </Routes>
    </div>
  );
}

export default App;
