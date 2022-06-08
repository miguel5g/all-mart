import '../styles/globals.css';

import { CartProvider } from '../contexts/cart-context';

const App = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default App;
