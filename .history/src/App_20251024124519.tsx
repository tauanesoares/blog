import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          
        <Home />
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;