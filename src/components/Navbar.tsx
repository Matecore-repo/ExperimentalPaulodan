import React, { useState } from 'react';
import matecoreLogo from '../resources/Matecore.png';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="
        fixed inset-x-3 top-3 z-30
        mx-auto
        w-[calc(100%-1.5rem)] max-w-screen-md
        py-3
        bg-black/20 shadow backdrop-blur-lg rounded-3xl border
        md:top-6 lg:max-w-screen-lg sm:border-white
        "
      >
        <div className="px-4">
          <div className="flex items-center justify-between">
            {/* Logo a la izquierda */}
            <div className="flex shrink-0 ml-2">
              <a aria-current="page" className="flex items-center" href="/">
                <img
                  className="h-7 w-auto"
                  src={matecoreLogo}
                  alt="Matecore Logo"
                />
                <p className="sr-only">Website Title</p>
              </a>
            </div>

            {/* Botón hamburguesa en mobile */}
            <button
              className="md:hidden flex items-center px-3 py-2  rounded text-white "
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Contenedor texto + botón alineado a la derecha */}
            <div className="hidden md:flex md:items-center md:gap-6">
              {/* Texto del menú */}
              <div className="flex gap-5">
                <a
                  aria-current="page"
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 hover:text-white"
                  href="#hero"
                >
                  Hogar
                </a>
                <a
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 hover:text-white"
                  href="#electric"
                >
                  Sistema
                </a>
                <a
                  aria-current="page"
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 hover:text-white"
                  href="#slots"
                >
                  Lotes
                </a>
              </div>

              {/* Botón WhatsApp */}
              <a
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#1DA851] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                href="https://wa.me/+541126660716/?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20qu%C3%A9%20terrenos%20tienen%20disponibles."
                target="_blank"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Menú desplegable en mobile */}
        <div
            className={`
              md:hidden absolute
              border-white border-1 rounded-3xl
              transition-all duration-300 ease-in-out
              top-17
              ${menuOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto bg-black/20 py-3 shadow backdrop-blur-lg w-full'
                : 'invisible opacity-0 -translate-y-4 pointer-events-none'
              }
            `}
        >
          <a className="block px-2 py-2 text-white hover:bg-white/20 rounded" href="#hero">Hogar</a>
          <a className="block px-2 py-2 text-white hover:bg-white/20 rounded" href="#">Sistema</a>
          <a className="block px-2 py-2 text-white hover:bg-white/20 rounded" href="#slots">Lotes</a>
          <a className="
            inline-flex items-center justify-center
            rounded-xl bg-[#25D366] px-3 py-2
            text-sm font-semibold text-white shadow-sm
            mt-2 mx-2
            transition-all duration-150
            hover:bg-[#1DA851]
            focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#25D366]
            " 
            href="https://wa.me/+541126660716/?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20qu%C3%A9%20terrenos%20tienen%20disponibles."
          >WhatsApp</a>
        </div>
      </header>
    </>
  );
};

export default Navbar;