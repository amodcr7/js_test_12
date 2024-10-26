import React from 'react';

function ProductCard({ product, addToCart }) {
  if (!product) return null; // Ensures product is defined before proceeding
  
  return (
    <div>
      {/* Optional chaining to prevent undefined errors */}
      <img src={product?.image || 'https://via.placeholder.com/150'} alt={product?.title || 'Product'} width="100" />
      <h3>{product?.title || 'No title available'}</h3>
      <p>${product?.price?.toFixed(2) || '0.00'}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
