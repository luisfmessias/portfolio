import { useState } from 'react' // Importe o useState
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Projetos from './components/projetos'
import Home from './pages/Home'
import Sobre from './components/Sobre'
import Skills from './components/Skills'  
import Servicos from './components/Serviços'
import Contato from './components/Contato'
import AnimatedBackground from './components/grid'

function App() {
  // 1. Criar o estado para rastrear o mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 2. Função para atualizar a posição
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    // 3. Adicionar o onMouseMove no container principal
    <div onMouseMove={handleMouseMove} className="relative">
      <Router>
        {/* 4. Renderizar o background passando a posição do mouse */}
        <AnimatedBackground mousePosition={mousePosition} />
        
        <div className="relative z-10 "> {/* Garante que o conteúdo fique acima do grid */}
          <Navbar />
          <Home />
          <Projetos />
          <Sobre />
          <Skills />
          <Servicos />
          <Contato />
        </div>
      </Router>
    </div>
  )
}

export default App