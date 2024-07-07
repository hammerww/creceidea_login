import React from 'react';

const ProductosTop = () => {
  return (
    <div className="bg-slate-100 p-8 rounded-lg shadow-lg border border-[#83B8D5] relative overflow-hidden" style={{ width: '300px', height: '300px' }}>
      {/* Sub-contenedor para el selector de fecha */}
      <div className="absolute top-0 left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-md py-2 px-4 flex justify-between items-center">
        <div className="flex-1 truncate">Ventas de hoy</div> {/* Ajustamos el texto con truncate */}
        <button className="bg-green-200 text-green-800 rounded-full p-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="chevron-down w-5 h-5">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Detalles de ventas */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="text-3xl font-bold">S/ 500.00</div>
        <div className="text-sm text-gray-600">S/ 300.00 ventas de ayer</div>
        <div className="text-green-500 font-bold mt-2">+67%</div>
      </div>

      {/* Botón flotante y fondo ondulado */}
      <div className="absolute bottom-0 left-0 w-full flex items-end justify-center pb-5">
        <div className="bg-white rounded-full p-2 shadow-lg">S/ 99.00</div>
        <svg className="absolute bottom-0" width="100%" height="60" fill="none">
          <path fill="rgba(255, 255, 255, 0.7)" d="M0,30 Q150,90 300,30 T600,30 V60 H0 Z" />
        </svg>
      </div>
    </div>
  );
};

export default ProductosTop;