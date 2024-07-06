import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContextOverAll } from "./context/logic"
import HomePage from "./components/home-page/HomePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import AllProducts from "./components/all-products-page/AllProducts"

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <ContextOverAll>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/all-products" element={<AllProducts />}></Route>
        </Routes>
      </ContextOverAll>
      <Footer />
    </BrowserRouter>

  )
}

export default Router
