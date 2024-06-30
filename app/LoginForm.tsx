// app/LoginForm.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faEye, faEyeSlash,faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';


const LoginForm = () => {
  //const router = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);
  const [ruc, setRuc] = useState('');
  const [password, setPassword] = useState('');
  const [rucError, setRucError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (user && token) {
      //router.replace('/home');
      window.location.href = '/home';
    }
  }, []);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  if (!loaded) {
    return null; // O renderiza un placeholder si prefieres
  }

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    // Limpiar errores previos al iniciar una nueva solicitud de login
    setRucError('');
    setPasswordError('');
    const myHeaders = new Headers({
      'Content-Type': 'application/json'
    });

    const raw = JSON.stringify({
      'email': ruc,
      'password': password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow' as RequestRedirect,
    };


    try {
      const response = await fetch('https://api-auth.creceidea.pe/api/login', requestOptions);
      const result = await response.json();

      if (result.status === 'success') {
        localStorage.setItem('user', JSON.stringify(result.data.user));
        localStorage.setItem('token', JSON.stringify(result.data.token));
        window.location.href = '/home';
      } else {
        if (result.message === 'Usuario no encontrado') {
          setRucError('El usuario no existe');
        } else if (result.message === 'Contraseña incorrecta') {
          setPasswordError('Contraseña incorrecta');
        }
        console.error('Login failed:', result.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }

  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="bg-cover bg-center w-full h-56 md:h-full md:flex-1" style={{ backgroundImage: "url('/imagen_p.png')" }}>
        {/* La imagen y el diseño del lado izquierdo se controlan mediante CSS */}
      </div>
      <div className="flex-1 flex items-center justify-center p-4 dark:bg-cyan-900">
        <form className="w-full max-w-sm p-5 rounded  text-center" onSubmit={handleLogin}>
          <h2 className="text-2xl text-left text-gray-700 font-bold mb-5 dark:text-white">Iniciar Sesión</h2>
          <div className={`input-group ${rucError ? 'outline-black-500' : 'border-gray-100'}`}>
            <h3 className="field-title text-left pt-6">RUC</h3>
            <div className="relative h-30">
              <FontAwesomeIcon icon={faUser} className="absolute text-gray-300 text-lg left-2 top-5 transform -translate-y-1/2" />
                <input
                id="ruc"
                //className="border-2 border-rose-600"
                type="text"
                placeholder="10098765432"
                value={ruc}
                onChange={e => setRuc(e.target.value)}
                className={`input text-left left-20 w-full pl-8 py-2 border-2 rounded-lg dark:bg-cyan-900 ${rucError ? 'border-rose-600 bg-pink-100' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
              />
              {rucError && (
                <div className="text-red-500 text-sm flex items-center mt-1">
                  <FontAwesomeIcon icon={faExclamationCircle} className="mr-1" />
                  {rucError}
                </div>
              )}
            </div>
          </div>
          <div className={`input-group ${passwordError ? 'border-red-500' : 'border-blue-100'}`}>
            <h3 className="field-title text-left pt-6">Contraseña</h3>
            <div className="relative h-32 ">
              <FontAwesomeIcon icon={faKey} className="absolute text-gray-300 text-lg left-2 top-5 transform -translate-y-1/2" />
              <input
                id="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Clave de ingreso"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={`input w-full pl-8 py-2 border-2 rounded-lg dark:bg-cyan-900 ${passwordError ? 'border-red-500 bg-pink-100' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
              />
              {passwordError && (
                <div className="text-red-500 text-sm flex items-center mt-1">
                  <FontAwesomeIcon icon={faExclamationCircle} className="mr-1" />
                  {passwordError}
                </div>
              )}
              <div className="absolute text-gray-300 text-lg right-2 top-5 transform -translate-y-1/2 cursor-pointer"
                   onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
              </div>
            </div>
          </div>

          <button type="submit" className="w-2/5 py-2 text-white bg-orange-600 rounded-full hover:bg-orange-700 transition-colors ">
            Ingresar
          </button>
          <div className="mt-5 text-sm">
            <a href="#" className="text-gray-400 font-bold hover:underline">¿Olvidaste tu clave?</a>
          </div>
          <div className="mt-2 text-sm">
            <text className="text-gray-400">¿Aún no tienes cuenta?</text>
            <a href="#" className="text-gray-400 font-bold hover:underline"> Registrarse</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
