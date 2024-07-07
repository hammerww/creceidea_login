import React from 'react';

const Ordenes = () => {
  const ordenes = [
    { numero: "#048", cliente: "Juan García", fechaCompra: "27/07/2024", fechaPago: "18:26", estado: "Aprobado", total: "S/ 1,299" },
    { numero: "#032", cliente: "Carlos González", fechaCompra: "27/07/2024", fechaPago: "15:34", estado: "Aprobado", total: "S/ 100" },
    // Más ordenes aquí...
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="font-bold text-xl mb-4">Ordenes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left">
              <th>N° de orden</th>
              <th>Cliente</th>
              <th>Fecha de compra</th>
              <th>Fecha de pago</th>
              <th>Estado</th>
              <th>Precio Total</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((orden, index) => (
              <tr key={index} className="bg-gray-100">
                <td>{orden.numero}</td>
                <td>{orden.cliente}</td>
                <td>{orden.fechaCompra}</td>
                <td>{orden.fechaPago}</td>
                <td>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${orden.estado === "Aprobado" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {orden.estado}
                  </span>
                </td>
                <td>{orden.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ordenes;
