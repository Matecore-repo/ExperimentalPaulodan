import React from 'react';
import primera from '../resources/Primera.jpeg';
import segunda from '../resources/Segunda.jpeg';
import tercera from '../resources/Tercera.jpeg';

const Leadership: React.FC = () => {
    return (
        <>
<section id='gallery' className="w-full py-16 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
    {/* Card 1 */}
    <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg">
      <img
        src={primera}
        alt="Proyecto 1"
        className="w-full h-90 object-cover"
      />
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Paulodan Desarrollos</h3>
        <p className="text-gray-300">
          Terrenos ideales para viviendas familiares en zona de alto crecimiento.<br />
          <br />
          Teléfono: 11-2666-0716 <br />
          Teléfono sec: 11-5823-1733 <br />
          Email: ventadelotes31@gmail.com
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg">
      <img
        src={segunda}
        alt="Proyecto 2"
        className="w-full h-90 object-cover"
      />
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Paulodan Desarrollos</h3>
        <p className="text-gray-300">
          Conexión con la naturaleza y acceso a servicios básicos en un entorno único.<br />
          <br />
          Teléfono: 11-2666-0716 <br />
          Teléfono sec: 11-5823-1733 <br />
          Email: ventadelotes31@gmail.com
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg">
      <img
        src={tercera}
        alt="Proyecto 3"
        className="w-full h-90 object-cover"
      />
      <div className="p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Paulodan Desarrollos</h3>
        <p className="text-gray-300">
          Oportunidad para inversores en zonas estratégicas con alta circulación.<br />
          <br />
          Teléfono: 11-2666-0716 <br />
          Teléfono sec: 11-5823-1733 <br />
          Email: ventadelotes31@gmail.com
        </p>
      </div>
    </div>
  </div>
</section>


</>
    );
};

export default Leadership;