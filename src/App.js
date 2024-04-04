import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import loginPage from "./loginPage";
import ImageSlider from "./loginPage";
import Login from "./LogIn/login";
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
          {/* { isAuthenticated ? ( */}
            <Route path="/" element={<Shop/>}/>
            {/* ):( */}
            <Route path='/s' element={<Login/>}/>
            {/* )} */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
