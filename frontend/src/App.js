import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';
import Cart from './components/Cart';
import { getProducts, addProduct, deleteProduct, 
         getCartItems, addToCart, removeFromCart } from './services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCartItems();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  const fetchCartItems = async () => {
    try {
      const data = await getCartItems();
      setCartItems(data);
    } catch (err) {
      setError('Failed to fetch cart items');
    }
  };

  const handleAddProduct = async (product) => {
    try {
      await addProduct(product);
      fetchProducts();
    } catch (err) {
      setError('Failed to add product');
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      fetchProducts();
    } catch (err) {
      setError('Failed to delete product');
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId);
      fetchCartItems();
    } catch (err) {
      setError('Failed to add item to cart');
    }
  };

  const handleRemoveFromCart = async (itemId) => {
    try {
      await removeFromCart(itemId);
      fetchCartItems();
    } catch (err) {
      setError('Failed to remove item from cart');
    }
  };

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5 alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4">E-Commerce Store</h1>
      
      <div className="row">
        <div className="col-md-8">
          <AddProductForm onAddProduct={handleAddProduct} />
          <ProductList 
            products={products}
            onDeleteProduct={handleDeleteProduct}
            onAddToCart={handleAddToCart}
          />
        </div>
        <div className="col-md-4">
          <Cart
            cartItems={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;