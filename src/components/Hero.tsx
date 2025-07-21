import React from 'react';
import bg from '../resources/Background.png';

const Hero: React.FC = () => {
  return (
<section id="hero" className="w-full h-screen flex justify-center items-center">
  <div
    className="w-[95%] max-w-9xl min-h-[95%] rounded-xl bg-cover bg-center p-10 text-center shadow-2xl text-white flex flex-col justify-center items-center"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <h1 className="text-5xl font-bold mb-4">
      Paulodan Desarrollos Inmobiliarios S.A
    </h1>
    <p className="text-lg mb-8">
      Te estamos esperando para llevar tu proyecto al siguiente nivel.
    </p>
    <a
      href="https://wa.me/+541126660716/?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20qu%C3%A9%20terrenos%20tienen%20disponibles."
      className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      Contactanos
    </a>
  </div>
</section>


  );
};

export default Hero;

