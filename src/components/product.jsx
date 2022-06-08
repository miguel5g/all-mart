/* eslint-disable @next/next/no-img-element */
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../hooks/use-cart';

export const Product = ({ product }) => {
  const { title, price, thumbnail, id } = product;
  const { addToCart } = useCart();

  function handleAddToCart(event) {
    event.preventDefault();

    addToCart(product);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-sm">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg shadow">
        <img className="object-cover w-full h-72 xl:h-80" src={thumbnail} alt={title} />
        <p className="absolute bottom-0 right-0 px-3 pt-1.5 py-1 text-white rounded-tl-lg bg-black/60">
          {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>

      {/* Product Title */}
      <h4 className="mt-2 mb-auto text-lg font-medium text-gray-700 dark:text-gray-200">{title}</h4>

      {/* Add to Cart Button */}
      <button className="w-full btn btn-primary" onClick={handleAddToCart}>
        <FiShoppingCart />
        <span className="mx-1">Adicionar ao carrinho</span>
      </button>
    </div>
  );
};
