import React from 'react';

function ProductList({ products, onDeleteProduct, onAddToCart }) {
  return (
    <div className="mt-4">
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img 
                  src={product.image_url || 'https://via.placeholder.com/150'} 
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price.toFixed(2)}</p>
                  <div className="d-flex justify-content-between">
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => onAddToCart(product.id)}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => onDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;