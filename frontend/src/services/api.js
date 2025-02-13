import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(`${API_URL}/products`, product);
  return response.data;
};

export const deleteProduct = async (productId) => {
  const response = await axios.delete(`${API_URL}/products/${productId}`);
  return response.data;
};

export const getCartItems = async () => {
  const response = await axios.get(`${API_URL}/cart`);
  return response.data;
};

export const addToCart = async (productId) => {
  const response = await axios.post(`${API_URL}/cart/add/${productId}`);
  return response.data;
};

export const removeFromCart = async (itemId) => {
  const response = await axios.delete(`${API_URL}/cart/${itemId}`);
  return response.data;
};