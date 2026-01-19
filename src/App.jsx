import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stack from "./components/Stack"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <div className="font-body">
    <Navbar />
    <Hero/>
    <Stack/>
    <Projects/>
    <Footer />
    </div>
    </>
  )
}

export default App
