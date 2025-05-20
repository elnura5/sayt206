
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";


import './App.css'
import MainLayout from "./Layout/MainLayout";
import AddAdmin from "./Pages/AddAdmin";
import NotFoundPage from "./Pages/NotFoundPage";
import Basket from "./Pages/Basket";
import Wishlist from "./Pages/Wishlist";
import Admin from "./Pages/Admin";
import Details from "./Pages/Details";

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="addadmin" element={<AddAdmin />} />
          <Route path="admin" element={<Admin />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="detail/:id" element={<Details />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
