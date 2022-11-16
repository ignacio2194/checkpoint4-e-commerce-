import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import "./index.css";
import { CreateProduct } from "./components/CreateProduct";
import ItemDetails from "./components/ItemDetails";
import { Cart } from "./components/Cart";
import PurchaseForm from "./components/PurchaseForm";
import { Admin } from "./components/Admin";
import { SearchResults } from "./components/SearchResults";
import { Footer } from "./components/Footer";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/itemDetails/:id/" element={<ItemDetails />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/purchaseForm/*" element={<PurchaseForm />} />
          <Route path="/searchresults/*" element={<SearchResults />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </UserProvider>
  );
}
export default App;
