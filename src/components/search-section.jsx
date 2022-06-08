import { FiSearch } from 'react-icons/fi';

export const SearchSection = () => {
  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <section className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
          O produto dos seus sonhos, a uma pesquisa de distância
        </h1>

        <p className="mt-6 text-gray-500 dark:text-gray-300">
          Aqui o único pecado é sair na vontade
        </p>

        <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
          <form className="flex flex-col md:flex-row" onSubmit={handleSearch}>
            <input
              id="search"
              className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              type="text"
              placeholder="Buque por um produto"
              required
            />

            <button
              type="submit"
              className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
            >
              <FiSearch className="text-lg" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
