import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MoodsGrid from './components/MoodsGrid'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MoodsGrid />
      <Features />
      <Footer />
    </div>
  )
}

export default App
