import { FiCheckCircle } from 'react-icons/fi';

import { useCart } from '../hooks/use-cart';

export const CartDetails = () => {
  const { cart } = useCart();
  const total = cart.reduce((previous, current) => previous + current.price, 0);

  return (
    <div className="flex items-center justify-between max-w-xl px-8 py-4 mx-4 border border-blue-500 cursor-pointer rounded-xl">
      <div className="flex items-center">
        <FiCheckCircle className="w-2 h-2 text-blue-600 sm:h-9 sm:w-9" />

        <div className="flex flex-col items-center mx-5 space-y-1">
          <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
            Total
          </h2>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-blue-600 sm:text-2xl">{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>
    </div>
  );
};
