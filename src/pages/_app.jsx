import '../styles/globals.css';

import { CartProvider } from '../contexts/cart-context';
import { AuthProvider } from '../contexts/auth-context';

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
