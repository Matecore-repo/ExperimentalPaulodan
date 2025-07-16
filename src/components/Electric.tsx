import React from 'react';
import electricistaImg from '../resources/Electricista.jpg';

const Hero2Cmp: React.FC = () => {
    return (
<>
<section className="w-full h-screen flex justify-center items-center">
  <div className="flex flex-col md:flex-row w-[95%] h-[80%] items-center justify-center">
    {/* Imagen con margen derecho en desktop */}
    <div className="w-full md:w-1/2 h-full flex justify-center items-center md:mr-12">
      <img
  src={electricistaImg}
  alt="Electricista"
  className="w-full h-full object-cover rounded-xl shadow-lg"
/>

    </div>

    {/* Texto y botón */}
    <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center p-6">
      <h2 className="text-4xl font-bold mb-4 text-white">
        Invertí en tu futuro
      </h2>
      <p className="text-lg text-white mb-6">
        Comprar un terreno en Argentina es una excelente forma de asegurar tu
        patrimonio y proyectar tu hogar o negocio. Ademas contamos con sistemas electricos
        de alta calidad para tu proyecto.
      </p>
      <a
  href="#"
  className="bg-blue-600 text-white hover:bg-blue-500 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105"
>
  Ver terrenos disponibles
</a>

    </div>
  </div>
</section>
</>
    );
};

export default Hero2Cmp;