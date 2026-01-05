import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menu from '../public/AssetsPortifolio/nav/menu.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Skills', href: '#skills' },
    { label: 'Serviços', href: '#serviços' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/1 backdrop-blur-xl font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1">
        <div className="flex items-center justify-between md:justify-start h-16 text-white">
          
          
          <Link to="/" className="text-5xl font-bold mt-8 tracking-wide drop-shadow-[0_0_16px_rgba(21,154,156,0.6)]">
            <span className="text-white">L</span>
            <span className="text-[#00C5C8]">F</span>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-7 m-auto mt-8 text-[#C8C8C8] text-xl tracking-wide animate-slideInLeft">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative transition-all duration-400 ease-out hover:-translate-y-[1px] drop-shadow-[0_0px_8px_rgba(21,154,156,0.35)] hover:drop-shadow-[0_0px_8px_rgba(21,154,156,0.55)] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:rounded-full after:bg-[#159A9C] after:transition-all after:duration-300 after:ease-out hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* BOTÃO MOBILE */}
          <div className="md:hidden mt-8">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-1"
            >
              <img src={menu} alt="Menu" className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-10xl transition-all duration-300 border-b border-[#159A9C]/20 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center py-10 gap-8">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-[#C8C8C8] text-2xl tracking-widest hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
