import React from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="card">
      <div className="card-header">Shopping Cart</div>
      <div className="card-body">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cartItems.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </small>
                  </div>
                  <div>
                    <span className="badge bg-primary rounded-pill me-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button 
                      className="btn btn-sm btn-danger"
                      onClick={() => onRemoveFromCart(item.id)}
                    >
                      &times;
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between">
              <h5>Total:</h5>
              <h5>${calculateTotal().toFixed(2)}</h5>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;