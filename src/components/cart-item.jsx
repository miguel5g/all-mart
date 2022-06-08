export const CartItem = ({ item, removeCart }) => {
  const { id, title, price, thumbnail } = item;

  return (
    <div className="flex w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="w-40 bg-cover">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="w-2/3 p-4 md:p-4">
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{title};</p>
        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{price}</h1>
          <button className="btn btn-secondary" onClick={() => removeCart(id)}>
            {' '}
            Remover
          </button>
        </div>
      </div>
    </div>
  );
};
