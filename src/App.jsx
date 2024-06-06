import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Success from "./Pages/Success/Success";
import Menu from "./components/Menu";
import AdminPage from "./Pages/Admin/AdminPage";
import AddCart from "./components/cart/AddCart.jsx";
import Document from "./components/document.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cartAdd" element={<AddCart />} />
          <Route path="/exploreMenu" element={<Document />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
