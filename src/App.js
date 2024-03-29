import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
