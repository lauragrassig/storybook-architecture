import React from 'react';

export default function Card ({ children, highlight }) {
  const cardClassName = highlight ? "card Sale" : "card"; 

  return <div className={cardClassName}> {children} </div>;
}