import React from 'react';
import './ProductListItem.css';

export default function ProductListItem({name, price, imageUrl, onAddToCart, isSoldOut, isOnSale}) {
  return (
    // Create new component for card later
    <div className="card">
      <h2>{name} {isOnSale && "(On Sale)"}</h2>
      <img src={imageUrl} alt=""/>
      <small>{price}</small>
      <button onClick={onAddToCart} disabled="{isSoldOut}"> {isSoldOut ? "Sold out" : "Add to Cart"}</button>
    </div>
  );
}