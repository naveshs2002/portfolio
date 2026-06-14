import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Home from './pages/Home'
import BlogDetails from './pages/BlogDetails'

function App() {
  const location = useLocation()

  // Scroll to top on route change (except in-page hash links)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location.pathname])

  return (
    <div className="relative min-h-screen font-body">
      <div className="animated-bg" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-glow" />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </main>

      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
