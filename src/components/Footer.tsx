
import React from 'react'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2" >
              <img src="./src/assets/logo.png" className='h-20 max-w-70' alt="" />
            </div>
            <p className="text-gray-300 mb-4">
              Associação Maringaense de Ajuda a Animais Resgatados.
              Há mais de 11 anos mudando a realidade de animais abandonados.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">(44) 9845-48193</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">ongamaar@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">Maringá - PR</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Como Ajudar</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Adote um animal</li>
              <li>• Faça uma doação</li>
              <li>• Apadrinhe um pet</li>
              <li>• Seja voluntário</li>
              <li>• Divulgue nossa causa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Desenvolvido por:</h3>
            <ul className="space-y-2 text-gray-300">
              <li> Anthony Conrado</li>
              <li> Gabriel Freitas</li>
              <li> Luis Messias</li>
            </ul>

        </div>
      </div>
    </footer>
  )
}

export default Footer
