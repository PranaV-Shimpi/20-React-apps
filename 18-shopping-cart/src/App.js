import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/:slug" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
