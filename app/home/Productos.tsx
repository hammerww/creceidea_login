import React from 'react';

const Productos = () => {
  const productos = [
    { nombre: "Producto", rangoPrecio: "S/1,599 - S/1,200", disponible: true },
    { nombre: "Producto", rangoPrecio: "S/1,599 - S/1,200", disponible: true },
    { nombre: "Producto", rangoPrecio: "S/1,599 - S/1,200", disponible: false },
    { nombre: "Producto", rangoPrecio: "S/1,599", disponible: true }
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="font-bold text-xl mb-4">Productos</h2>
      <div className="space-y-3">
        {productos.map((producto, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full ${producto.disponible ? 'bg-green-500' : 'bg-gray-400'}`}></div>
              <div className="ml-3">
                <h3 className="font-semibold">{producto.nombre}</h3>
                <p>{producto.rangoPrecio}</p>
              </div>
            </div>
            <div>
              <button className="text-green-500">✓</button>
              <button className="text-red-500 ml-2">✕</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
