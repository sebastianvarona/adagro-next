import React from 'react';
const logo = 'images/logo.svg';

export default function () {
  return (
    <footer className="p-4 md:px-6 md:py-8 mt-20 max-w-7xl mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img src={logo} className="mr-3 h-16" alt="Adagro" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Adagro
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Acerca de
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href="" className="hover:underline">
          Asociación de Agricultores del Occidente Colombiano
        </a>
        . Todos los derechos reservados.
      </span>
    </footer>
  );
}
