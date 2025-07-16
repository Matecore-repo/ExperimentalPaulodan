import React from 'react';
import matecoreLogo from '../resources/Matecore.png';

const Navbar: React.FC = () => {
  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-30 border mx-auto w-full max-w-screen-md bg-black/20 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg"
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

            {/* Contenedor texto + botón alineado a la derecha */}
            <div className="hidden md:flex md:items-center md:gap-6">
              {/* Texto del menú */}
              <div className="flex gap-5">
                <a
                  aria-current="page"
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 hover:text-white"
                  href="#"
                >
                  Hogar
                </a>
                <a
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 hover:text-white"
                  href="#"
                >
                  Sistema
                </a>
                <a
                  aria-current="page"
                  className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-white/20 hover:text-white"
                  href="#"
                >
                  Lotes
                </a>
              </div>

              {/* Botón WhatsApp */}
              <a
                className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#1DA851] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                href="/login"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

