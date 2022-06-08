import axios from 'axios';

export async function getProduct(id) {
  try {
    const { data } = await axios.get(`https://api.mercadolibre.com/items/${id}`);

    return data;
  } catch (error) {
    return null;
  }
}

export async function getProducts(search = 'Caneca') {
  try {
    const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${search}`);

    return data.results;
  } catch (error) {
    return [];
  }
}

export async function getCategory() {
  try {
    const { data } = await axios.get('https://api.mercadolibre.com/sites/MLB/categories')
    return data
  } catch (error) {
    return []
  }
}
