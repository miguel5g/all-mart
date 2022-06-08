import { FiSearch } from 'react-icons/fi';
import { Anchor } from '../anchor';

import { Link } from './link';

export const Footer = () => {
  function handleSearch(event) {
    event.preventDefault();

    const search = document.querySelector('#search');

    if (search) search.focus();
  }

  return (
    <footer className="mt-auto bg-white dark:bg-gray-800">
      <div className="container px-6 py-8 mx-auto">
        <div className="text-center">
          <Anchor
            href="/"
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            All Mart
          </Anchor>

          <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">
            O maior e melhor marketplace de compras e vendas de produtos online.
          </p>

          <div className="flex flex-col gap-2 mt-4 sm:flex-row sm:items-center sm:justify-center">
            <button className="btn btn-secondary" onClick={handleSearch}>
              <FiSearch />
              <span>Pesquisar produtos</span>
            </button>

            <Anchor href="/signup" className="btn btn-primary">
              Criar conta
            </Anchor>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">© Copyright 2022. Todos os direitos reservados.</p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <Link href="/" aria-label="Time responsável">
              Time responsável
            </Link>
            <Link href="/" aria-label="Termos de uso">
              Termos de uso
            </Link>
            <Link href="/" aria-label="Política de privacidade">
              Política de privacidade
            </Link>
            <Link href="/" aria-label="Política de cookies">
              Política de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
