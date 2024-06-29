'use client';
import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(JSON.parse(storedToken));
    }
  }, []);

  if (!user || !token) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-gray-700">Bienvenido/a, {user.email}</h1>
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
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
