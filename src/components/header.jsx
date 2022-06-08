/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

import { Anchor } from './anchor';

export const Header = () => {
  const isAuth = true;

  return (
    <header className="bg-white shadow dark:bg-gray-800">
      {/* Wrapper */}
      <div className="container px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          {/* Mobile */}
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <Anchor
                className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                href="/"
              >
                All Mart
              </Anchor>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <FiMenu className="text-xl" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 md:flex md:items-center md:justify-between">
            {/* Navigation */}
            <nav className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <Anchor
                href="/"
                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                Início
              </Anchor>
              <Anchor
                href="/contact"
                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                Contato
              </Anchor>
              <Anchor
                href="/about"
                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                Sobre
              </Anchor>
            </nav>

            <div className="flex items-center mt-4 md:mt-0">
              {/* Cart Link */}
              <Anchor
                className="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                href="/cart"
                aria-label="Ver carrinho"
              >
                <FiShoppingCart className="text-xl" />
              </Anchor>

              {isAuth ? (
                <button
                  type="button"
                  className="flex items-center focus:outline-none md:flex-row-reverse"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>
                  <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                    Khatab wedaa
                  </h3>
                </button>
              ) : (
                <div className="flex gap-2">
                  <Link href="/signin" passHref>
                    <a className="btn btn-secondary">Login</a>
                  </Link>
                  <Link href="/signup" passHref>
                    <a className="btn btn-primary">Registrar</a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
