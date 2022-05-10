import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Container/Home";
import About from "./Container/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
