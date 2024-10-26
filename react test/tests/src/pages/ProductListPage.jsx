import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../Components/ProductCard';
import { addToCart } from '../features/cartSlice';

function ProductListPage() {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={() => dispatch(addToCart(product))} />
      ))}
    </div>
  );
}

export default ProductListPage;
