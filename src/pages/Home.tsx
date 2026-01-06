import { useEffect, useState } from 'react'
import avatar from '../public/AssetsPortifolio/Hero/meHi.png'
import setalado from '../public/AssetsPortifolio/Hero/right-up.png'
import download from '../public/AssetsPortifolio/Hero/downloads.png'
import github from '../public/AssetsPortifolio/Hero/githubAzul.png'
import linkedin from '../public/AssetsPortifolio/Hero/linkedinAzul.png'
import instagram from '../public/AssetsPortifolio/Hero/instagramAzul.png'

export default function Home() {
  const fullStackText = 'Full Stack'
  const nameText = 'LUIS FERNANDO'

  const [typedText, setTypedText] = useState('')
  const [showButtons, setShowButtons] = useState(false)
  const [showSocials, setShowSocials] = useState(false)
  const [showAvatar, setShowAvatar] = useState(false)
  const [showChips, setShowChips] = useState(false)
  const [typedName, setTypedName] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)

  // ESTADO DO BALÃO DE FALA
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    
    setTimeout(() => setShowAvatar(true), 600)

    let nameIndex = 0
    const nameInterval = setInterval(() => {
      setTypedName(nameText.slice(0, nameIndex + 1))
      nameIndex++

      if (nameIndex === nameText.length) {
        clearInterval(nameInterval)
        setTimeout(() => setShowWelcome(true), 200)

        let fsIndex = 0
        const fsInterval = setInterval(() => {
          setTypedText(fullStackText.slice(0, fsIndex + 1))
          fsIndex++

          if (fsIndex === fullStackText.length) {
            clearInterval(fsInterval)
            setTimeout(() => setShowChips(true), 300)
            setTimeout(() => setShowButtons(true), 700)
            setTimeout(() => setShowSocials(true), 1100)
          }
        }, 60)
      }
    }, 70)

    return () => clearInterval(nameInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen bg-transparent flex items-center relative overflow-hidden">
      
      {/* BOLA DE FUNDO (GLOW) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vw] rounded-full bg-[#159A9C] blur-[130px] opacity-60 shadow-[0_0_40px_#159A9C] pointer-events-none" />

      <div className="tudo absolute left-28 flex flex-col gap-6 items-center">
        
        {/* BALÃO DE FALA (Hover) */}
        <div 
          className={`
            fala
            absolute -top-14 left-1/2 -translate-x-1/2 z-20 font
            bg-white text-[#159A9C] font-bold py-2 px-4 rounded-2xl
            shadow-[0_10px_25px_rgba(0,0,0,0.2)]
            transition-all duration-300 ease-out pointer-events-none
            before:content-[''] before:absolute before:top-full before:left-1/2 
            before:-translate-x-1/2 before:border-8 before:border-transparent 
            before:border-t-white
            ${isHovered ? 'opacity-100 scale-100 -translate-y-2' : 'opacity-0 scale-50 translate-y-4'}
          `}
        >
          <p className="whitespace-nowrap text-sm tracking-tight">Oi! Eu sou o Luis.</p>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            circulo
            w-40 h-40 rounded-full overflow-hidden
            shadow-[0_0_130px_rgba(0,197,200,0.5)]
            transition-all duration-700 cursor-pointer relative z-10
            ${showAvatar ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}
            hover:scale-110 hover:shadow-[0_0_180px_rgba(0,197,200,0.7)] hover:rotate-[5deg]
          `}
        >
          <img src={avatar} alt="Luis Fernando" className="w-full h-full object-cover" />
        </div>

        {/* SAUDAÇÃO */}
        <div className="font-mono tracking-wide text-center font-mono">
          <p className="ent text-white text-3xl">HEY, I'M</p>
          <p className="luis text-[#0fe4e7] text-4xl min-h-[48px]">{typedName}</p>
          <p className={`ent text-white text-3xl transition-all duration-500 ${showWelcome ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            WELCOME!
          </p>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-10 max-w-3xl w-full">
        
        <div className="font-mono tracking-wide mt-24">
          <h1 className="md:text-6xl text-white whitespace-nowrap">Desenvolvedor Junior</h1>
          <h1 className="text-5xl md:text-5xl text-[#00C5C8] whitespace-nowrap min-h-[1.2em]">
            {typedText}
          </h1>
        </div>

        {/* SKILL CHIPS */}
        <div className="flex flex-wrap justify-center gap-4">
          {["Web Designer", "UI/UX", "Frontend", "Backend"].map((item, index) => (
            <span
              key={item}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`
                px-5 py-2 rounded-full border border-[#067c7e]
                flex items-center justify-center shadow-[0_0_10px_#00c5c818]
                text-[#63b4b6] text-sm tracking-wide backdrop-blur-md
                transition-all duration-500 ease-out hover:bg-[#159A9C]/10 hover:scale-105
                ${showChips ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
              `}
            >
              {item}
            </span>
          ))}
        </div>

        <div className={`flex gap-6 transition-all duration-700 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a href="#projetos" className="relative overflow-hidden flex items-center justify-center gap-3 px-9 py-4 rounded-xl border border-b-8 text-white font-mono text-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_70px_rgba(0,255,255,0.15)] before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-[linear-gradient(0deg,transparent,transparent_30%,rgba(0,255,255,0.3))] before:rotate-[-45deg] before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100 hover:before:translate-y-full">
            MEUS PROJETOS <img src={setalado} className="w-4 h-4 relative z-10" />
          </a>

          <a href="#cv" className="relative overflow-hidden flex items-center justify-center gap-3 px-11 py-4 rounded-xl border border-b-8 text-white font-mono text-lg transition-all duration-200 hover:scale-105 hover:shadow-[0_0_70px_rgba(0,255,255,0.15)] before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-[linear-gradient(0deg,transparent,transparent_30%,rgba(0,255,255,0.3))] before:rotate-[-45deg] before:opacity-0 before:transition-all before:duration-500 hover:before:opacity-100 hover:before:translate-y-full">
            DOWNLOAD CV <img src={download} className="w-4 h-4 relative z-10" />
          </a>
        </div>

        <div className={`flex gap-5 transition-all duration-700 ${showSocials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {[github, linkedin, instagram].map((icon, index) => (
            <div key={index} className="w-10 h-10 rounded-full border border-[#044D4E] flex items-center justify-center shadow-[0_0_10px_#00c5c818] hover:shadow-[0_0_100px_#00C5C8] transition-all duration-300 hover:scale-110 hover:rotate-[20deg] hover:cursor-pointer">
              <img src={icon} className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}