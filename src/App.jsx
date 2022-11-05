import React from "react"
import { Link } from "react-router-dom"
// Components
import Home from "./components/Home"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}
