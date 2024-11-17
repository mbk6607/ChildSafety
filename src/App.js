import Login from "./components/Login";
import History from "./components/History";
import Attendance from "./components/Attendance";
import Dashboard from "./components/Dashboard";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Protected from "./components/Protected";

function App() {
  return (
      <Routes>
        <Route path="/" element={<div className="LoginApp"> <Login/> </div>} />
        <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
        <Route path="/history" element={<Protected Component={History} />} />
        <Route path="/attendance" element={<Protected  Component={Attendance} />}/>
      </Routes>
  );
}

export default App;
