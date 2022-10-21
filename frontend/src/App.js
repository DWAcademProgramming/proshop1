import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./index.css"
import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container, Row, Col } from "react-bootstrap"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
 
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;