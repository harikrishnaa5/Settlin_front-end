import "./App.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
