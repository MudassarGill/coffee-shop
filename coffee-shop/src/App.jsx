import { BrowserRouter, Routes, Route } from "react-router";
import MenuDetail from "./pages/MenuDetail";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;