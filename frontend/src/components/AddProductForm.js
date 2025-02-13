import React, { useState } from 'react';

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!price) newErrors.price = 'Price is required';
    if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      newErrors.price = 'Price must be a positive number';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    onAddProduct({
      name,
      price: parseFloat(price),
      image_url: imageUrl
    });
    
    // Reset form
    setName('');
    setPrice('');
    setImageUrl('');
    setErrors({});
  };

  return (
    <div className="card mb-4">
      <div className="card-header">Add New Product</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Product Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price ($)</label>
            <input
              type="text"
              className={`form-control ${errors.price ? 'is-invalid' : ''}`}
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && <div className="invalid-feedback">{errors.price}</div>}
          </div>
          
          <div className="mb-3">
            <label htmlFor="imageUrl" className="form-label">Image URL (optional)</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          
          <button type="submit" className="btn btn-success">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;