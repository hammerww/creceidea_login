'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import VisitasVentas from './VisitasVentas';
import VentasDia from './VentasDia';
import ProductosTop from './ProductosTop';
import NewComponent from './NewComponent';
import Productos from './Productos';
import Ordenes from './Ordenes';

interface UserCondition {
  status: string;
  msg: string;
  _id: string;
}

interface UserData {
  _id: string;
  email: string;
  phonecell: string;
  condition: UserCondition;
  date_register: string;
  last_time: string;
}

interface UserToken {
  value: string;
  expiry: string;
}

const HomePage = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [token, setToken] = useState<UserToken | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(JSON.parse(storedToken));
    }
    else {
      window.location.href = '/';
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  if (!user || !token) {
    return <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-gray-900"></div>
  </div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-grow p-4">
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-full w-full">
          {/* <h1 className="text-2xl font-bold text-center text-gray-700">Bienvenido/a, {user.email}</h1>
          <p className="text-blue-600 mt-4 text-center">
            Has iniciado sesión exitosamente. ¡Gracias por usar nuestra aplicación!
          </p>
          <div className="mt-6">
            <div className="bg-gray-200 p-4 rounded">
              <h2 className="text-lg font-semibold">Detalles del usuario:</h2>
              <ul className="list-disc pl-5">
                <li>ID: {user._id}</li>
                <li>Email: {user.email}</li>
                <li>Teléfono: {user.phonecell}</li>
                <li>Estado: {user.condition.msg}</li>
                <li>Registrado en: {user.date_register}</li>
                <li>Última conexión: {user.last_time}</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button onClick={handleLogout} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
              Cerrar sesión
            </button>
          </div> */}

      <div className="flex-grow flex flex-wrap">
        {/* Componentes del panel */}
        {/* Componente 1: Estadísticas de Visitas y Ventas */}
        <div className="w-full lg:w-1/4 p-1">
          <VisitasVentas  />
        </div>
        {/* Componente 2: Producto más vendido */}
        <div className="w-full lg:w-1/4 p-1">
          <VentasDia />
        </div>
        {/* Componentes adicionales según se requieran */}
        <div className="w-full lg:w-1/4 p-1">
          <ProductosTop />
        </div>
        <div className="w-full lg:w-1/4 p-1">
          <NewComponent />
        </div>
        {/* Más componentes según diseño */}

        {/* Segunda fila de componentes para Productos y Ordenes */}
      <div className="w-full lg:w-1/3 p-2">
        <Productos />
      </div>
      <div className="w-full lg:w-2/3 p-2">
        <Ordenes />
      </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
