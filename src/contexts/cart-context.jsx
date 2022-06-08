import { useEffect, useState, createContext } from 'react';

/**
 * @typedef CartItem
 *
 * @property {string} id - The id of the item.
 * @property {string} title - The description of the item.
 * @property {string} thumbnail - The thumbnail of the item.
 * @property {number} quantity - The quantity of the item.
 * @property {number} price - The price of the item.
 */

/**
 * @typedef {Function} AddToCart
 *
 * @param {CartItem} item - The item to be added to the cart.
 * @param {number} quantity - The quantity of the item.
 *
 * @returns {void}
 *
 * @example
 * const addToCart = (item, quantity) => {
 *  console.log(`Adding ${quantity} ${item.title} to cart.`);
 * };
 */

const initialCartContext = {
  /**
   * @type {CartItem[]}
   */
  cart: [],
  /**
   * @type {AddToCart}
   */
  addToCart: (item, product) => {},
  removeFromCart: () => {},
  clearCart: () => {},
};

export const cartContext = createContext(initialCartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCartContext.cart);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function addToCart(product) {
    setCart((current) => [...current, product]);
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
