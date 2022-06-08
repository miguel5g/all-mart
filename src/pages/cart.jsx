import { FiShoppingCart } from 'react-icons/fi';

import { CartDetails } from '../components/cart-details';
import { CartItem } from '../components/cart-item';
import { useCart } from '../hooks/use-cart';

const Cart = () => {
  const { cart, removeFromCart } = useCart()
  
  return (
    <div className="flex h-screen p-2">
      <section className="flex flex-col w-2/3 gap-2 mx-8 ">
        {cart.map((item) => <CartItem key={item.id} item={item} removeCart={removeFromCart} />)}
      </section>

      <section className="flex-1 border-l-2 border-gray-400 ">
        <header className="flex items-center justify-center gap-8">
          <FiShoppingCart className="w-8 h-8 text-gray-800" />
          <h2 className="text-gray-800 text-bold">Detalhes da compra</h2>
        </header>

        <main className="flex flex-col items-center gap-2">
          <section>
            <CartDetails />
          </section>
        </main>
      </section>
    </div>
  );
};

export default Cart;
