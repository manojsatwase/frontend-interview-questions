import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import ProductListing from "./pages/product-listing";
import ProductDetail from "./pages/product-details";
import Breadcrumbs from "./components/breadcrumbs";

import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
    <div className="app">
      <h2>Frontend Machine Coding Round Interview</h2>
      {/* Breadcrumbs */}
      <Breadcrumbs/>
      {/* Routes */}
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;