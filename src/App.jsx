import Main from "./page/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./page/ProductPage";
import BookmarkPage from "./page/BookmarkPage";
import "./base.css";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/products/list' element={<ProductPage />} />
      <Route path='/bookmark' element={<BookmarkPage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}
