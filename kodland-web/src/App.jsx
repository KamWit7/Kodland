import reactLogo from "./assets/react.svg"
import "./App.css"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import About from "./components/About"
import Products from "./components/Products"
import Games from "./components/Games"
import Footer from "./components/Footer"

function App() {
  return (
    <section>
      <HomePage />
      <About />
      <Products />
      <Games />
      <Footer />
    </section>
  )
}

export default App
