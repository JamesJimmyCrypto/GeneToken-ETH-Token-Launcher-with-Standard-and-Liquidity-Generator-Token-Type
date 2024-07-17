import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateToken from "./pages/Createtoken/CreateToken";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CreateToken />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
