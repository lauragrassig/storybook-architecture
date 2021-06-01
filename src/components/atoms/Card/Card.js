import React from 'react';

export default function Card ({ children, highlight }) {
  const cardClassName = highlight ? "Card Sale" : "Card"; 
  
  return <div className={cardClassName}> {children} </div>;
}