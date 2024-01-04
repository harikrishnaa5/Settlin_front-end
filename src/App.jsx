import "./App.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Form from "./components/expenseForm/Form";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </>
    );
}

export default App;
