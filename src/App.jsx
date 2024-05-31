import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import ShopCategory from "../src/pages/ShopCategory";
import Product from "./pages/product";
import Cart from "../src/pages/Cart";
import LoginSignup from "../src/pages/LoginSignup";
import Footer from "../src/Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="مردانه" />} />
          <Route path="/womens" element={<ShopCategory category="زنانه" />} />
          <Route path="/kids" element={<ShopCategory category="کودکانه" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
