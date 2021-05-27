import React from 'react';
import './ProductListItem.css';

export default function ProductListItem({name, price, imageUrl, onAddToCart}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={imageUrl} alt=""/>
      <small>{price}</small>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}