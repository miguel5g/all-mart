import { useEffect, useState } from 'react';

import { getProducts } from '../libs/products';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Product } from '../components/product';
import { SearchSection } from '../components/search-section';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <SearchSection />

      <ul className="grid max-w-6xl grid-cols-1 gap-4 p-8 mx-auto md:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((data) => (
          <li key={data.id} className="">
            <Product product={data} />{' '}
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default Home;
