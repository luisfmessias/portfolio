
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resgate from './pages/Resgate'
import SobreNos from './pages/SobreNos'
import Contato from './pages/Contato'
import Doacao from './pages/Doacao'
import Apadrinhamento from './pages/Apadrinhamento'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resgate" element={<Resgate />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/doacao" element={<Doacao />} />
            <Route path="/apadrinhamento" element={<Apadrinhamento />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
