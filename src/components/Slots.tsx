import React from 'react';
import Lotes from '../resources/Lotes.png';

const Slots: React.FC = () => {
  return (
    <>
    <section id='slots' className="w-full h-100% flex justify-center items-center">
  <div className="flex flex-col md:flex-row-reverse w-[95%] h-[80%] items-center justify-center">
    {/* Imagen a la derecha */}
    <div className="w-full md:w-1/2 h-100% flex justify-center items-center md:ml-12">
      <img
        src={Lotes}
        alt="Matecore"
        className="w-full h-full object-cover rounded-xl shadow-lg"
      />
    </div>

{/* Texto a la izquierda pero bloque centrado */}
<div id='lotesDisponibles' className="w-full md:w-1/3 h-full flex justify-center items-center p-6">
  <div className="flex flex-col items-start text-left">
    <h2 className="text-4xl font-bold mb-4 text-white">
      Lotes disponibles
    </h2>

    <h3 className="text-2xl font-semibold mb-4 text-white">
      Juan Jose Jáuregui
    </h3>

    <div className="space-y-4">
      {/* Línea 1 con círculo verde */}
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#6CC885' }}></div>
        <p className="text-lg text-white">32 Lotes de empleados municipales.</p>
      </div>

      {/* Línea 2 con círculo violeta */}
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C688D7' }}></div>
        <p className="text-lg text-white">144 Lotes generales.</p>
      </div>

      {/* Línea 3 sin círculo */}
      <p className="text-lg text-white">Total 178 lotes.</p>
    </div>
  </div>
</div>

  </div>
</section>


    </>
  );
};

export default Slots;
