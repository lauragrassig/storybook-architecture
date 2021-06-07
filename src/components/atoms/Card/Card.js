import React from 'react';
import "../../../theme.css";
import "./Card.css";

export default function Card({ children }) {
  return <div className="card">{children}</div>;
}