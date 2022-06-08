import { useContext } from 'react';

import { cartContext } from '../contexts/cart-context';

export function useCart() {
  return useContext(cartContext);
}
