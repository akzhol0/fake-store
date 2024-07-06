import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContextOverAll } from "./context/logic"
import HomePage from "./components/home-page/HomePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <ContextOverAll>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </ContextOverAll>
      <Footer />
    </BrowserRouter>

  )
}

export default Router
