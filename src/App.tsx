import { useState } from 'react' 
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Projetos from './components/Projetos'
import Home from './pages/Home'
import Sobre from './components/Sobre'
import Skills from './components/Skills'  
import Serviços from './components/Serviços'
import Contato from './components/Contato'
import AnimatedBackground from './components/grid'

function App() {
  // estado para rastrear o mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // atualizar a posição
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    // onMouseMove no container principal
    <div onMouseMove={handleMouseMove} className="relative">
      <Router>
        {/* Renderizar o background passando a posição do mouse */}
        <AnimatedBackground mousePosition={mousePosition} />
        
        <div className="relative z-10 "> {/* conteúdo acima do grid */}
          <Navbar />
          <Home />
          <Projetos />
          <Sobre />
          <Skills />
          <Serviços />
          <Contato />
        </div>
      </Router>
    </div>
  )
}

export default App