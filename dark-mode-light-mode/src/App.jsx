import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Navbar from "./components/navbar";

import { ThemeProvider } from "./theme-context";

import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";


const App = () => {
  return (
    <Provider store={store}>
    <ThemeProvider>
    <BrowserRouter>
      {/* navbar */}
      <Navbar />
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
  )
}

export default App